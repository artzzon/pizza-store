import React, { useState } from 'react'

export default function Categories() {
  const [category, setCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = (index) => {
    setCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryItem, index) =>
          <li onClick={() => onClickCategory(index)} className={category === index ? 'active' : ''}>{categoryItem}</li>)}
      </ul>
    </div>
  )
}
