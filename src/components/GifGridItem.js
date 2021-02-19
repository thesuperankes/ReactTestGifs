import React from 'react'

export const GifGridItem = ({ id, title, url }) => {


    return (
        <>
            <div className="card" >
                <img src={url} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </>
    )
}
