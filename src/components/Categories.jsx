import React, { useState } from 'react'

export default function Categories() {
  const [category, setCategory] = useState(0);

  const onClickCategory = (index) => {
    setCategory(index)
  }

  return (
    <div className="categories">
    <ul>
      <li onClick={() => onClickCategory(0)} className={category === 0 ? 'active' : ''}>Все</li>
      <li onClick={() => onClickCategory(1)} className={category === 1 ? 'active' : ''}>Мясные</li>
      <li onClick={() => onClickCategory(2)} className={category === 2 ? 'active' : ''}>Вегетарианская</li>
      <li onClick={() => onClickCategory(3)} className={category === 3 ? 'active' : ''}>Гриль</li>
      <li onClick={() => onClickCategory(4)} className={category === 4 ? 'active' : ''}>Острые</li>
      <li onClick={() => onClickCategory(5)} className={category === 5 ? 'active' : ''}>Закрытые</li>
    </ul>
  </div>
  )
}
