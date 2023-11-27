import React, { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import slides from '../data/slides'


export default function Gallery() {

  const [index, setIndex] = React.useState(-1);
  return (
    <div className="filtros">
      <h1 className="unica">| El proceso de producción en marcha</h1>
      <h4 className="unica fw200"> Tortuguitas - 17 de octubre de 2023</h4>

      <PhotoAlbum
        photos={slides}
        layout="rows"
        onClick={({ index: current }) => setIndex(current)} />

      <Lightbox styles={{ root: { "z-index": "999999999"}, container: { backgroundColor: "rgba(0, 0, 0, .85)" }  }}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

    </div>
  )
}
