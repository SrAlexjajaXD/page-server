import React from 'react'
import { BsSpotify, BsPinterest, BsInstagram, BsGithub } from 'react-icons/bs';
import './css/General.css'
import estilos from './css/estilos.module.css'
import Carrousel from './widgets/Carrousel';


const Home = () => {
  return (
    <div>
        <h1 className={estilos.TextoXX}>Ale Lozano García</h1>
        <div className={estilos.Flex}>
            <a href="https://github.com/SrAlexjajaXD"><BsGithub size={30} className={estilos.logoSmallBlack}/></a>
            <a href="https://open.spotify.com/user/alexloga18?si=bf16f414dd2f4514"><BsSpotify size={30} className={estilos.logoSmallBlack}/></a>
            <a href="https://pin.it/Ca1fUtI"><BsPinterest size={30} className={estilos.logoSmallBlack}/></a>
            <a href="https://www.instagram.com/gusano_astronautico/"><BsInstagram size={30} className={estilos.logoSmallBlack}/></a>            
        </div>
    </div>
  )
}

export default Home
