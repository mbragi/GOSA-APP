import React from 'react'
import Navigation from '../component/Navigation';

function Gallery() {
  return (
    <>
      <section className="text-gray-600 body-font flex-wrap w-screen " style={{ background: 'linear-gradient(90deg, #a5e29c, #1b7b2c)'}}>
        <Navigation />
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-6xl font-medium title-font mb-4 text-white">Pictures of our recent events and programs</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/src/images/applications-image-01.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/src/images/applications-image-02.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/src/images/applications-image-03.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/src/images/applications-image-04.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/src/images/applications-image-05.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/src/images/applications-image-06.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;