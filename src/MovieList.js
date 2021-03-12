import React from 'react';


const MovieList = ({ list=[], render }) => {
    return list.map((item) => {
        return <>{render(item)}</>
    });
};



export default MovieList