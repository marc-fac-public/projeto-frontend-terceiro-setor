// storage.js - Lida com o armazenamento local e dados (Desafio 3)

const StorageService = {
  salvar: (chave, dado) => {
      localStorage.setItem(chave, JSON.stringify(dado));
  },
  recuperar: (chave) => {
      const dado = localStorage.getItem(chave);
      return dado ? JSON.parse(dado) : null;
  }
};
