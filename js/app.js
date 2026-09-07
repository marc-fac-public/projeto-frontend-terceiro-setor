// app.js - Arquivo principal de inicialização e controle de eventos (Desafio 3)

const App = {
  init: () => {
    console.log('Aplicação iniciada com sucesso. Estrutura pronta.');
    
    // Teste simples do storage (herança desafio 3)
    let visitas = StorageService.recuperar('num_visitas') || 0;
    StorageService.salvar('num_visitas', visitas + 1);
    console.log(`Você acessou este sistema ${visitas + 1} vezes.`);
  },

  // Toast Component (herança desafio 2)
  mostrarToast: (mensagem) => {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = mensagem;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  },

  // Validação e Submit do Formulário de Cadastro (Desafio 2 + Desafio 3)
  inicializarFormulario: () => {
    const form = document.getElementById('form-cadastro');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de envio
        const nome = document.getElementById('nome').value;
        const area = document.getElementById('area').value;
        
        console.log('Enviando dados...', { nome, area });
        
        // Mostrar Toast de Sucesso
        App.mostrarToast('Cadastro realizado com sucesso! Bem-vindo(a) ' + nome + '!');
        
        // Limpar form e redirecionar após um tempo
        form.reset();
        setTimeout(() => {
          window.location.hash = '/projetos';
        }, 3000);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', App.init);
