import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = () => {  // Moved useState and useEffect inside the functional component
  const [book, setBook] = useState([]);  // Fixed capitalization of setBook

  useEffect(() => {
    const getBook = async () => {  // Fixed capitalization of getBook
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);  // Fixed capitalization of setBook
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 justify-center text-center items-center'>
          <h1 className='text-2xl md:text-4xl'>We're delight to have you <span className='text-pink-500'>Here:)</span></h1>
          <p className='text-xl text-center mt-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link to="/">
            <button className="btn mt-6 btn-secondary px-6 py-0 ">Back</button>
          </Link>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
