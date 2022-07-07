import React, { useState } from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';
import Pagination from '../components/Pagination';

export default function Home({ searchValue }) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSortCategory, setActiveSortCategory] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const order = activeSortCategory.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = activeSortCategory.sortProperty.replace('-', '');
    const currentCategory = category > 0 ? `category=${category}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(`https://62b8a44403c36cb9b7ca1e33.mockapi.io/items?page=${currentPage}&limit=4&${currentCategory}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, activeSortCategory, searchValue, currentPage]);

  const renderPizzas = pizzas
    //.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => <Pizza key={pizza.id} {...pizza} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} onClickCategory={(i) => setCategory(i)} />
        <Sort activeSortCategory={activeSortCategory} onClickSort={((i) => setActiveSortCategory(i))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeleton : renderPizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}
