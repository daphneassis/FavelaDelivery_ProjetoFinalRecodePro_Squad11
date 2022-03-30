/* eslint-disable jsx-a11y/alt-text */
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './Home.css'

export default function Home() {

  return (
    <>
      <Header />
      <main className="containermain">
        <div className="divdomeio homebanner">
        </div>
        <div className="texto">
          <div className="textoH1">
            <h1 className="titulo-banner">
              APOIE <span class="destaque">A SUA COMUNIDADE!</span> PEÇA DE UM
              COMERCIANTE LOCAL.
            </h1>
          </div>
          <div className="textoP">
            <div className="textoParagrafo">
              <p className='taxt'>
                O serviço ideal para sua necessidade de recebimento de seus
                produtos em sua comunidade em poucos cliques. Cadastre-se grátis e
                comece a usar agora mesmo. Preços direto no app. Peça em Segundos.
                Preço Justo. Conte com a gente! Cadastre-se agora!
              </p>
              <div className="divBotao">
                <button className="btnH">
                  <a href="https://www.facebook.com/">Saiba mais</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
