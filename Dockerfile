FROM php:7.4-apache

LABEL maintainer="Tom Gregory"

COPY app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
