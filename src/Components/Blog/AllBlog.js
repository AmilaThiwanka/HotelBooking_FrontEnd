import React, { useState } from "react"
import "./BlogHome.css"
import BlogData from "./BlogData"
import BlogCard from "./BlogCard"
import { useEffect } from "react"

const AllBlog = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/rooms");
        const jsonData = await response.json();
        setItems(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <section className='blog top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllBlog