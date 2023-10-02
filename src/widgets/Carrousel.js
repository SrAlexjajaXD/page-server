import React, { useState } from 'react'
import estilos from '../css/estilos.module.css'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';



function Carrousel() {
    
    const images = [
        "../imagenes/Vans.jpg",
        "../imagenes/amarillo.heic",
        "../imagenes/atardecer.jpg",
        "../imagenes/nobuses.jpg",
        "../imagenes/useless.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const Next = () => {
      if(currentImage<images.length-1)
        setCurrentImage(currentImage+1)
      else
        setCurrentImage(0)
    }
    const Back = () => {
      if(currentImage!==0)
        setCurrentImage(currentImage-1)
      else
        setCurrentImage(images.length-1)
    }
    const leftImage = () => {
      if(currentImage==0)
        return images[images.length-1]
      return images[currentImage-1]
    }
    const rightImage = () => {
      if(currentImage==images.length-1)
        return images[0]
      return images[currentImage+1]
    }

  return (
    <div className={estilos.carrusel}>
        <button className={estilos.boton} onClick={Back}><MdOutlineNavigateBefore/></button>
        <img className={estilos.imagen} src={images[currentImage]} alt=""/>
        <div className={estilos.backImages}>
          <img className={estilos.imagenBack} src={leftImage()} alt=""/>
          <img className={estilos.imagenBack} src={rightImage()} alt=""/>
        </div>
        <button className={estilos.boton} onClick={Next}><MdOutlineNavigateNext/></button>
    </div>
  )
}

export default Carrousel