import React, { useState } from 'react'

export default function Categories() {
  const [category, setCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryItem, index) =>
          <li key={index} onClick={() => setCategory(index)} className={category === index ? 'active' : ''}>{categoryItem}</li>
        )}
      </ul>
    </div>
  )
}
