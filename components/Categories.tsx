import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(()=>{
    getCategories()
    .then((newCategories:any)=> {
      setCategories(newCategories)
    })
  },[]);

  const categoryList = categories.map((category:{name: string; slug: string})=>{
    return(
    <Link key={category.slug} href={`/category/${category.slug}`} >
      <span className='cursor-pointer block pb-3 mb-3'>
        {category.name}
      </span>
    </Link>
    )
  })
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categoryList}
    </div>
  )
}

export default Categories