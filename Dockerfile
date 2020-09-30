FROM php:7.4-apache

LABEL maintainer="Tom Gregory"

COPY app /srv/app

# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

# Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# Install Composer  (http://getcomposer.org)
# Fall 2019: COPY docker/composer-installer.sh /usr/local/bin/composer-installer
# Fall 2020, w/ curl
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Fall 2020, no curl, references official Composer image
# Install Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Install unzip utils (used by Composer) ...
# ... install PHP's MySQL PDO drivers
# ... and run our composer-install script
RUN apt-get -yqq update \
    && apt-get -yqq install --no-install-recommends unzip \
    && docker-php-ext-install pdo_mysql \
    && composer --version

    # && chmod +x /usr/local/bin/composer-installer \
    # && composer-installer \
    # && mv composer.phar /usr/local/bin/composer \
    # && chmod +x /usr/local/bin/composer \

# Run Composer to install dependancies
WORKDIR /srv/app/
RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist
