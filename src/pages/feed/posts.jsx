import axios from 'axios';
import React from 'react';
import { useState } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditMenu from "../../components/DropdownEditMenu"
import UserImage03 from '../../images/user-40-03.jpg';
function Post({ post, fetchPost }) {

 async function deletePost(e) {
  try {
   const { id } = e.target
   const request = await axios.delete(`https://rocky-scrubland-70378.herokuapp.com/feed/${id}`)
   console.log(request)
   fetchPost()
  } catch (error) {
   console.log(error.message)
  }

 }
 return (
  <>
   {/* Post 1 */}
   <div className="bg-white shadow-md rounded border border-slate-200 p-5">
    {/* Header */}
    <header className="flex justify-between items-start space-x-3 mb-3">
     {/* User */}
     <div className="flex items-start space-x-3">
      <img className="rounded-full shrink-0" src={UserImage03} width="40" height="40" alt="User 03" />
      <div>
       <div className="leading-tight">
        <a className="text-sm font-semibold text-slate-800" href="#0">
         {post.name}
        </a>
       </div>
       <div className="text-xs text-slate-500">{post.date}</div>
      </div>
     </div>
     <EditMenu align="right" className="relative inline-flex shrink-0">
      <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to='#0'  >
       <li>
        Edit
       </li>
      </Link>
      <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to='#0'  >
       <li id={post._id} onClick={deletePost}>
        Remove
       </li>
      </Link>
     </EditMenu>
    </header>
    {/* Body */}
    <div>
     <h2 className='text-l font-bold text-black-500 mx-10 m-2 w-3/4'>{post.title}</h2>
     <div className="text-sm text-slate-800 space-y-2 mb-5">
      <p>
       {post.textDescription}
      </p>
     </div>
    </div>
    {/* Footer */}
    <footer className="flex items-center space-x-4">
     {/* Like button */}
     <button className="flex items-center text-slate-400 hover:text-indigo-500">
      <svg className="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
       <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
      </svg>
      <div className="text-sm text-slate-500">4</div>
     </button>
     {/* Share button */}
     <button className="flex items-center text-slate-400 hover:text-indigo-500">
      <svg className="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
       <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
      </svg>
      <div className="text-sm text-slate-500">44</div>
     </button>
     {/* Replies button */}
     <button className="flex items-center text-slate-400 hover:text-indigo-500">
      <svg className="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
       <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
      </svg>
      <div className="text-sm text-slate-500">7</div>
     </button>
    </footer>
   </div>
  </>
 )
}
export default Post