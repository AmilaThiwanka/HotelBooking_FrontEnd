import React from "react"
import { Link } from "react-router-dom"

const BlogCard = ({ item: { _id, image, type, desc, description, name, price } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={image} alt='Gallery Image' />
        </div>

        <div className='category flex_space'>
          <span>{price}</span>
          <label>{name}</label>
        </div>

        <div className='details'>
          <h3>{type}</h3>
          <p>{description.substring(0, 400)}</p>
        </div>

        <Link to={`/blogsingle/${_id}`} className='blogItem-link'>
          READ MORE <i className='fa fa-long-arrow-right'></i>
        </Link>
      </div>
    </>
  )
}

export default BlogCard