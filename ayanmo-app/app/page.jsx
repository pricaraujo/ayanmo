import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Shirt, RefreshCw } from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600;700&display=swap');

  body {
    background-color: #E5E5E5;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }

  /* Custom Scrollbar for a cleaner look */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #4F8EAD;
    border-radius: 10px;
  }
`;

export default function AyanmoApp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [selections, setSelections] = useState({
    ocasiao: '',
    desejo: '',
    sensorial: ''
  });

  // Handle auto-transition for the loading screen
  useEffect(() => {
    if (currentScreen === 5) {
      const timer = setTimeout(() => {
        setCurrentScreen(6);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const nextScreen = () => setCurrentScreen((prev) => Math.min(prev + 1, 6));
  const prevScreen = () => setCurrentScreen((prev) => Math.max(prev - 1, 0));
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelection = (category, value) => {
    setSelections((prev) => ({ ...prev, [category]: value }));
  };

  const resetApp = () => {
    setSelections({ ocasiao: '', desejo: '', sensorial: '' });
    setCurrentScreen(0);
  };

  const OptionList = ({ options, category }) => (
    <div className="flex flex-col gap-4 mt-8">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleSelection(category, opt)}
          className={`px-6 py-4 rounded-xl text-left font-medium transition-all duration-300 flex justify-between items-center border ${
            selections[category] === opt
              ? 'bg-[#163A5F] text-[#F4EFE8] border-[#163A5F] shadow-lg'
              : 'bg-transparent text-[#171717] border-[#171717] hover:border-[#163A5F] hover:text-[#163A5F]'
          }`}
        >
          {opt}
          {selections[category] === opt && <Check size={20} />}
        </button>
      ))}
    </div>
  );

  const renderLanding = () => (
    <div className="flex flex-col h-full justify-between p-10 animate-fade-in">
      <div className="mt-20">
        <div className="w-16 h-16 mb-8 text-[#163A5F]">
          {/* Abstract Logo Placeholder inspired by visual identity */}
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" stroke="currentColor" strokeWidth="4"/>
            <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="4"/>
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="4"/>
          </svg>
        </div>
        <h1 className="text-5xl font-poppins font-bold text-[#163A5F] mb-4">
          AYANMO
        </h1>
        <p className="text-lg text-[#171717] font-light max-w-[250px] leading-relaxed">
          Identidade, possibilidade, futuro. <br/><br/>
          Tecnologia assistiva e consultoria de estilo.
        </p>
      </div>
      <button 
        onClick={nextScreen}
        className="w-full bg-[#163A5F] text-[#F4EFE8] py-4 rounded-xl font-medium text-lg hover:bg-[#0f2842] transition-colors shadow-md"
      >
        Toque para conhecer
      </button>
    </div>
  );

  const renderCadastro = () => (
    <div className="flex flex-col h-full p-8 animate-fade-in">
      <div className="flex-1 mt-12">
        <h2 className="text-3xl font-poppins font-semibold text-[#5A3825] mb-2">Crie seu perfil</h2>
        <p className="text-[#171717] font-light mb-10 opacity-70">Para uma experiência personalizada.</p>
        
        <div className="flex flex-col gap-8">
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange}
              placeholder=" "
              className="block w-full bg-transparent border-0 border-b-2 border-[#171717] opacity-50 focus:opacity-100 focus:border-[#163A5F] focus:ring-0 px-0 py-2 text-lg text-[#171717] transition-all peer"
            />
            <label className="absolute text-sm text-[#171717] opacity-70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#163A5F] peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome completo</label>
          </div>

          <div className="relative">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              placeholder=" "
              className="block w-full bg-transparent border-0 border-b-2 border-[#171717] opacity-50 focus:opacity-100 focus:border-[#163A5F] focus:ring-0 px-0 py-2 text-lg text-[#171717] transition-all peer"
            />
            <label className="absolute text-sm text-[#171717] opacity-70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#163A5F] peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
          </div>

          <div className="relative">
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange}
              placeholder=" "
              className="block w-full bg-transparent border-0 border-b-2 border-[#171717] opacity-50 focus:opacity-100 focus:border-[#163A5F] focus:ring-0 px-0 py-2 text-lg text-[#171717] transition-all peer"
            />
            <label className="absolute text-sm text-[#171717] opacity-70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#163A5F] peer-focus:opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefone</label>
          </div>
        </div>
      </div>
      
      <button 
        onClick={nextScreen}
        disabled={!formData.name} // Basic validation just for prototype
        className={`w-full py-4 rounded-xl font-medium text-lg transition-colors shadow-md ${formData.name ? 'bg-[#5A3825] text-[#F4EFE8] hover:bg-[#42291b]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        Continuar
      </button>
    </div>
  );

  const renderOcasiao = () => (
    <div className="flex flex-col h-full p-8 animate-fade-in overflow-y-auto">
      <div className="flex-1 mt-6">
        <h2 className="text-3xl font-poppins font-semibold text-[#163A5F] mb-2 leading-tight">O que você procura hoje, {formData.name.split(' ')[0] || 'visitante'}?</h2>
        <OptionList 
          category="ocasiao" 
          options={["Look Casual", "Look Esportivo", "Look para Trabalho", "Look de Festa", "Moda Praia", "Moda Íntima"]} 
        />
      </div>
      <div className="pt-8 pb-4 bg-[#F4EFE8] sticky bottom-0">
        <button 
          onClick={nextScreen}
          disabled={!selections.ocasiao}
          className={`w-full py-4 rounded-xl font-medium text-lg transition-colors shadow-md ${selections.ocasiao ? 'bg-[#163A5F] text-[#F4EFE8]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Avançar
        </button>
      </div>
    </div>
  );

  const renderDesejo = () => (
    <div className="flex flex-col h-full p-8 animate-fade-in overflow-y-auto">
      <div className="flex-1 mt-6">
        <h2 className="text-3xl font-poppins font-semibold text-[#5A3825] mb-2 leading-tight">Como você quer ser percebida?</h2>
        <p className="text-[#171717] font-light mb-6 opacity-70">Escolha a imagem que deseja transmitir.</p>
        <OptionList 
          category="desejo" 
          options={["Profissional", "Confiante", "Acessível", "Criativa", "Elegante", "Marcante"]} 
        />
      </div>
      <div className="pt-8 pb-4 bg-[#F4EFE8] sticky bottom-0">
        <button 
          onClick={nextScreen}
          disabled={!selections.desejo}
          className={`w-full py-4 rounded-xl font-medium text-lg transition-colors shadow-md ${selections.desejo ? 'bg-[#5A3825] text-[#F4EFE8]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Avançar
        </button>
      </div>
    </div>
  );

  const renderSensorialidade = () => (
    <div className="flex flex-col h-full p-8 animate-fade-in overflow-y-auto">
      <div className="flex-1 mt-6">
        <h2 className="text-3xl font-poppins font-semibold text-[#163A5F] mb-2 leading-tight">Que tipo de tecido te atrai mais?</h2>
        <p className="text-[#171717] font-light mb-6 opacity-70">Focamos no seu conforto e bem-estar.</p>
        <OptionList 
          category="sensorial" 
          options={["Macio e confortável", "Fino e sofisticado", "Leve e fluido", "Estruturado com forma firme", "Neutro e simples", "Colorido ou diferente"]} 
        />
      </div>
      <div className="pt-8 pb-4 bg-[#F4EFE8] sticky bottom-0">
        <button 
          onClick={nextScreen}
          disabled={!selections.sensorial}
          className={`w-full py-4 rounded-xl font-medium text-lg transition-colors shadow-md ${selections.sensorial ? 'bg-[#163A5F] text-[#F4EFE8]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Ver meu resultado
        </button>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 animate-fade-in text-center">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-[#4F8EAD] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-[#5A3825] border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <h2 className="text-2xl font-poppins font-semibold text-[#163A5F] mb-4">Analisando seu perfil...</h2>
      <p className="text-[#171717] font-light opacity-70">Cruzando dados de estilo, biotipo e preferências sensoriais.</p>
    </div>
  );

  const renderRecomendacao = () => (
    <div className="flex flex-col h-full p-8 animate-fade-in overflow-y-auto">
      <div className="flex-1 mt-6">
        <h2 className="text-3xl font-poppins font-bold text-[#5A3825] mb-6">Sua Recomendação</h2>
        
        {/* Mock Image Area */}
        <div className="w-full aspect-[4/5] bg-[#E8E1D7] rounded-2xl mb-6 flex flex-col items-center justify-center border border-[#d3c7b6] shadow-inner relative overflow-hidden">
           <Shirt size={64} className="text-[#5A3825] opacity-20 mb-4" />
           <p className="text-sm font-medium text-[#5A3825] opacity-50 font-poppins tracking-wider uppercase">Look Gerado</p>
           {/* Decorative elements representing the brand */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8EAD] opacity-10 rounded-bl-full"></div>
           <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#163A5F] opacity-10 rounded-tr-full"></div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#F4EFE8]">
          <h3 className="font-poppins font-semibold text-[#163A5F] mb-2 text-lg">Perfil {selections.desejo}</h3>
          <p className="text-[#171717] font-light leading-relaxed text-sm">
            Baseado no seu desejo por um visual <strong>{selections.desejo.toLowerCase()}</strong> para <strong>{selections.ocasiao.toLowerCase()}</strong>, recomendamos peças que priorizam tecidos <strong>{selections.sensorial.toLowerCase()}</strong>. 
            <br/><br/>
            Esta composição alinha sua identidade visual com conforto tátil, respeitando suas escolhas.
          </p>
        </div>
      </div>

      <div className="pt-6 flex flex-col gap-3 sticky bottom-0 bg-[#F4EFE8]">
        <button className="w-full bg-[#5A3825] text-[#F4EFE8] py-4 rounded-xl font-medium text-lg hover:bg-[#42291b] transition-colors shadow-md flex items-center justify-center gap-2">
          <Check size={20} />
          Aceitar Look
        </button>
        <button 
          onClick={resetApp}
          className="w-full bg-transparent border-2 border-[#163A5F] text-[#163A5F] py-3.5 rounded-xl font-medium text-lg hover:bg-[#163A5F] hover:text-[#F4EFE8] transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw size={18} />
          Refazer Teste
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen bg-[#d3c7b6] flex items-center justify-center md:p-6">
        {/* Mobile Mockup Container */}
        <div className="w-full h-[100dvh] md:h-[850px] max-w-[420px] bg-[#F4EFE8] md:rounded-[40px] md:shadow-2xl overflow-hidden relative flex flex-col border-x-0 md:border-[8px] md:border-[#171717]">
          
          {/* Header with Back Button (Visible on internal screens) */}
          {currentScreen > 0 && currentScreen < 5 && (
            <div className="pt-12 px-8 pb-2 flex items-center z-10">
              <button 
                onClick={prevScreen}
                className="p-2 -ml-2 rounded-full hover:bg-black/5 text-[#171717] transition-colors"
                aria-label="Voltar"
              >
                <ArrowLeft size={24} />
              </button>
              
              {/* Simple Progress Indicators */}
              <div className="flex-1 flex justify-center gap-1.5 ml-4">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentScreen >= step ? 'w-6 bg-[#4F8EAD]' : 'w-2 bg-[#d3c7b6]'
                    }`}
                  />
                ))}
              </div>
              <div className="w-10"></div> {/* Spacer to center progress bar */}
            </div>
          )}

          {/* Screen Content Area */}
          <div className="flex-1 relative overflow-hidden">
            {currentScreen === 0 && renderLanding()}
            {currentScreen === 1 && renderCadastro()}
            {currentScreen === 2 && renderOcasiao()}
            {currentScreen === 3 && renderDesejo()}
            {currentScreen === 4 && renderSensorialidade()}
            {currentScreen === 5 && renderLoading()}
            {currentScreen === 6 && renderRecomendacao()}
          </div>

        </div>
      </div>

      {/* Tailwind basic animations definition for smooth transitions */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}