import ButtonSeach from "./ButtonSeach.jsx";
import InputMovie from "./InputMovie.jsx";
import movies from "../constants/Movies.js";
import {useState} from 'react'
import './HomeStyles.css';


export default function Home() {
    const GetRandom = ()=> {
        const x = Math.floor(Math.random() * movies.length)
        return(
            movies[x]
        )
    }

const [selectedmovie, setselectedmovie] = useState(GetRandom());
    return(
    <div>
        <div className="cajaTitulo">
        <h1 className="titulo">Guess the Movie!</h1>
        </div>
        <div>
            <p>{selectedmovie.emoji}</p>
            <InputMovie/>
            <div>
            <ButtonSeach/>
            </div>  
        </div>
    </div>
    )
}



