import React from 'react';
import { House, Article, AddressBook, User, EnvelopeSimple } from 'phosphor-react';

function FeedLeftContent({ props }) {
  return (
    <div className="w-full md:w-60 mb-8 md:mb-0">
      <div className="md:sticky md:top-16 md:h-[calc(100vh-64px)] md:overflow-x-hidden md:overflow-y-auto no-scrollbar">
        <div className="md:py-8">

          {/* Title */}
          <header className="mb-6" style={{ padding: '1rem' }}>
            <h1 className="text-xl md:text-3xl text-slate-800 font-bold "> 👋 Hey ,</h1>
            <h1 className="text-sm md:text-2xl text-slate-800 font-bold w-4/5">FullName</h1>
          </header>

          {/* Search form */}
          <div className="xl:hidden mb-6">
            <form className="relative">
              <label htmlFor="feed-search-mobile" className="sr-only">
                Search
              </label>
              <input id="feed-search-mobile" className="form-input w-full pl-9 focus:border-slate-300" type="search" placeholder="Search…" />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-4 md:space-y-3 -mx-4">
            {/* Group 1 */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-3 md:sr-only">Menu</div>
              <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-white" href="#0">
                    <Article size={32} color="#587604" weight="bold" />
                    <span className="text-sm font-medium text-indigo-500">Feed</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="/">
                    <House size={32} color="#587604" weight="bold" />
                    <span className="text-sm font-medium text-slate-600">Home</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="#0">

                    <AddressBook size={32} color='#587604' weight='bold' />
                    <span className="text-sm font-medium text-slate-600">Gallery</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="#0">
                    <User size={32} color='#587604' weight='bold' />
                    <span className="text-sm font-medium text-slate-600">Profile</span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="#0">
                    <EnvelopeSimple size={32} color='#587604' weight='bold' />
                    <span className="text-sm font-medium text-slate-600">Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Group 2 */}
            {/* <div> */}
            {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-3">My Groups</div> */}
            {/* <ul className="flex flex-nowrap md:block mr-3 md:mr-0"> */}
            {/* <li className="mr-0.5 md:mr-0 md:mb-0.5"> */}
            {/* <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="#0"> */}
            {/* <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" viewBox="0 0 16 16"> */}
            {/* <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" /> */}
            {/* </svg> */}
            {/* <span className="text-sm font-medium text-slate-600">Productivity</span> */}
            {/* </a> */}
            {/* </li> */}
            {/* <li className="mr-0.5 md:mr-0 md:mb-0.5"> */}
            {/* <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="#0"> */}
            {/* <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" viewBox="0 0 16 16"> */}
            {/* <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" /> */}
            {/* </svg> */}
            {/* <span className="text-sm font-medium text-slate-600">Self Development</span> */}
            {/* </a> */}
            {/* </li> */}
            {/* </ul> */}
            {/* </div> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default FeedLeftContent;
