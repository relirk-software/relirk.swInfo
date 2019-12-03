import React from "react";

// import { Container } from './styles';

import an1 from "../../assets/anuncio-1.jpg";
import an2 from "../../assets/anuncio-2.jpg";

export default function News() {
  return (
    <aside className="anuncios">
      <div className="anuncio-item">
        <img src={an1} alt="Anuncio 1" />
      </div>

      <div className="anuncio-item">
        <img src={an2} alt="Anuncio 2" />
      </div>
    </aside>
  );
}
