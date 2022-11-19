import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Search = ({ recipes, setSearchResults }) => {


    // const handleSubmit = (e) => e.preventDefault()

    // const handleSearchChange = (e) => {
    //     if (!e.target.value) return setSearchResults(recipes)
    //     console.log(e.target.value);
    //     console.log(recipes);
    //     const results = recipes.filter(recipes => recipes.title.includes(e.target.value))
    //     setSearchResults(results)
    //     console.log(results);

    function handleSearchChange(e) {
        e.preventDefault()
        console.log(e.target.value);
        const result = recipes.filter(recipe => { return recipe.title.toLowerCase().includes(e.target.value.toLowerCase()) }
        )
        setSearchResults(result)
        console.log(result);
    }


    return (
        <Form className="d-flex container mt-4" >
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleSearchChange(e)}
            />
            <Button variant="outline-primary">Search</Button>
        </Form>
    )
}

export default Search
