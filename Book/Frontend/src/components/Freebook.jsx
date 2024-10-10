import React,{useState, useEffect} from 'react'
import Cards from '../components/Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
const Freebook = () => {

  const [book, setBook] = useState([]);  // Fixed capitalization of setBook

  useEffect(() => {
    const getBook = async () => {  // Fixed capitalization of getBook
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data.filter((data)=>data.category==="Free"));  // Fixed capitalization of setBook
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='text-xl font-bold pb-3'>Free Offered Courses</h1>
        <p className=''>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
    </div>
    <div >
      <Slider {...settings}>
  {book.map((item) => (
    <Cards item={item} key={item.id} />
  ))}
</Slider>
    </div>


    </>
  )
}

export default Freebook
