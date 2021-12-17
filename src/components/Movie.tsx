import React from "react";
import './Movie.css';
import img from '../img/not-found.png';
import {FcOk} from 'react-icons/fc';

const Movie = () =>{
    return(
        <div className="card movie" >
            <img src={img} className="card-img-top card-movie-image" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">The Amazing Spiderman</h5>
                <p className="card-text ">Marvel's Movie</p>
                <p className="lead">8/10  <FcOk ></FcOk> </p> 
            </div>
        </div>
    )
}
export default Movie;