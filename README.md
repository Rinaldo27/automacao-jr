# 🧪 Projeto de Testes Automatizados com Cypress em construção

Este projeto contém casos de testes end-to-end automatizados para aplicações web, utilizando o Cypress como framework.


## 🛠️ Pré-requisitos
- Ter o NodeJS instalado
- Ter um editor de texto instalado
- Ter o git instalado

## 📦 Instalação
- Clone o repositório:
git clone https://github.com/Rinaldo27/automacao-jr
- Instale as dependências:
npm install


## ▶️ Execução dos Testes
- Scripts configurados no package.json:
"cy:open": "cypress open",
"cy:run": "cypress run",
"test": "npx cypress run --env split=true"


## Como executar:
- Abrir o Cypress com interface gráfica: `npm run cy:open`
- Executar os testes em modo headless (terminal): `npm run cy:run`
- Executar testes com configuração personalizada (split=true): `npm run test`


💡 Certifique-se de ter instalado as dependências com `npm install` antes de rodar os testes.


## 📁 Estrutura do Projeto
- Diretórios e arquivos organizados conforme padrão Cypress
- Testes localizados em `cypress/e2e`
- Estrutura page objects aplicada e em construção  

## 👨‍💻 Autor
Rinaldo. J
