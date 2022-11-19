import React from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'
import './style.css'
import wiki from '../assest/wiki.png'



const MealDetails = () => {
  const { urls } = useParams();
  console.log(urls);
  return (
    <>
      <div>
        <Iframe url={"https://spoonacular.com/" + urls}
          width="100%"
          height="4000px"
          id=""
          className=""
          display="block"
        />
      </div>
      <div className="bg-slate-300 px-28 pt-5 absolute -mt-56 w-full" >

        <footer className="bg-slate-300 text-gray-700 px-4 py-3 ">
          <div className="max-w-lg sm:mx-auto sm:text-center">
            <img src={wiki} className="w-40 mb-3 sm:mx-auto" />
            <p className="leading-relaxed mt-2 text-[18px]">
              Simple ingredients prepared in a simple way - that's the best way to take your everyday cooking to a higher level.</p>
          </div>


          <div className="mt-8 items-center justify-between sm:flex">
            <div className="mt-4 sm:mt-0">
              &copy; 2022 WIKI MEAL All rights reserved.
            </div>

          </div>
          <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
      </div>
    </>
  )
}

export default MealDetails
