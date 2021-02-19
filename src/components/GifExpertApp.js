import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shigatsu wa kimi no uso'])

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr />

            <ol>
                {
                    categories.map((x) => (
                        <GifGrid
                            key={x}
                            category={x} />
                    ))
                }
            </ol>

        </>
    );
};