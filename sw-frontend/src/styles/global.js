import { createGlobalStyle } from "styled-components";

import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  /* @import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap'); */

  @font-face{font-family:'Matterhorn';src:url("https://static-mh.content.disney.io/matterhorn/assets/m4-7e766c2825c7.eot#") format("eot"),url("https://static-mh.content.disney.io/matterhorn/assets/m4-b366701d6945.woff") format("woff"),url("https://static-mh.content.disney.io/matterhorn/assets/m4-ac909dff444f.ttf") format("truetype"),url("https://static-mh.content.disney.io/matterhorn/assets/m4-3d636e3b4270.svg#Matterhorn") format("svg");font-weight:400;font-style:normal}



  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #151515;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
    /* font-family: 'Space Mono', monospace; */
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* Template antigo */

  body, p, h1, ul, li, blockquote {
  padding: 0px;
  margin: 0px
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  border-radius: 5px;
}

/* GRID GERAL */

.estrutura {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) 3fr 300px;
  grid-template-areas:
    "header header header"
    "sidenav content anuncios"
    "footer footer footer"
  ;
}

@media (max-width: 1200px) {
  .estrutura {
    grid-template-areas:
      "header header header"
      "sidenav content content"
      "sidenav anuncios anuncios"
      "footer footer footer"
    ;
  }
}

@media (max-width: 760px) {
  .estrutura {
    grid-template-columns: 100%;
    grid-template-areas:
      "header"
      "sidenav"
      "content"
      "anuncios"  
      "footer"  
    ;
  }
}

/*SIDENAV*/

.sidenav {
  grid-area: sidenav;
  background-position: left center;
  background-size: 100% auto;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
  padding: 30px;
}

.sidenav li a {
  display: block;
  min-width: 60px;
  max-width: 140px;
  margin: 0 auto 30px auto;
  background: #999;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
  transition: .1s ease-out;
}

.sidenav li a div {
  text-align: center;
  margin-top: 0.8em;
  color: black;
}

.sidenav li a:hover {
  background: white;
}

@keyframes seta {
  from {
    right: 30px;
  }
  to {
    right: 20px;
  }
}

@media (max-width: 760px) {
  .sidenav {
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-bottom: solid 1px #333333;
  }
  .sidenav::after {
    content: '→';
    position: absolute;
    top: 5px;
    right: 30px;
    /* color: rgba(0,0,0,.3); */
    color: white;
    animation: seta .5s ease-in 0s infinite alternate;
  }
  .sidenav ul {
    display: flex;
  }
  .sidenav li {
    flex: 1 0 60px;
  }
  .sidenav {
    padding: 0 30px;
  }
  .sidenav li a {
    width: 90px;
    margin: 30px 30px 30px 0;
  }
}

/*CONTENT*/

.content {
  grid-area: content;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

@media (max-width: 600px) {
  .content {
    grid-template-columns: auto;
  }
}

.col-wide {
  grid-column: 1 / -1;
}

.imagem-1 {
  grid-row: span 2;
  align-self: end;
}

.item-2 {
  align-self: end;
}

/*ESTILOS CONTENT*/

p {
  font-size: 1.2em;
  line-height: 1.6;
  letter-spacing: -0.005em;
  color: rgba(0,0,0,.7);
}

.informacoes p + p{
  margin-top: 30px;
}

/*TITULO*/

.titulo {
  color: #393939;
}

.titulo h1 {
  font-size: 3.75em;
  line-height: 1;
  font-weight: 700;
}

.titulo span {
  font-size: 0.875em;
  font-style: italic;
}

/*CARACTERISTICAS*/

.caracteristicas {
  display: flex;
  align-items: flex-start;
}

.caracteristicas > div {
  width: 80px;
  text-align: center;
  background: linear-gradient(135deg, #8844ee, #B07DFB);
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
  position: relative;
}

.caracteristicas > div:first-child {
  margin-right: 30px;
}

.caracteristicas span {
  display: block;
  color: #B07DFB;
}

.numero {
  font-size: 3em;
  line-height: 1;
  margin: 10px auto;
}

.rotulo {
  background: white;
  border-radius: 0 0 5px 5px;
  padding: 5px 0;
  position: relative;
  top: 2px;
}

.destaque {
  font-size: 0.875em;
  color: #B07DFB;
  max-width: 16em;
}

.citacao, .atributos {
  align-self: start;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
  background: linear-gradient(135deg, #8844ee, #B07DFB);
}

.citacao p {
  font-size: 1.5em;
  font-style: italic;
  text-align: center;
  color: white;
  max-width: 500px;
  margin: 0 auto;
}

.atributos li {
  color: white;
  font-family: Courier, monospace;
  font-size: 1.125em;
  padding: 15px;
}

.atributos li + li {
  border-top: 2px solid #B07DFB;
}

/*ANUNCIOS*/

.anuncios {
  grid-area: anuncios;
  border-left: solid 1px #333333;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
  display: grid;
  align-content: start;
  padding: 30px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  @media (max-width: 1200px) {
    border-left: none;
  }
}

/*FOOTER*/

.footer {
  grid-area: footer;
  background-position: center;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars-c6452e016c73.jpg);
  background-size: cover;
  border-top: solid 1px #333333;
}

.footer p {
  color: white;
  text-align: center;
  padding: 30px;
}
`;
