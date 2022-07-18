import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
// import axios from 'axios'

function FetchNews() {

    const [news, setNews] = useState([]);

 useEffect(()=>{
    async function fetchNews(){
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=277264e76558490ca3e3a8e5456d12ba")
            .then((responsive) => {
                console.warn(responsive)
                setNews(responsive.data.articles)
            })
    }
    fetchNews();
 })

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                            <h2 className='h1 mb-4'>News</h2>
                    </div>
                </div>
                <div className='row'>
                    {
                        news.map((value) => {
                            return (
                                <div className='col-4'>
                                    <div className="card mb-4">
                                        <img src={value.urlToImage} className="card-img-top" alt="shop"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{value.publishedAt}</h5>
                                            <p className="card-text mb-4 fw-bold">{value.title}</p>
                                            <p className="card-text">{value.description}</p>
                                            <a href={value.url} className="btn btn-primary">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FetchNews