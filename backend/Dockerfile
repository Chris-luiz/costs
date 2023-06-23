FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3333

CMD ["npx", "ts-node-dev", "./src/app.ts"]

###### ===COMANDO PARA SUBIR CONTAINER=== ######
#docker build --tag node_backend .3
#docker run -d -p 3333:3333 --network costs --name back_end cb98deb3ed34  