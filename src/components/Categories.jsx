import React from 'react'

export default function Categories({ category, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryItem, index) =>
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={category === index ? 'active' : ''}>
            {categoryItem}
          </li>
        )}
      </ul>
    </div>
  )
}
