FROM php:7.4-apache

LABEL maintainer="Tom Gregory"
COPY app/public/index.php /var/www/html
