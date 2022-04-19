import React from "react";

const Recipes = ({ title, image }) => {
    return (
        <div className='res-info'>
            <div className='res-title'>
                <p>{title}</p>
            </div>
            <div className='res-img'>
                <img src={image} alt=''  className='res__img'/>
            </div>
            
        </div>
    );
};
export default Recipes;