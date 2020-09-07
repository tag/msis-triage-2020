FROM php:7.4-apache

LABEL maintainer="Tom Gregory"
COPY app/public/ /var/www/html
