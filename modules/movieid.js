import { headerCreate } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
let iframe = document.querySelector('iframe')
let name_movie = document.querySelector(".name_mov")
let h1 = document.querySelector("h1")
let status = document.querySelector(".status")
let p = document.querySelector("p")
let img = document.querySelector(".head img")

let year      = document.querySelector(".year")
let country = document.querySelector(".country")
let tagline = document.querySelector(".tagline")
let director = document.querySelector(".director")
let scenario = document.querySelector(".scenario")
let producer = document.querySelector(".producer")
let operator = document.querySelector(".operator")
let composer = document.querySelector(".composer")
let poetry = document.querySelector(".poetry")
let mon = document.querySelector(".mon")
let ganre = document.querySelector(".ganre")
let world = document.querySelector(".world")
let primer = document.querySelector(".primer")
let prim = document.querySelector(".prim")
let age = document.querySelector(".age")


headerCreate(header)

let movie_id = location.search.split('=').at(-1)



getData(`/movie/${movie_id}`)
    .then(res => {console.log(res)
        name_movie.innerHTML = res.data.original_title
        h1.innerHTML = res.data.title
        status.innerHTML = res.data.tagline
        p.innerHTML = res.data.overview
        img.src = import.meta.env.VITE_BASE_IMG + res.data.poster_path
        year.innerHTML = res.data.release_date
        country.innerHTML = res.data.production_countries[0].name                                 
        tagline.innerHTML = res.data.tagline
        director.innerHTML = res.data.release_date
        scenario.innerHTML = res.data.release_date
        producer.innerHTML = res.data.release_date
        operator.innerHTML = res.data.release_date
        composer.innerHTML = res.data.release_date
        poetry.innerHTML = res.data.release_date
        mon.innerHTML = res.data.release_date
        ganre.innerHTML = res.data.release_date
        world.innerHTML = res.data.release_date
        prim.innerHTML = res.data.release_date
        age.innerHTML = res.data.release_date
        primer.innerHTML = res.data.release_date
     })

getData(`/movie/${movie_id}/videos`)
    .then(res => { 
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        iframe.src = `https://www.youtube.com/embed/${video.key}`;
        
    })

getData(`/movie/${movie_id}/credits`)
    .then(res =>console.log({res}))

