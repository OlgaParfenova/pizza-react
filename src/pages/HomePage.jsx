import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { activateCategoryId, activateCurrentPage } from '../redux/slices/filterSlice';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock, Skeleton } from '../components/PizzaBlock';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';

export const HomePage = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filterReducer.categoryId);
  const sortType = useSelector((state) => state.filterReducer.sort.sortProperty);
  const currentPage = useSelector((state) => state.filterReducer.currentPage);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(activateCategoryId(id));
  };

  const handleChangePage = (number) => {
    dispatch(activateCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://6516ea5f09e3260018ca785e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((element) => <PizzaBlock key={element.title} {...element} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories categoryId={categoryId} handleChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={handleChangePage} />
    </div>
  );
};
