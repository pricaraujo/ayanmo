import React, { useState, useEffect } from 'react';

export default function AyanmoApp() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleNext = (screen, optionKey, optionValue) => {
    if (optionKey) {
      setSelectedOptions(prev => ({ ...prev, [optionKey]: optionValue }));
    }
    setCurrentScreen(screen);
  };

  // Importando as fontes da identidade visual
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Cores baseadas no guia de identidade visual
  const colors = {
    offWhite: '#F4EFE8',
    text: '#171717',
    azulProfundo: '#163A5F',
    azulApoio: '#4F8EAD',
    marromProfundo: '#5A3825',
    white: '#FFFFFF'
  };

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: colors.offWhite,
      color: colors.text,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    title: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      color: colors.azulProfundo,
      marginBottom: '10px'
    },
    buttonPrimary: {
      backgroundColor: colors.azulProfundo,
      color: colors.white,
      padding: '15px 30px',
      borderRadius: '8px',
      border: 'none',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '320px',
      marginTop: '20px',
      transition: 'background-color 0.2s'
    },
    buttonSecondary: {
      backgroundColor: colors.marromProfundo,
      color: colors.white,
      padding: '15px 30px',
      borderRadius: '8px',
      border: 'none',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '320px',
      marginTop: '20px',
      transition: 'background-color 0.2s'
    },
    optionButton: {
      backgroundColor: colors.white,
      color: colors.text,
      border: `2px solid ${colors.azulApoio}`,
      padding: '16px 20px',
      borderRadius: '8px',
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '15px',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '320px',
      marginBottom: '12px',
      textAlign: 'center',
      transition: 'all 0.2s'
    },
    card: {
      backgroundColor: colors.white,
      padding: '40px 30px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px'
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <div style={{...styles.card, backgroundColor: 'transparent', boxShadow: 'none'}}>
            <h1 style={{...styles.title, fontSize: '42px', textAlign: 'center', letterSpacing: '-1px'}}>AYANMO</h1>
            <p style={{textAlign: 'center', marginBottom: '40px', fontSize: '16px', color: colors.text}}>
              tecnologia assistiva +<br/>consultoria de estilo
            </p>
            <button 
              style={styles.buttonPrimary}
              onClick={() => handleNext('occasion')}
            >
              Iniciar Consultoria
            </button>
          </div>
        );

      case 'occasion':
        return (
          <div style={styles.card}>
            <h2 style={{...styles.title, fontSize: '24px', textAlign: 'center', marginBottom: '30px'}}>
              O que você procura hoje?
            </h2>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {['Look Casual', 'Look Esportivo', 'Look para Trabalho', 'Look de Festa', 'Moda Praia', 'Look para Viagem'].map(opt => (
                <button 
                  key={opt}
                  style={styles.optionButton}
                  onClick={() => handleNext('sensorial', 'occasion', opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'sensorial':
        return (
          <div style={styles.card}>
            <h2 style={{...styles.title, fontSize: '24px', textAlign: 'center', color: colors.marromProfundo, marginBottom: '30px'}}>
              Que tipo de tecido te atrai mais?
            </h2>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {['Macio e confortável', 'Fino e sofisticado', 'Leve e fluido', 'Justo e elástico', 'Estruturado e firme', 'Neutro e simples'].map(opt => (
                <button 
                  key={opt}
                  style={{...styles.optionButton, borderColor: colors.marromProfundo}}
                  onClick={() => handleNext('loading', 'sensorial', opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );

      case 'loading':
        // Simula o tempo de processamento
        setTimeout(() => setCurrentScreen('result'), 3000);
        return (
          <div style={{...styles.card, backgroundColor: 'transparent', boxShadow: 'none'}}>
            <h2 style={{...styles.title, fontSize: '24px', textAlign: 'center'}}>Analisando...</h2>
            <p style={{textAlign: 'center', marginTop: '10px', color: colors.text}}>
              Conectando suas preferências com nossa base de estilo.
            </p>
            <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center'}}>
              <div style={{
                width: '50px', 
                height: '50px', 
                border: `4px solid ${colors.azulApoio}`, 
                borderTop: `4px solid ${colors.azulProfundo}`, 
                borderRadius: '50%', 
                animation: 'spin 1s linear infinite'
              }} />
              <style>{`
                @keyframes spin { 
                  0% { transform: rotate(0deg); } 
                  100% { transform: rotate(360deg); } 
                }
              `}</style>
            </div>
          </div>
        );

      case 'result':
        return (
          <div style={styles.card}>
            <h2 style={{...styles.title, fontSize: '24px', textAlign: 'center'}}>Recomendação</h2>
            <div style={{backgroundColor: colors.offWhite, padding: '24px', borderRadius: '12px', marginTop: '20px', width: '100%', textAlign: 'center'}}>
              <p style={{fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: colors.text}}>
                Proposta de Look
              </p>
              <p style={{fontSize: '14px', marginTop: '10px', lineHeight: '1.6'}}>
                Ocasião: <strong>{selectedOptions.occasion}</strong><br/>
                Sensorial: <strong>{selectedOptions.sensorial}</strong>
              </p>
              
              {/* Espaço reservado para a imagem mockada */}
              <div style={{
                backgroundColor: colors.azulApoio, 
                height: '180px', 
                width: '100%', 
                borderRadius: '8px', 
                marginTop: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: colors.white,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500
              }}>
                [Mockup da Roupa]
              </div>
            </div>
            <button 
              style={styles.buttonSecondary}
              onClick={() => handleNext('landing')}
            >
              Refazer Análise
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {renderScreen()}
    </div>
  );
}
