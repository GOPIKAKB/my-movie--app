import React, { createContext, useContext, useEffect, useState } from 'react'
import { LatestMovies } from './Api'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { imageUrl } from './Api'
import './../css/Movie.css'
import { Link } from 'react-router-dom'
import { myContext } from '../App'
import { BiSearch } from "react-icons/bi";

function LatestMovie() {
    const [search,setSearch]=useState('')
    const [LatestData, setLatestData] =useContext(myContext)
    useEffect(() => {
        axios.get(LatestMovies).then((response) => {
            setLatestData(response.data.results);
        })
    }, [])
    const buttonClick = () => {
        const searchData=LatestData.filter(item=>item.title.toLowerCase() === search.toLowerCase())
        console.log(searchData);
        setLatestData(searchData)
        }
    let text = {
        textDecoration: 'none',
        color: 'black'
    }
    return (
        <div className='main-ctnr'>
        <div style={{textAlign:'end',paddingRight:'70px'}}>
         <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick={buttonClick}><BiSearch/></button>
        </div>
        <div className='ctr'>
            {LatestData ? LatestData.map((item) => {
                return (
                    <Link to={`/latest/${item.id}`} style={text}><Card className='crd'>
                        <Card.Img variant="top" src={imageUrl + item.backdrop_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>

                        </Card.Body>
                    </Card></Link>
                )
            }) : <></>}
        </div>
</div>
    )
}

export default LatestMovie

