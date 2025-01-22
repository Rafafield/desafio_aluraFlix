import { useNavigate } from 'react-router-dom';

function Cabecalho() {
  const navigate = useNavigate();

  const handleNovoVideoClick = () => {
    navigate('/adicionar-video'); 
  };

  return (
    <div className="cabecalho">
      <img src="/imagens/logo-aluraflix.png" alt="Logo do Alura Flix" />
      <div>
        <button onClick={() => navigate('/')}>HOME</button>
        <button onClick={handleNovoVideoClick}>NOVO VÍDEO</button> {}
      </div>
    </div>
  );
}

export default Cabecalho;
