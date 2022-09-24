import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import FeedLeftContent from '../../partials/community/FeedLeftContent';
// import FeedPosts from '../../partials/community/FeedPosts';
import FeedRightContent from '../../partials/community/FeedRightContent';


import Avatar from '../../images/user-40-02.jpg';
import { useEffect } from 'react';
import Post from './posts';
import { Image, Microphone, VideoCamera } from 'phosphor-react';

function Feed() {
 const [text, setText] = useState({})
 const [feeds, setFeeds] = useState([])
 const [loading, setLoading] = useState(false)
 useEffect(() => {
  setLoading(true)
  const fetchData = async function () {
   const res = await fetch('http://localhost:8000/feeds')
   const feed = await res.json()
   console.log(feed)
   const data = feed.allFeeds
   setFeeds(data)
   setLoading(false)
  }
  fetchData()
 }, [])

 // const [sidebarOpen, setSidebarOpen] = useState(false);
 function sendData(e) {
  const { name, value } = e.target
  const textData = text
  textData[name] = value
  setText(textData)
  console.log(textData)
 }
 async function httpCreateFeed(e) {
  e.preventDefault()
 }
 return (
  <div className="flex h-screen overflow-hidden">
   {/* Sidebar */}
   {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

   {/* Content area */}
   {/* <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"> */}
   {/*  Site header */}
   {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

   <main>
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">

     <div className="xl:flex">

      {/* Left + Middle content */}
      <div className="md:flex flex-1">

       {/* Left content */}
       <FeedLeftContent />

       {/* Middle content */}
       <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
        <div className="md:py-8">

         {/* Blocks */}
         <div className="space-y-4">

          {/* Post Block */}
          <form className="bg-white shadow-md rounded border border-slate-200 p-5" onSubmit={httpCreateFeed}>
           <div className="flex items-center space-x-3 mb-5">

            <img className="rounded-full shrink-0" src={Avatar} id='tokenData_id' width="40" height="40" alt="User 02" />
            <div className="grow">
             <label htmlFor="status-input" className="sr-only">
              Title
             </label>
             <input
              id="status-input"
              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
              type="text"
              placeholder="Title"
              name='Title'
              onChange={sendData}
             />
             <label htmlFor="status-input" className="sr-only mt-4">
              What's happening...
             </label>
             <input
              id="status-input"
              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500 mt-4"
              type="text"
              placeholder="What's happening..."
              name='textDescription'
              onChange={sendData}
             />
            </div>
           </div>
           <div className="flex justify-between items-center">
            <div className="grow flex space-x-5">
             <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700" name='videoUrl'>
              {/* <svg className="w-4 h-4 fill-indigo-400 mr-2" xmlns="http://www.w3.org/2000/svg"> */}
              {/* <path d="M0 0h2v16H0V0Zm14 0h2v16h-2V0Zm-3 7H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1ZM6 5h4V2H6v3Zm5 11H5c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1Zm-5-2h4v-3H6v3Z" /> */}
              {/* </svg> */}
              <VideoCamera size={24} color='#5c59d4' />
              <span>Media</span>
             </button>
             <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700" name='photoUrl'>
              <Image size={24} color='#5c59d4' />
              <span>Photo</span>
             </button>
             <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700" name='audioUrl'>
              <Microphone size={24} color='#5c59d4' />
              <span>Audio</span>
             </button>
            </div>
            <div>
             <button type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
              Send -&gt;
             </button>
            </div>
           </div>
          </form>

          <div className='w-full flex-column ' style={{ overflowY: 'no-scroll', height: '100%' }}>
           {loading ? <h1 className='font-bold text-3xl text-center text-black-800'>loading...</h1> :
            feeds.map((feed, idx) => {
             // console.log(feed)
             return (
              <div className='m-2 ' >
               < Post key={idx} post={feed} />
              </div>
             )
            })
           }
          </div>

         </div>

        </div>
       </div>

      </div>

      {/* Right content */}
      <FeedRightContent />

     </div>

    </div>
   </main>

  </div>
  // </div>
 );
}

export default Feed;