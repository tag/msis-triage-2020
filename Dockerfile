FROM php:7.4-apache

LABEL maintainer="Tom Gregory"

COPY app /srv/app

# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

# Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# Install Composer  (http://getcomposer.org)
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Install unzip utils (used by Composer) ...
# ... install PHP's MySQL PDO drivers
# ... and run our composer-install script
RUN apt-get -yqq update \
    && apt-get -yqq install --no-install-recommends unzip \
    && docker-php-ext-install pdo_mysql \
    && composer --version

# Run Composer to install dependancies
WORKDIR /srv/app/
RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist
