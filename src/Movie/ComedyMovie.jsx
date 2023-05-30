import React, { useContext, useEffect, useState } from 'react'
import { ComedyMovies } from './Api'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { imageUrl } from './Api'
import './../css/Movie.css'
import { Link } from 'react-router-dom'
import { myContext } from '../App'
import { BiSearch } from "react-icons/bi";


function ComedyMovie() {
    const [search,setSearch]=useState('')
    const [comedyData, setComedyData]   = useContext(myContext)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(ComedyMovies)
        setComedyData(response.data.results)
    }

    // const buttonClick = (e) => {
    //     e.persist()
    //     setSearch(e.target.value)
    //     console.log(search);
    // const searchData=search?comedyData.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())):comedyData
    // setComedyData(searchData)
    // console.log(searchData);
    // // item.name.toLowerCase().includes(input.toLowerCase())
    // }
    useEffect(()=>{
        console.log(search);
        const searchData=comedyData.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        console.log(searchData);
        setComedyData(searchData)
    },[search])
    let text = {
        textDecoration: 'none',
        color: 'black'
    }
    return (
        <div className='main-ctnr'>
            <div style={{textAlign:'end',paddingRight:'70px'}}>
             <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <button><BiSearch/></button>
            </div>
        <div className='ctr'>
            { comedyData ?
                comedyData.map((item) => {
                    return (
                        <Link to={`/comedy/${item.id}`} style={text}>
                            <Card key={item.id} className='crd'>
                                <Card.Img variant="top" src={imageUrl + item.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                }):<></>}
        </div>
        </div>
    )
}

export default ComedyMovie
