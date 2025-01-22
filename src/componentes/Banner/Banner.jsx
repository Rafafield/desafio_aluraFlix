import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <img src="/imagens/Banner/Banner.png" alt="Imagem do Banner página inicial" />

            <div className="banner-content">
                {}
                <img src="/imagens/Botoes/Property 1=Frontend - Front.png" alt="Front End" />
                
                {}
                <h1>SEO com REACT</h1>
                <h2 className="textoBanner">Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app <br></br>inspirada no 
                desenho Pokémon com Nextjs e React, ver algumas dicas sobre <br></br>performance e de quebra conhecer uma plataforma sensacional pra fazer deploy<br></br>que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo <br></br>construindo uma "Pokedex"! </h2>
            </div>
        </div>
    );
}

export default Banner;
