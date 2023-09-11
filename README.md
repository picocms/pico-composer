Password Utils
===
This is a free-to-use website containing a collection of password-related tools. 

## Development Framework
It was developed using [PICO](https://picocms.org/) – a simple yet powerful and blazing-fast PHP CMS.

## Stylish Design
A custom theme was developed based on the [Simple CSS](https://simplecss.org/) library.

## Security and SEO
The best practices are covered — from implementing security headers to creating a XML sitemap and robots.txt; Cloudflare was set up to ensure CDN-level optimizations (caching, minification, etc).

## LiteSpeed Server Ready
This branch provides a concise working code (.htaccess and custom configs) specifically optimized for [LiteSpeed servers](https://www.litespeedtech.com/).

## Getting Started
You can [access Password Utils for free](https://passwordutils.com/), or install it locally if needed. 

To do so, download Composer, clone this Git repository to the desired directory (e.g. /var/www/html/pico) and install Pico’s dependencies using Composer’s install option:

    $ curl -sSL https://getcomposer.org/installer | php
    $ git clone https://github.com/jvpdls/password-utils/tree/litespeed pico
    $ php composer.phar --working-dir=pico install

This should help you get started with Password Utils in your development environment.