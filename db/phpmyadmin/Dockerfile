FROM phpmyadmin

ENV PMA_HOST=db
ENV PMA_PORT=3306
ENV PMA_USER=root
ENV PMA_PASSWORD=chadmin2020

EXPOSE 80

CMD ["apache2-foreground"]

###### ===COMANDO PARA SUBIR CONTAINER=== ######
#docker build --tag phpmyamdin_db .
#docker run -d -p 8888:80 --network costs --name phpmyadmin 6d9a2cd8a8742fa7
#docker start -p 8888:8888 686b14083ae3