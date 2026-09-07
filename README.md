# Plataforma ONG Esperança Viva

## 1. Visão Geral da Aplicação
A **Plataforma ONG Esperança Viva** é uma interface digital moderna voltada para o terceiro setor. Seu propósito é engajar voluntários, dar transparência a números de impacto e captar recursos. Trata-se de uma **Single Page Application (SPA)** leve e rápida, estruturada com **HTML5 semântico** para garantir acessibilidade e boa indexação.

## 2. Tecnologias e Arquitetura
O projeto adota uma abordagem "Vanilla" para garantir máxima performance e redução de dependências técnicas:
- **HTML5:** Estruturação semântica e formulários de cadastro.
- **CSS3:** Sistema de Design proprietário baseado em **Flexbox** e **CSS Grid**. Inclui variáveis nativas (`:root`) para padronização de cores e tipografia, além de responsividade mobile-first.
- **Vanilla JavaScript:** Gerenciamento do estado da aplicação, roteamento dinâmico baseado em Hash (`#`), injeção de HTML no DOM (views) e integração com a API `LocalStorage` do navegador.

## 3. Pré-requisitos e Instalação
Por ser uma aplicação Frontend nativa e não possuir um processo de "build" (ex: Webpack, Vite) ou gerenciador de pacotes (ex: NPM, Yarn), **não há instalação de dependências necessária**. 

O único pré-requisito é possuir um **Navegador Web atualizado** (Chrome, Firefox, Safari, Edge).

## 4. Como Executar e Testar
Para visualizar a aplicação corretamente e garantir o funcionamento das requisições de roteamento Javascript, recomenda-se servir o projeto através de um servidor local estático.

**Opção A (VS Code Live Server):**
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão "Live Server".
3. Clique com o botão direito no arquivo `index.html` e selecione *Open with Live Server*.

**Opção B (Terminal via Python):**
1. Abra o terminal na raiz do projeto.
2. Execute o comando: `python3 -m http.server 8080`
3. Acesse `http://localhost:8080` no seu navegador.
