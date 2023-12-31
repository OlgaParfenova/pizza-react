import { useContext, useCallback, useState, useRef } from 'react';
import debounce from 'lodash.debounce';

import { SearchContext } from '../../App';

import styles from './SearchBlock.module.scss';

export const SearchBlock = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();
  const handleClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  const handleUpdateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const handleChangeInput = (event) => {
    setValue(event.target.value);
    handleUpdateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} data-testid='SearchIcon'>
        <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={handleChangeInput}
        className={styles.input}
        placeholder='Поиск пиццы ...'
      />
      {value && (
        <svg onClick={handleClickClear} className={styles.clearIcon} data-testid='CloseIcon'>
          <path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
        </svg>
      )}
    </div>
  );
};
