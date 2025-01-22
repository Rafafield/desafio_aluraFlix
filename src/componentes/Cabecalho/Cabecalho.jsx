import React from 'react';
import './Cabecalho.css';
import { useNavigate } from 'react-router-dom';

function Cabecalho() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); 
    };

    const handleNovoVideoClick = () => {
        navigate('/adicionar-video'); 
    };

    return (
        <div className="cabecalho">
            <img src="/imagens/logo-aluraflix.png" alt="Logo do Alura Flix" />
            <div>
                {}
                <button onClick={handleHomeClick}>HOME</button>
                {}
                <button onClick={handleNovoVideoClick}>NOVO VÍDEO</button>
            </div>
        </div>
    );
}

export default Cabecalho;
