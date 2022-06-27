import React from 'react'
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <Link to='/'>
        <button className={styles.button}>Вернуться на главную страницу</button>
      </Link>
    </div>
  )
}
