import './index.css';
import Acidente from '/public/img/acidente.jpg';
import Alagamento from '/public/img/alagamento.jpg';
import Animais from '/public/img/animais.jpg';
import Desabamento from  '/public/img/desmoronamento.jpg';
import Incendio from '/public/img/incêndio.jpg';
import PrimeiroSocorros from '/public/img/primeiros-socorros.png';
function Card() {
    return (
        <>
            <section className="sectionCards">
                <div className="container">
                    <div className="card__container">
                        <article className="card__article">
                            <img src={PrimeiroSocorros} alt="Queda de Árvore" className="card__img" />
                            <div className="card__data">
                                
                                <h2 className="card__title">Primeiros socorros</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/PRIMEIROS-SOCORROS.pdf" target="_blank" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Alagamento} alt="Alagamento" className="card__img" />
                            <div className="card__data">
                                
                                <h2 className="card__title">Alagamento</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/ENCHENTES.pdf" target="_blank" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Desabamento} alt="Desabamento" className="card__img" />
                            <div className="card__data">
                                
                                <h2 className="card__title">Desabamento</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/EDIFICACAO-MAIS-SEGURA.pdf" target="_blank" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Incendio} alt="Incêndio Florestal" className="card__img" />
                            <div className="card__data">
                               
                                <h2 className="card__title">Incêndio Florestal</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/INCENDIO-EM-VEGETACAO.pdf" target="_blank" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Animais} alt="Acidente com animais" className="card__img" />
                            <div className="card__data">
                                
                                <h2 className="card__title">Acidente com animais</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/ACIDENTES-COM-ANIMAIS-PECONHENTOS.pdf" target="_blank" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Acidente} alt="Acidente" className="card__img" />
                            <div className="card__data">
                                
                                <h2 className="card__title">Acidente</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/ACIDENTE-DE-TRANSITO.pdf" target="_blank" className="card__button">Read More</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Card;