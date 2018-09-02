# Dockerfile
FROM php:7.2-apache

RUN docker-php-ext-install pdo_mysql
RUN a2enmod rewrite

COPY / /var/www
COPY public/ /var/www/html

RUN chown -R www-data:www-data /var/www
RUN chmod 755 /var/www

EXPOSE 80
