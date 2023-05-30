import React, { useContext, useEffect, useState } from 'react'
import { PopularMovies } from './Api'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { imageUrl } from './Api'
import './../css/Movie.css'
import { Link } from 'react-router-dom'
import { myContext } from '../App'
import { BiSearch } from "react-icons/bi";


function PopularMovie() {
    const [search, setSearch] = useState('')
    const [popularData, setpopularData] = useContext(myContext)
    useEffect(() => {
        axios.get(PopularMovies).then((response) => {
            setpopularData(response.data.results);
        })
    }, [])
    const buttonClick = () => {
        const searchData = popularData.filter(item => item.title.toLowerCase() === search.toLowerCase())
        setpopularData(searchData)
    }
    let text = {
        textDecoration: 'none',
        color: 'black'
    }
    return (
        <div className='main-ctnr'>
            <div style={{ textAlign: 'end', paddingRight: '70px' }}>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search'></input>
                <button onClick={buttonClick} style={{backgroundColor:'#c30711',color:'white'}}><BiSearch /></button>
            </div>
            <div className='ctr'>
                {popularData ? popularData.map((item) => {
                    return (
                        <Link to={`/latest/${item.id}`} style={text}>
                            <Card className='crd'>
                                <Card.Img variant="top" src={imageUrl + item.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                }) : <></>}
            </div>
        </div>
    )
}
export default PopularMovie
