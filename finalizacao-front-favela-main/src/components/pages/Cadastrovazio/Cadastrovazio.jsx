/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { useNavigate } from "react-router-dom";
import anonimato from '../../img/anonimato.svg'
import up from '../../img/up.svg'
import './Cadastro.css'
import Header from "../../Header/Header";

export default () => {

  const navigate = useNavigate()
  const handleToSignin = async () => {
    navigate('/Perfil')
  }

  return (
    <>
      <Header />
      <container className="pagina-principal">
        <div className="row">
          <h1>Sua página</h1>
          <p className="titulo-destaque">Logo e/ou Foto</p>
          <img className="fotocadvazio" src={anonimato} />
          <p className="titulo-destaque">Foto de capa</p>
          <p className="notacao">Está foto aparecerá no topo da sua página</p>
          <img src={up} />
          <h2 className="titulo-destaque-2">Informações do seu negócio</h2>
          <p>Nome da marca do empreendimento</p>
          <input className="inputcadvazio" type="text" />
          <p>Endereço</p>
          <input className="inputcadvazio" type="text" />
          <p>Email</p>
          <input className="inputcadvazio" type="text" />
          <p>Site</p>
          <input className="inputcadvazio" type="text" />
          <p>Número de telefone</p>
          <input className="inputcadvazio" type="text" />
          <p>Conte um pouco para a gente sobre o seu empreendimento</p>
          <textarea className="textoarea" name="contemais" id="" cols="55" rows="15"></textarea>
          <h2 className="titulo-destaque-2">Categorias</h2>
          <p className="notacao"> Adicione categorias que descrevam sua empresa (por exemplo: Restaurante japonês, comida de fim de noite)</p>
          <input className="inputcadvazio" type="text" />
          <h2 className="titulo-destaque-2">Galeria de fotos</h2>
          <p className="notacao">Adicione fotos sobre seu empreendimento</p>
          <div className="galeria">
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <lu>
              <img src={up} />
            </lu>
            <button className="botaoentrar" onClick={handleToSignin}>ENTRAR </button>
          </div>
        </div>

      </container>
    </>
  )
}