import React, { useContext, useEffect, useState } from 'react'
import { LatestMovies, imageUrl } from './Api';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { myContext } from '../App'

function LatestDetailPage() {

  const { parameter } = useParams()
  const [LatestData, setLatestData] = useContext(myContext)

  const movie = LatestData.filter(movie => movie.id == parameter)
  
  return (
    <div >
      {movie.map(item =>
        <div style={{ textAlign: 'center' }}>
          <img src={imageUrl + item.backdrop_path} width={1000}></img>
          <h1>{item.original_title}</h1>
          <p style={{ fontStyle: 'italic' }}>{item.release_date}</p>
          <p style={{ marginRight: '160px', marginLeft: '160px' }}>{item.overview}</p>
        </div>)}
    </div>
  )
}


export default LatestDetailPage
