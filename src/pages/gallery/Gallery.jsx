import React, { useState, useEffect } from 'react';
import Navigation from '../component/Navigation';

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



  const year = users.filter(user => user.year === '2013')


  const searching = year.filter(each => {
    if(search === '') {
      return each;
    }
else if (
  each.name.toLowerCase().includes(search.toLowerCase()) ||
  each.gender.toLowerCase().includes(search.toLowerCase())
) {
  return each;
}
  }
    )

  const people = searching.map(person => {
    const { id, name, year, house, occupation, gender, mobile, email, social_media } = person
    return (
      <div className='border-2 m-2 w-60 h-60 text-center rounded-md bg-emerald-900 ... text-white shadow-md shadow-black bg-green-900 ' key={person.id}>
        <div className='flex items-center my-14  justify-center flex-col '>
          <h1>{name}</h1>
          <h3>{year}</h3>
          <h2>{id}</h2>
          <h2>{gender}</h2>
        </div>

      </div>
    )
  })

  return (
    <>
      <section className="text-gray-600 body-font flex-wrap w-screen " style={{ background: 'linear-gradient(90deg, #a5e29c, #1b7b2c)' }}>
        <Navigation />


<div className='mx-80'> 

        <input className=" ml-50 form-input w-full pl-9 focus:border-slate-300" onChange={searcher} type="search" placeholder="Search…" />

</div>



        <div className='flex flex-wrap item-center justify-center'>{people}</div>

      </section>
    </>
  );
}

export default Gallery;