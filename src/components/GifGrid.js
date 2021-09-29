import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ( { category } ) => {

    const { data , loading } = useFetchGifs( category );

    return (
        <div className='card-grid'>

            {
                loading && <h4 className='animate__animated animate__pulse'>Loading...</h4>
            }

            <h3> { category } </h3>

                {
                    data.map( gif => (
                        <GifGridItem 
                            key = { gif.id }
                            { ...gif } 
                        />
                        
                    ))
                }

        </div>
    );

};