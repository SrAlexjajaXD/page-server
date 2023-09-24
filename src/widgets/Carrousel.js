import React, { useState } from 'react'
import estilos from '../css/estilos.module.css'



function Carrousel() {
    
    const images = [
        "../imagenes/Vans.jpg",
        "../imagenes/amarillo.heic",
        "../imagenes/atardecer.jpg",
        "../imagenes/nobuses.jpg",
        "../imagenes/useless.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
        <button onClick={() => setCurrentImage(currentImage == 0 ? images.length : -1)}>Anterior</button>
      {images.map((image, index) => (
          <img
            src={image}
            alt={index}
            style={{ display: currentImage === index ? "block" : "none" }}
            className={estilos.imagen}
          />
      ))}
        <button onClick={() => setCurrentImage(currentImage == images.length ? 0 : +1)}>Siguiente</button>
    </div>
  )
}

export default Carrousel