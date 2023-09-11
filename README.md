Password Utils
===

This is a free-to-use website containing a collection of password-related tools. It was developed using [PICO](https://picocms.org/) – a simple yet powerful and blazing-fast PHP CMS.

🖌️ A custom theme was developed based on the [Simple CSS](https://simplecss.org/) library.

Both security and technical SEO-related aspects were covered during the website's development: from implementing security headers to creating a XML sitemap and robots.txt.

This branch provides a concise working code (.htaccess and custom configs) specifically optimized for [LiteSpeed servers](https://www.litespeedtech.com/).

You can [access Password Utils for free](https://passwordutils.com/), or install it locally if needed. Here are the steps to set it up locally:

    $ curl -sSL https://getcomposer.org/installer | php
    $ git clone https://github.com/jvpdls/password-utils/tree/litespeed pico
    $ php composer.phar --working-dir=pico install

This should help you get started with Password Utils in your development environment.