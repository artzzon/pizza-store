import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

//redux
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const dispatch = useDispatch();
  const { category, sort, currentPage } = useSelector(state => state.filter);

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  }

  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const currentCategory = category > 0 ? `category=${category}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    axios.get(`https://62b8a44403c36cb9b7ca1e33.mockapi.io/items?page=${currentPage}&limit=4&${currentCategory}&sortBy=${sortBy}&order=${order}&${search}`)
      .then(res => {
        setPizzas(res.data);
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [category, sort.sortProperty, searchValue, currentPage]);

  const renderPizzas = pizzas
    //.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => <Pizza key={pizza.id} {...pizza} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeleton : renderPizzas}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home;