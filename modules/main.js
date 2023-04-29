import { getData } from './http';
import { headerCreate, reload } from "./ui";
let body = document.body
let header = document.querySelector('header')
let movies_cont = document.querySelector('.movies')
let bt = document.querySelector(".bt button") 
let btn = document.querySelector(".log")
headerCreate(header)

getData('/movie/popular')
    .then(res => {
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)] 
        let arrslised = res.data.results.slice(0, 8)
        reload(arrslised, movies_cont)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + item.backdrop_path})`
        bt.onclick = () => {
            bt.innerHTML = "Hide"
           
            reload(res.data.results, movies_cont)
            
            
        }
    
    })

  