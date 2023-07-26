import React, { useState } from "react"
import "../../Components/Blog/BlogHome.css"
import BlogCard from "../../Components/Blog/BlogCard"

const SearchResults = (props) => {
  const [items, setIems] = useState(props.data)
  return (
    <>
      <section className='blog top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              console.log(item._id)
              return <BlogCard key={item._id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchResults