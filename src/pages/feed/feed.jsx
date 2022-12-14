import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import Header from '../../partials/Header';
import FeedLeftContent from '../../partials/community/FeedLeftContent';
import FeedRightContent from '../../partials/community/FeedRightContent';
import { connect } from 'react-redux';
import Post from './posts';
import Avatar from '../../images/user-40-02.jpg';
import ModalBasic from '../../components/ModalBasic';
import { useEffect } from 'react';
import { httpPostFeed, httpGetFeed, loadFeed } from '../../redux/Feed/feed.actions';
import axios from 'axios';
import { SpeakerSimpleHigh, Image, YoutubeLogo, TextH } from 'phosphor-react'
import { uploadFile } from '../../utils/Utils';
// import { store } from '../../redux/store'

function Feed(props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  // const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [showHeading, setShowHeading] = useState(false);
  const [counter, setCounter] = useState(0);

  const { auth: { user }, feed: { feed }, httpGetFeed, loadFeed } = props;

  async function fetchPost() {
    setLoading(true);
    httpGetFeed();
    setLoading(false);
  }
  const modalMedia = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true)
  }

  function createPost(e) {
    const { name, value } = e.target
    const post = { ...data }
    post[name] = value;
    setData(post);
  }

  async function addFile(e) {
    if (data.audioUrl || data.photoUrl || data.videoUrl) {
      return alert('Upload either audio, photo or video!');
    }
    const { name } = e.target;
    const url = await uploadFile(e.target.files[0], setCounter);
    const newData = { ...data }
    newData[name] = url;
    console.log(newData)
    setData(newData);
    setCounter(0);
  }

  async function httpPostFeed(e) {
    e.preventDefault();
    if (
      !data.title &&
      !data.textDescription &&
      !data.audioUrl &&
      !data.photoUrl &&
      !data.videoUrl
    ) {
      setModalOpen(false);
      setFeedbackModalOpen(false);
      return;
    }
    props.httpPostFeed({ ...data, author: user._id });
    const feeds = [...feed];
    feeds.push({ ...data, author: user._id });
    loadFeed(feeds);
    setModalOpen(false);
    setFeedbackModalOpen(false);
  }
  useEffect(() => {
    fetchPost();
  }, [feed.length])

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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

                      {/* video && photo && audio url */}

                      <form onSubmit={httpPostFeed} className="m-1.5">
                        {/* Start */}
                        <ModalBasic id="feedback-modal" modalOpen={modalOpen} setModalOpen={setModalOpen} title="Share what's on your mind!">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              {
                                showHeading &&
                                <div>
                                  <input
                                    id="status-input"
                                    className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                                    type="text"
                                    placeholder="Enter heading"
                                    onChange={createPost}
                                    name='title'
                                  />
                                </div>
                              }
                              <div>
                                <textarea name='textDescription' className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500" onChange={createPost} rows='10' placeholder={`Hi ${user.fullName}, What's on your mind?`}></textarea>
                              </div>
                              {counter > 0 && <p>Loading...{Math.floor(counter)}%</p>}
                              <div className='flex items-center justify-between'>
                                <div className='flex items-center '>


                                  <label className={`cursor-pointer relative ${data.audioUrl ? "bg-indigo-600" : "bg-indigo-300"} p-2 mr-2 rounded-md text-white`}>
                                    {
                                      // !data.photoUrl && !data.videoUrl && data.audioUrl &&
                                    }
                                    <input onChange={addFile} name='audioUrl' type="file" style={{ opacity: 0, position: 'absolute', width: '1rem' }} />
                                    <span className="file-custom flex items-center" >
                                      <SpeakerSimpleHigh size={18} color="white" />
                                      {/* <span className=''>Audio</span> */}
                                    </span>
                                  </label>
                                  <label className={`cursor-pointer relative ${data.photoUrl ? "bg-indigo-600" : "bg-indigo-300"} p-2 mr-2 rounded-md text-white`}>
                                    {
                                      // data.photoUrl && !data.videoUrl && !data.audioUrl &&
                                    }
                                    <input onChange={addFile} name='photoUrl' type="file" style={{ opacity: 0, position: 'absolute', width: '1rem' }} />
                                    <span className="file-custom flex items-center" >
                                      <Image size={18} color="white" />
                                      {/* <span>Image</span> */}
                                    </span>
                                  </label>
                                  <label className={`cursor-pointer relative ${data.videoUrl ? "bg-indigo-600" : "bg-indigo-300"} p-2 mr-2 rounded-md text-white`}>
                                    {
                                      // !data.photoUrl && data.videoUrl && !data.audioUrl &&
                                    }
                                    <input onChange={addFile} name='videoUrl' type="file" style={{ opacity: 0, position: 'absolute', width: '1rem' }} />
                                    <span className="file-custom flex items-center" >
                                      <YoutubeLogo size={18} color="white" />
                                      {/* <span>Video</span> */}
                                    </span>
                                  </label>
                                </div>
                                <div className='flex justify-center items-center'>
                                  <label onClick={() => setShowHeading(!showHeading)} className={`cursor-pointer relative ${showHeading ? "bg-indigo-600" : "bg-indigo-300"} p-2 mr-2 rounded-md text-white`}>
                                    <span className="file-custom flex items-center" >
                                      <TextH size={18} color="white" />
                                      {/* <span>Video</span> */}
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" type='submit'>Post</button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </form >

                      {/* textDescription */}
                      {/* <form onSubmit={httpPostFeed} className="m-1.5">
                        <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Create Post">
                          {/* Modal content */}
                      {/* <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="name">Heading <span className="text-rose-500">*</span></label>
                                <input name='title' className="form-input w-full px-2 py-1" type="text" onChange={createPost} required />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="feedback">Message <span className="text-rose-500">*</span></label>
                                <textarea name='textDescription' className="form-textarea w-full px-2 py-1" onChange={createPost} rows='10' required></textarea>
                              </div>
                            </div>
                          </div> */}
                      {/* Modal footer */}
                      {/* <div className="px-5 py-4 border-t border-slate-200">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" type='submit'>Send</button>
                            </div>
                          </div> */}
                      {/* </ModalBasic> */}
                      {/* End */}
                      {/* </form > */}

                      {/* Post Block */}
                      <form className="bg-white shadow-md rounded border border-slate-200 p-5">
                        <div className="flex items-center space-x-3 mb-5">
                          <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" />
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              What's happening...
                            </label>
                            <input
                              id="status-input"
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="text"
                              placeholder="What's happening..."
                              onClick={modalMedia}
                              name='textDescription'
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                            <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
                              onClick={modalMedia}
                            >
                              <label className="cursor-pointer relative">
                                {/* <input type="file" style={{ opacity: 0, position: 'absolute', width: '1rem'}} /> */}
                                <span className="file-custom flex" >
                                  <svg className="w-4 h-4 fill-indigo-400 mr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h2v16H0V0Zm14 0h2v16h-2V0Zm-3 7H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1ZM6 5h4V2H6v3Zm5 11H5c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1Zm-5-2h4v-3H6v3Z" />
                                  </svg>
                                  <span>Audio</span>
                                </span>
                              </label>
                            </button>

                            <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
                              onClick={modalMedia}
                            >
                              <svg className="w-4 h-4 fill-indigo-400 mr-2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" />
                              </svg>
                              <span>Video</span>
                            </button>
                            <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
                              onClick={modalMedia}
                            >
                              <svg className="w-4 h-4 fill-indigo-400 mr-2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.793 10.002a.5.5 0 0 1 .353.853l-1.792 1.793a.5.5 0 0 1-.708 0l-1.792-1.793a.5.5 0 0 1 .353-.853h3.586Zm5.014-4.63c1.178 2.497 1.833 5.647.258 7.928-1.238 1.793-3.615 2.702-7.065 2.702S2.173 15.092.935 13.3c-1.575-2.28-.92-5.431.258-7.927A2.962 2.962 0 0 1 0 3.002a3 3 0 0 1 3-3c.787 0 1.496.309 2.029.806a5.866 5.866 0 0 1 5.942 0A2.96 2.96 0 0 1 13 .002a3 3 0 0 1 3 3c0 .974-.472 1.827-1.193 2.37Zm-1.387 6.79c1.05-1.522.417-3.835-.055-5.078C12.915 5.89 11.192 2.002 8 2.002s-4.914 3.89-5.365 5.082c-.472 1.243-1.106 3.556-.055 5.079.843 1.22 2.666 1.839 5.42 1.839s4.577-.62 5.42-1.84ZM6.67 6.62c.113.443.102.68-.433 1.442-.535.761-1.06 1.297-1.658 1.297-.597 0-1.08-.772-1.07-1.483.01-.71.916-2.306 1.997-2.306.784 0 1.05.607 1.163 1.05Zm3.824-1.05c1.08 0 1.987 1.596 1.997 2.306.01.71-.473 1.483-1.07 1.483-.598 0-1.123-.536-1.658-1.297-.535-.762-.546-1-.432-1.442.113-.443.38-1.05 1.163-1.05Z" />
                              </svg>
                              <span>Photo</span>
                            </button>
                          </div>
                        </div>
                      </form>

                      {/* Posts */}
                      {loading && <h1 className='text-md font-bold text-center bg-black-500'>Loading...</h1>}
                      {
                        feed.length > 0 && feed.map((post, idx) => {
                          return (
                            <Post
                              key={idx}
                              post={post}
                              fetchPost={fetchPost}
                            />
                          )
                        }).reverse()
                      }
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
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  httpPostFeed: data => dispatch(httpPostFeed(data)),
  httpGetFeed: () => dispatch(httpGetFeed()),
  loadFeed: feed => dispatch(loadFeed(feed))
})
const mapStateToProps = state => ({
  auth: state.auth,
  feed: state.feed
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);