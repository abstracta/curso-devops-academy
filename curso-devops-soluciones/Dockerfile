FROM ubuntu:latest

## Hacer un update

RUN apt-get update 

## Instalar Java

RUN apt-get install default-jdk -y

## Instalar wget

RUN apt-get install wget -y

## Instalar gnupg

RUN apt-get install gnupg -y

## Correr los comandos de la parte "long term support release" de Jenkins

RUN wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | apt-key add -
RUN sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
/etc/apt/sources.list.d/jenkins.list'
RUN apt-get update 
RUN apt-get install jenkins -y

## Exponer el puerto donde debería abrir Jenkins

EXPOSE 8080

CMD service jenkins start && tail -f /dev/null