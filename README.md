﻿# LAB04-DSN-2023-2
## Requerimientos
>Nuestros requerimientos para esta aplicación web dependen de nuestro objetivo, si vamos a ejecutarla localmente solo necesitaremos git para la implementación, si vamos a usar docker necesitamos docker instalado en nuestro servidor. No te olvides tener habilitados los puertos necesarios en tu servidor, la aplicación corre en el puerto 5000 pero los dockers pueden usar otro puerto , es distinto el puerto del host que del docker.

---
## Guía de instalación
### Instalación local
>Ejecutaremos los siguientes comandos

    git clone https://github.com/Jacko-TF/LAB04-DSN-2023-2.git app
    cd app 
    npm install
    npm start

>Veremos nuestra aplicación desde http://localhost:5000/

---
### Instalación en Docker
>Para instalacion en docker necesitaremos crear un archivo Dockerfile, para ello podemos ejecutar

    vi Dockerfile
    
>En la línea de comandos de vi podemos editar colocando i , copiamos el siguiente contenido:

    FROM ubuntu
    RUN apt-get update && apt-get install -y nodejs npm
    RUN git clone -q https://github.com/Jacko-TF/LAB04-DSN-2023-2.git app
    WORKDIR app
    RUN npm install > /dev/null
    EXPOSE 5000
    CMD ["npm","start"]

> Luego regresamos al entorno de comandos presionando esc, guardamos y salimos con :wq , con cat Dockerfile verificamos el contenido del archivo. 
> Para crear nuestra imagen usaremos el siguiente comando:

    docker build -t app:v0.01 . 
    
> Con docker images podremos ver nuestra imagen, ahora ejecutaremos el docker con el siguiente comando:

    docker run -i -t -p 9000:5000 app:v0.01

>Nuestro servidor responde desde el puerto 9000 a las peticiones que el docker responde desde el puerto 5000, así tendriamos que acceder al puerto 9000 del servidor para ver nuestra página web.

---
