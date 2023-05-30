import axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PopularMovies, imageUrl } from './Api';
import { myContext } from '../App';

function PopularDetailPage() {
    const { parameter } = useParams()
    const [popularData, setpopularData]=useContext(myContext)

    const movie = popularData.filter(movie => movie.id == parameter)
  return (
    <div >
    {movie.map(item=>
        <div style={{textAlign:'center'}}>
          <img src={imageUrl+item.backdrop_path} width={1000}></img>
          <h1>{item.original_title}</h1>
          <p style={{fontStyle:'italic'}}>{item.release_date}</p>
          <p style={{marginRight:'160px',marginLeft:'160px'}}>{item.overview}</p>
        </div>)}
      </div>
    )
  }

export default PopularDetailPage
