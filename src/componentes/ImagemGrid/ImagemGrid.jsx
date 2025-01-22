import React from 'react';
import './ImagemGrid.css'; 

const ImagemGrid = () => {
 
  const imagens = [
    '/imagens/Thumbnails/image 7.png',
    '/imagens/Botoes/botao-frontend.png',
    '/imagens/Thumbnails/image 7 (1).png',
    '/imagens/Botoes/botao-frontend.png',
    '/imagens/Thumbnails/image 7 (2).png',
    '/imagens/Botoes/botao-frontend.png',
    '/imagens/Thumbnails/image 7 (3).png',
    '/imagens/Botoes/botao-backend.png',
    '/imagens/Thumbnails/image 7 (4).png',
    '/imagens/Botoes/botao-backend.png',
    '/imagens/Thumbnails/image 7 (5).png',
    '/imagens/Botoes/botao-backend.png',
    '/imagens/Thumbnails/image 7 (6).png',
    '/imagens/Botoes/botao-mobile.png',
    '/imagens/Thumbnails/image 7 (7).png',
    '/imagens/Botoes/botao-mobile.png',
    '/imagens/Thumbnails/image 7 (8).png',
    '/imagens/Botoes/botao-mobile.png',
  ];


  const cards = [];
  for (let i = 0; i < imagens.length; i += 2) {
    cards.push([imagens[i], imagens[i + 1]]);
  }

  return (
    <div className="grid-container">
      {}
      {cards.map((card, index) => (
        <div className="image-card" key={index}>
          {}
          {index % 1 === 3 && (
            <div className="category-image">
              <img src="/imagens/Botoes/Property 1=backend.png" alt="Categoria 1" />
            </div>
          )}
  
          {}
          {index % 1 === 1 && (
            <div className="category-image">
              <img src="/imagens/Botoes/Property 1=frontend.png" alt="Categoria 2" />
            </div>
          )}
  
          {}
          {index % 1 === 2 && (
            <div className="category-image">
              <img src="/imagens/Botoes/Property 1=mobile.png" alt="Categoria 3" />
            </div>
          )}
  
          {}
          <div className="image-card-content">
            {card.map((imagem, idx) => (
              <img 
                src={imagem} 
                alt={`Imagem ${index * 2 + idx + 1}`} 
                key={idx} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagemGrid;
