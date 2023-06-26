FROM mysql

ENV MYSQL_ROOT_PASSWORD=chadmin2020

ENV MYSQL_DATABASE=costs

COPY ./db/script.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]

###### ===COMANDO PARA SUBIR CONTAINER=== ######
#docker build --tag banco_de_dados .
#docker run --name container_banco_de_dados --network costs -d -p 3306:3306 6c06185a84dd