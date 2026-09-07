// router.js - Gerencia as rotas e injeta o conteúdo no DOM

const rotas = {
    '/': Views.home,
    '/projetos': Views.projetos,
    '/sobre': Views.sobre,
    '/cadastro': Views.cadastro
};

function gerenciarRota() {
    const caminho = window.location.hash.slice(1) || '/';
    const appContainer = document.getElementById('app');
    
    // Injeção de conteúdo via SPA
    appContainer.innerHTML = rotas[caminho] || `
      <section class="section">
        <div class="container text-center">
          <h1>Erro 404</h1>
          <p>Página não encontrada.</p>
          <a href="#/" class="btn btn-primary mt-4">Voltar ao Início</a>
        </div>
      </section>
    `;

    // Fechar menu mobile ao trocar de rota
    document.getElementById('menu-toggle').checked = false;

    // Atualizar links ativos no cabeçalho
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + caminho) {
        link.classList.add('active');
      }
    });

    // Sub-rotinas disparadas após injeção de HTML
    if (caminho === '/cadastro') {
      App.inicializarFormulario();
    }
}

window.addEventListener('hashchange', gerenciarRota);
window.addEventListener('load', gerenciarRota);
