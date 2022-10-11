import React, { useState, useEffect } from 'react';
import Navigation from '../component/Navigation';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Gallery.css";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Gallery() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const searcher = (e) => {
    setSearch(e.target.value);
  }
  const getUsers = async () => {
    const response = await fetch('https://unitygate.herokuapp.com/');
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, [])


  const searching = users.filter(each => (
    each.year === '2013' && each.name.toLowerCase().includes(search.toLowerCase())
  ))

  // console.table(searching)

  const people = searching.map(person => {
    const { id, name, year, house, occupation, gender, mobile, email, social_media } = person
    return (
      <div className='border-2 m-2 w-60 h-60 text-center rounded-md bg-emerald-900 text-white shadow-md shadow-black bg-green-900 ' key={person.id}>
        <div className='flex items-center my-14  justify-center flex-col '>
          <h1>{name}</h1>
          {/* <h3>{year}</h3> */}
          {/* <h2>{id}</h2> */}
          <h2>{gender}</h2>
        </div>

      </div>
    )
  })

  return (
    <>
      <section className="text-gray-600 body-font flex-wrap w-screen " style={{
      }}>
        <Navigation />
        <div className='flex justify-center'>
          <input className="form-input focus:border-slate-300" onChange={searcher} type="search" placeholder="Search…" />
        </div>
        <div className='flex justify-center ' style={{}}>
          <div className='' style={{ width: '100%' }}>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >

              {
                searching.map(item => (
                  <SwiperSlide key={item.id}>
                    <h1>{item.name}</h1>
                    <div className='blob' />
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;