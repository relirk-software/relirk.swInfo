import React from "react";

// import { Container } from './styles';

import an1 from "../../assets/anuncio-1.jpg";
import an2 from "../../assets/anuncio-2.jpg";

export default function News() {
  return (
    <aside class="anuncios">
      <div class="anuncio-item">
        <img src={an1} alt="Anuncio 1" />
      </div>

      <div class="anuncio-item">
        <img src={an2} alt="Anuncio 2" />
      </div>
    </aside>
  );
}
