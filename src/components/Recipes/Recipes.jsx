import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Pagination } from '@mui/material';
import Search from '../Search';
import { Footer } from '../exp-index';
import MyPagination from '../MyPagination';




const Recipes = () => {
  const [searchOption, setSearchOption] = useState("random");
  const API_KEY = "6f4f883253eb4353a4acac786b60ded9";
  // const API_KEY = "417c3d210bf243699e75cd9a2662e1a4";
  // const API_KEY = "ac2274131dbf40e284a2fadba0abecbf";
  // const API_KEY = "d1f70067f78248078e71a58983a18e5f";
  // const API_KEY = "88cbb41354b04d13858d7f377e338113";
  // const API_KEY = "472f31ce4a5e4e5792ca9ab6d1833e51";
  const BASE_URL = ` https://api.spoonacular.com/recipes/${searchOption}?number=60&apiKey=${API_KEY}`;
  const [recipes, setRecipes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [CurrentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(12)



  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      setRecipes(res.data.recipes)
      setSearchResults(res.data.recipes)
    })
  }, [])
  // console.log(recipes);
  // console.log(searchResults);
  // console.log(recipes[0].title);

  const lastPostIndex = CurrentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchResults.slice(firstPostIndex, lastPostIndex);
  // console.log(currentPosts);



  return (
    <>

      {/* RECIPES SECTION START */}
      <section className=" mx-auto px-4 max-w-screen-xl lg:px-8 py-5">
        <div className="text-center">
          <h1 className="text-5xl text-teal-900 font-semibold italic">
            Wide collection of recipes.
          </h1>
          <p className="mt-3 text-2xl text-gray-500">
            Search for your favorite food.
          </p>
        </div>

        <Search recipes={recipes} setSearchResults={setSearchResults} />

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {
            currentPosts?.filter((food) => {
              return !(food.title.includes("Pork") || food.title.includes("Bacon") || food.title.includes("Ham"));
            })
              .map((items, key) => (
                <article className="w-[100%] max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" data-aos="zoom-in-up" key={key}>
                  <Link to={'/MealDetails/' + items.spoonacularSourceUrl.slice(24)} class="no-underline hover:underline decoration-teal-800">
                    <img src={items.image} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />
                    <div className="pt-3 ml-4 mr-2 mb-3  ">
                      <h3 className="text-xl text-gray-900 ">
                        {items.title}
                      </h3>
                    </div>
                    <div className="flex items-center mt-2 pt-3 ml-4 mr-2">

                      <div className="ml-3">
                        {/* <span className="block text-gray-900">{items.authorName}</span> */}
                        <span className="block text-gray-400 text-sm">{items.dishTypes[0]}</span>
                      </div>
                    </div>
                    <div className="pt-3 ml-4 mr-2 mb-3  ">
                      {/* <p className="text-gray-400 text-sm mt-1">{items.summary}</p> */}
                    </div>

                  </Link>
                </article>

              ))
          }
        </div>
      </section>
      {/* RECIPES SECTION END */}
      <div className="mb-5 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-center">
        <MyPagination totalPosts={searchResults.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      </div>
      <Footer />
    </>
  )
}

export default Recipes
