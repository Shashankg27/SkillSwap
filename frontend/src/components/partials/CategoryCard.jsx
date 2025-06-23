import React from 'react'

const CategoryCard = ( {title, icon, color, total} ) => {
  return (
    <div className='bg-white shadow-xl p-2'>
        <i className={`${icon}`} style={{ color }}></i>
        <p>{title}</p>
        <p>{total} skills</p>
    </div>
  )
}

export default CategoryCard
