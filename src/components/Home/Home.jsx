import React from 'react'
import './Home.css'
import food from '../assest/food.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Footer } from '../exp-index'


const Container = () => {

    const [searchOption, setSearchOption] = useState("random");
    const API_KEY = "6f4f883253eb4353a4acac786b60ded9";
    // const API_KEY = "417c3d210bf243699e75cd9a2662e1a4";
    // const API_KEY = "ac2274131dbf40e284a2fadba0abecbf";
    // const API_KEY = "d1f70067f78248078e71a58983a18e5f";
    // const API_KEY = "88cbb41354b04d13858d7f377e338113";
    // const API_KEY = "472f31ce4a5e4e5792ca9ab6d1833e51";

    const BASE_URL = ` https://api.spoonacular.com/recipes/${searchOption}?number=12&apiKey=${API_KEY}`;
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(BASE_URL).then(
            res => {
                setRecipes(res.data.recipes)

            }
        )
    }, [])
    // console.log(recipes[0]);
    // console.log(recipes[0].title);

    return (
        <>
            {/* HERO START */}
            <div className="bg-slate-200 pt-1">

                <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 ">
                    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                        <h1 className="text-teal-900 font-bold text-4xl xl:text-5xl">
                            Discover a unique experience.
                        </h1>
                        <p className="text-neutral-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                            We bring professional chefs to your home to prepare. delicious, customized meal at a fraction of the cost.
                        </p>
                        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start animate-pulse hover:animate-none">
                            <Link to="/Recipes" className="px-7 py-3 w-full bg-teal-900 text-gray-200 text-center rounded-md block sm:w-auto hover:text-gray-200 ">
                                Try our recipes now!
                            </Link >
                        </div>
                    </div>
                    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                        <img src={food} className="w-full mx-auto sm:w-10/12  lg:w-full " />
                    </div>
                </section>
            </div>
            {/* HERO END */}

            {/* RECIPES SECTION START */}
            <section className=" mx-auto px-4 max-w-screen-xl lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-6xl text-gray-800 font-semibold italic">
                        Recipes You'll Love
                    </h1>
                    <p className="mt-3 text-2xl text-gray-500">
                        Dishes we recommend you try asap.
                    </p>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {
                        recipes?.filter((food) => {
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
                <Link to="/Recipes" className="px-7 py-3 w-full bg-teal-900 text-gray-200 text-center rounded-md block sm:w-auto hover:text-gray-200">
                    View all recipes
                </Link>
            </div>
            <Footer />
        </>
    )

}

export default Container
