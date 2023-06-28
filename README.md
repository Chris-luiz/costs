# Costs

Projeto Costs [Create React App](https://github.com/facebook/create-react-app).

## Sobre

Este projeto foi feito quando eu estava aprendendo react, e trata-se de um cursinho com um projeto simples feito em react, sem typescript.
Você pode encontrar esse projeto rodando no github pages, basta clicar no link a seguir ou digitar manualmente [[Link do Github Pages]]

## Oque inovei

Para simplesmente não copiar e colar o projeto do curso, resolvi acresentar novas funcionalidades conforme fui evoluindo como desenvolvedor front-end.
Depois implementei um backend em node com ExpressJS conectando a um banco mysql 
Por ultimo fiz a conteinerização da aplicação com Docker e Docker-Compose
A lista de features que inclui nesse projeto foram: 

* Acrecentei validações de formulario nas operações de CRUD, para isso, utilizei a biblioteca yup
* Para gerenciar os dados dos formularios, utilizei a biblioteca React-Hook-Forms
* Refiz a estilização utilizando Styled-Components.
* Fiz um backend em NodeJS com express 
* Conteinerização dom Docker


## Como Rodar Esse Projeto em sua Maquina

### `docker compose up`

Toda a aplicação está rodando em conteiners docker, então será necessário ter o docker instalado na maquina, seja distro linux ou windows, e para rodar a aplicação execute o comando `docker compose up` para levantar todos os containers em suas respectivas portas:

* phpmyadmin => 8888
* mysql => 3306
* backend => 3333
* frontend => 3000 

Obs: caso haja conflito com a porta do mysql, execute o comando `systemctl stop mysql` para parar o mysql e liberar a porta

## Imagens do Projeto

![alt text](./images/Screenshot%20from%202023-06-28%2013-15-47.png)
![alt text](./images/Screenshot%20from%202023-06-28%2013-15-54.png)
![alt text](./images/Screenshot%20from%202023-06-28%2013-15-58.png)