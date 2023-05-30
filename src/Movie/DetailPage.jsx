import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {  imageUrl } from './Api'
import { myContext } from '../App'

function DetailPage() {
  const { parameter } = useParams()
   const [comedyData, setComedyData]   = useContext(myContext)

  const movie = comedyData.filter(movie => movie.id == parameter)

  return (
    <div >
  {movie.map(item=>
      <div style={{textAlign:'center'}}>
        <img src={imageUrl+item.backdrop_path} width={1000}></img>
        <h1>{item.name}</h1>
        <p style={{fontStyle:'italic'}}>{item.first_air_date}</p>
        <p style={{marginRight:'160px',marginLeft:'160px'}}>{item.overview}</p>
      </div>)}
    </div>
  )
}

export default DetailPage
