import React from 'react'
import PageDefault from '../../components/PageDefault'
import { Container, ResponsiveIframe } from './styles';


function Pagina404()  {
    return (
    
        <PageDefault>
            <h1>Página 404</h1>
            <Container>
                <ResponsiveIframe
                title="Jogo da imersão Alura"
                src={`https://editor.p5js.org/Retalhador/embed/2g6qF-Z3x`}
                frameBorder="0"
                width="600"
                height="300"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >
                </ResponsiveIframe> 
            </Container>       
        </PageDefault>
    );
}

export default Pagina404;