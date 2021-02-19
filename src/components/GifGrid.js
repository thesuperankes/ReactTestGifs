import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <div className="animate__animated animate__bounce">
            <h3>{category}</h3>

            { loading && <p>Loading...</p>}

            <div className="row">
                {
                    images.map((img) => (
                        <div className="col-md-2">
                            <GifGridItem key={img.id} {...img} />
                        </div>
                    ))
                }

            </div>


        </div>
    )
}
