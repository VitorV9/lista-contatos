# 📇 Lista de Contatos

Este é o meu quinto projeto prático desenvolvido para o bootcamp da EBAC. O objetivo desta aplicação é aplicar conceitos avançados de React, criando uma agenda de contatos funcional com foco em gerenciamento de estado global e estilização componentizada.

## 🚀 Funcionalidades

A aplicação consiste em um gerenciador de contatos do tipo CRUD (Create, Read, Update, Delete). Cada contato salvo na agenda armazena os seguintes dados: Nome completo, E-mail e Telefone.

Adição: Inserção de novos contatos na lista através de um formulário.

Edição: Alteração dos dados (nome, e-mail ou telefone) de um contato previamente cadastrado.

Remoção: Exclusão rápida de contatos da agenda.

## 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e bibliotecas:

React: Biblioteca principal para a construção da interface de usuário.

Redux (Redux Toolkit): Responsável pelo gerenciamento do estado global da aplicação, armazenando a lista de contatos e lidando com as ações (adicionar, editar, remover) sem a necessidade de prop drilling.

Styled Components: Biblioteca de CSS-in-JS utilizada para a estilização isolada e dinâmica dos componentes.

TypeScript: Utilizado para garantir a tipagem estática dos dados de cada contato e das propriedades dos componentes, evitando erros em tempo de execução.

## ⚙️ Como executar o projeto na sua máquina

Certifique-se de ter o Node.js instalado. Em seguida, siga o passo a passo abaixo no seu terminal:

Clone este repositório:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
```

Acesse a pasta do projeto:

```bash
cd NOME_DO_REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```
