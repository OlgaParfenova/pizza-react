import { useState } from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickCategories = (index) => {
    setActiveIndex(index);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((element, index) => (
          <li
            key={element}
            onClick={() => handleClickCategories(index)}
            className={activeIndex === index ? 'active' : ''}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};
