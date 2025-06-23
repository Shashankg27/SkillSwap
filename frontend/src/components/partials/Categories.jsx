import React from 'react'

const Categories = () => {
  const categoriesData = [
    {
      title: "Technology",
      icon: "fa-solid fa-code",
      color: "#279af1",
      total: 1234
    },
    {
      title: "Design",
      icon: "fa-solid fa-palette",
      color: "#B197FC",
      total: 856
    },
    {
      title: "Languages",
      icon: "fa-regular fa-language",
      color: "#40E0D0",
      total: 642
    },
    {
      title: "Music",
      icon: "fa-solid fa-music",
      color: "#e031ed",
      total: 432
    },
    {
      title: "Business",
      icon: "fa-solid fa-briefcase",
      color: "#1edca3",
      total: 789
    },
    {
      title: "Fitness",
      icon: "fa-solid fa-dumbbell",
      color: "#ff944d",
      total: 312
    }
  ];
  return (
    <div className='bg-gray-100 py-15 flex flex-col items-center justify-center gap-4'>
      <p className='font-bold text-4xl'>Popular Skill Categories</p>
      <p className='font-semibold text-xl text-gray-600'>Discover what you can learn and teach</p>
      <div>

      </div>
    </div>
  )
}

export default Categories
