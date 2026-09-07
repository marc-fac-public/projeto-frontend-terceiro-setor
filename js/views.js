// views.js - Armazena o HTML das páginas da nossa SPA

const Views = {
  home: `
    <!-- Área de destaque (Hero) -->
    <section class="hero">
        <div class="container">
            <h1>Construindo um Futuro Mais Justo</h1>
            <p>Nossa missão é conectar pessoas de bom coração a causas que precisam de apoio urgente. Com a sua ajuda, podemos mudar o mundo, uma comunidade por vez.</p>
            <a href="#/projetos" class="btn btn-primary">Conheça nossas iniciativas</a>
        </div>
    </section>

    <!-- Seção sobre a ONG -->
    <section class="section section-alt">
        <div class="container">
            <header class="section-header">
                <h2>Quem Somos</h2>
                <p>Uma organização dedicada ao acolhimento e desenvolvimento social.</p>
            </header>
            
            <article style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <img src="img/voluntarios.jpg" alt="Grupo de voluntários da ONG Esperança Viva" style="width: 100%; border-radius: 8px; box-shadow: var(--shadow-sm);">
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <h3>Nossa História</h3>
                    <p>Fundada em 2010, a Esperança Viva nasceu do sonho de um grupo de jovens universitários que desejavam reduzir a desigualdade. Hoje, somos centenas de voluntários atuando em diversas frentes.</p>
                    
                    <h3>Nossos Valores</h3>
                    <p>Acreditamos na empatia, na transparência e no poder da ação coletiva. Cada centavo doado e cada hora de voluntariado são aplicados com o máximo rigor para gerar impacto real e duradouro.</p>
                </div>
            </article>
        </div>
    </section>

    <!-- Estatísticas -->
    <section class="section">
        <div class="container text-center">
            <h2>Nosso Impacto em Números</h2>
            <div class="grid-container mt-4" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                <div class="card-projeto" style="text-align: center; padding: 2rem;">
                    <h3>+5.000</h3>
                    <p>Famílias atendidas</p>
                </div>
                <div class="card-projeto" style="text-align: center; padding: 2rem;">
                    <h3>120</h3>
                    <p>Projetos realizados</p>
                </div>
                <div class="card-projeto" style="text-align: center; padding: 2rem;">
                    <h3>+300</h3>
                    <p>Voluntários ativos</p>
                </div>
            </div>
        </div>
    </section>
  `,

  projetos: `
    <section class="section section-alt">
      <div class="container">
        <header class="section-header">
            <h2>Projetos Ativos</h2>
            <p>Conheça nossas iniciativas e descubra como você pode contribuir.</p>
        </header>

        <div class="alert alert-info">
          <strong>Participe!</strong> Estamos com inscrições abertas para novos voluntários.
        </div>

        <div class="grid-container">
          <!-- CARD 1 -->
          <article class="card-projeto">
            <div>
              <span class="badge badge-urgente">Urgente</span>
              <h3 class="card-title">Cestas Básicas</h3>
              <p class="card-desc">Distribuição de alimentos para 100 famílias da comunidade local em situação de vulnerabilidade.</p>
            </div>
            <button class="btn btn-primary" onclick="App.mostrarToast('Obrigado pelo interesse! Em breve enviaremos detalhes.')">Apoiar Projeto</button>
          </article>

          <!-- CARD 2 -->
          <article class="card-projeto">
            <div>
              <span class="badge badge-saude">Saúde</span>
              <h3 class="card-title">Atendimento Médico</h3>
              <p class="card-desc">Mutirão de exames oftalmológicos gratuitos para crianças carentes da rede pública.</p>
            </div>
            <button class="btn btn-primary" onclick="App.mostrarToast('Obrigado pelo interesse! Em breve enviaremos detalhes.')">Apoiar Projeto</button>
          </article>

          <!-- CARD 3 -->
          <article class="card-projeto">
            <div>
              <span class="badge badge-voluntariado">Voluntariado</span>
              <h3 class="card-title">Reforma da Creche</h3>
              <p class="card-desc">Precisamos de pintores e ajudantes para reformar o espaço infantil Comunitário.</p>
            </div>
            <a href="#/cadastro" class="btn btn-secondary text-center">Inscrever-se</a>
          </article>
          
          <!-- CARD 4 -->
          <article class="card-projeto">
            <div>
              <span class="badge badge-voluntariado">Voluntariado</span>
              <h3 class="card-title">Aulas de Reforço</h3>
              <p class="card-desc">Apoio em matemática e português no contraturno escolar para alunos do ensino fundamental.</p>
            </div>
            <a href="#/cadastro" class="btn btn-secondary text-center">Inscrever-se</a>
          </article>
        </div>
      </div>
    </section>
  `,

  sobre: `
    <section class="section">
      <div class="container">
        <header class="section-header">
            <h2>Nossa História e Propósito</h2>
            <p>Conheça a essência da Esperança Viva e o que nos move todos os dias.</p>
        </header>
        <div class="form-container" style="text-align: center; max-width: 800px;">
          <h3>Como Tudo Começou</h3>
          <p>A Esperança Viva nasceu da crença de que a solidariedade é o motor mais poderoso para a transformação social. Fundada por um grupo de voluntários que viam de perto as dificuldades enfrentadas por famílias em situação de vulnerabilidade, decidimos que não podíamos apenas observar. Precisávamos agir.</p>
          
          <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--color-neutral-200);">
          
          <h3>Nossa Missão</h3>
          <p>Promover a dignidade, a educação e o bem-estar para comunidades carentes através de ações diretas, arrecadação de recursos e engajamento da sociedade civil. Acreditamos que cada pequeno gesto de ajuda pode desencadear uma enorme onda de mudança.</p>
          
          <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--color-neutral-200);">
          
          <h3>Transparência e Dedicação</h3>
          <p>Trabalhamos incansavelmente para garantir que cada doação e cada hora de voluntariado cheguem a quem realmente precisa. Nossos projetos são estruturados com transparência, acompanhados de perto e desenvolvidos sempre em parceria com as próprias comunidades que atendemos.</p>
          
          <div style="margin-top: 2rem;">
            <a href="#/cadastro" class="btn btn-primary">Faça Parte Dessa História</a>
          </div>
        </div>
      </div>
    </section>
  `,

  cadastro: `
    <section class="section section-alt">
      <div class="container">
        <header class="section-header">
            <h2>Cadastro de Voluntário</h2>
            <p>Junte-se à nossa equipe e ajude a transformar vidas.</p>
        </header>

        <div class="form-container">
          <form id="form-cadastro" style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem;">
            
            <div class="form-group" style="grid-column: span 12;">
              <label class="form-label" for="nome">Nome Completo</label>
              <input type="text" id="nome" class="form-control" placeholder="Digite seu nome" required minlength="3">
            </div>

            <div class="form-group" style="grid-column: span 12;">
              <label class="form-label" for="email">E-mail</label>
              <input type="email" id="email" class="form-control" placeholder="exemplo@email.com" required>
            </div>
            
            <div class="form-group" style="grid-column: span 12;">
              <label class="form-label" for="area">Área de Interesse</label>
              <select id="area" class="form-control" required>
                <option value="" disabled selected>Selecione uma área...</option>
                <option value="saude">Saúde e Bem-estar</option>
                <option value="educacao">Educação e Reforço Escolar</option>
                <option value="reforma">Manutenção e Reformas</option>
                <option value="doacao">Apoio Logístico (Doações)</option>
              </select>
            </div>

            <div style="grid-column: span 12; display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem;">
              <button type="button" class="btn btn-outline" onclick="window.history.back()">Cancelar</button>
              <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
            </div>

          </form>
        </div>
      </div>
    </section>
  `
};
