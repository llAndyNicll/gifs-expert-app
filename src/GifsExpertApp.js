import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifsExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Kimetsu No Yaiba' ]);

//     const handleAdd = () => {

        // Opcion 1.
        // setCategories( [ ...categories, 'Inuyasha' ] );

        // Opcion 2.
//         setCategories( cats => [ ...cats, 'Inuyasha' ] );

//     };


    return (
        <div>

            <h2 className='animate__animated animate__backInDown'>Gifs Expert App</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        
                        <GifGrid 
                            key={ category }
                            category = { category } 
                        />
                    ))
                }
            </ol>

        </div>
    );

};