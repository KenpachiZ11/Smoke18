import React, { useEffect, useState } from 'react';
import Recipes from '../components/Recipes';

const Menu = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('') //поиск коктейлей


    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const api = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
        const res = await fetch(api)
        const data = await res.json()
        setRecipes(data.drinks)
        // console.log(data.drinks);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        // console.log(search);
    }

    const filterDrinks = recipes.filter(drinks => {
        return drinks.strDrink.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='container'>
            <h3 className='title_h3'>Меню</h3>
            <div className='settings'>
                <form className='form-serch'>
                    <input 
                        placeholder='Search'
                        className='form-input' 
                        type='text'
                        onChange={updateSearch}
                    />
                </form>
            </div>
            <div className='recipes'>
                {filterDrinks.map(recipe => (
                    <Recipes
                        key={recipe.idDrink}
                        title={recipe.strDrink}
                        image={recipe.strDrinkThumb}
                    />
                ))}
            </div>
        </div>
    )
}
export {Menu}