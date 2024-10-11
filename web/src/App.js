import React, { useState } from 'react';
import './App.css';
import axios from 'axios'; 
import Lead from './model/Lead';
import Swal from 'sweetalert2';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [leadData, setLeadData] = useState(new Lead(null, '', '', new Date(), ''));

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/createlead', leadData);
      console.log(response.data);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Nossa equipe irá entrar em contato com você, obrigado!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      setShowModal(false);
      
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      Swal.fire({
        title: 'Erro!',
        text: 'Erro ao cadastrar lead.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleChange = (e) => {
    setLeadData({ ...leadData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App" style={styles.background}>
      {/* Card para o cabeçalho */}
      <div style={styles.card}>
        <header className="App-header">
          <h1 style={{ fontWeight: 'bold', color: '#312853' }}>TechBus Enterprise</h1>
          <h2>Solução inteligente e inovadora para você ter um controle melhor das rotas e check-ins de alunos e trabalhadores.</h2>   
          <button onClick={toggleModal} style={styles.button}>
            Cadastre-se
          </button>
        </header>
      </div>

      {/* Card para a seção "Por que confiar na TechBus?" */}
      <div style={styles.card}>
        <h2>Por que confiar na TechBus?</h2>
        <div style={styles.flexContainer}>
          <div style={styles.textColumn}>
            <p>
              Com tecnologia avançada que otimiza o tempo, reduz custos e aumenta a segurança.
            </p>
            <p>
              Priorizamos a segurança e a eficiência.
            </p>
          </div>
          <div style={styles.textColumn}>
            <p>
              Com um sistema integrado e fácil de usar, garantimos o controle total das rotas e dos passageiros.
            </p>
          </div>
        </div>
      </div>


      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Cadastro de Lead</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={leadData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={leadData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label>Telefone:</label>
                <input
                  type="tel"
                  name="telefone"
                  value={leadData.telefone}
                  onChange={handleChange}
                />
              </div>
              <div style={styles.buttonGroup}>
                <button type="submit" style={styles.button}>Enviar</button>
                <button type="button" onClick={toggleModal} style={{ ...styles.button, ...styles.closeButton }}>
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
       <footer style={styles.footer}>
        <p>Conheça nossas redes sociais:</p>
        <p>@techbusenterprise</p>
        <p>Telefone para contato:</p>
        <p>(46) 9999-9999</p>
      </footer>
    </div>
    
  );
}

const styles = {
  background: {
    backgroundImage: `url(${require('./assets/techbus.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  card: {
    background: '#fff',
    borderRadius: '8px',
    padding: '30px', // Aumentado para mais padding
    marginTop: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '90%', // Aumentado para ser mais largo
    maxWidth: '800px', // Aumentado para ser mais largo
    textAlign: 'left',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textColumn: {
    flex: 1,
    padding: '0 10px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '300px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007BFF', // Azul
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  closeButton: {
    marginLeft: '10px',
    backgroundColor: 'red',
  },
  footer: {
    backgroundColor: '#312853', // Cor de fundo
    color: '#fff', // Cor do texto
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
    position: 'relative',
    width: '100%',
  }
};

export default App;
