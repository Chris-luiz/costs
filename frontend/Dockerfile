FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

###### ===COMANDO PARA SUBIR CONTAINER=== ######
#docker build --tag node_front-end .
#docker run -d -p 3000:3000 --network costs --name front_end 28c51eef968b  
#docker start -p 3000:3000 a6e31590a8b2  