Pico Default Theme
==================

This is the repository of Pico's official default theme.

Pico is a stupidly simple, blazing fast, flat file CMS. See http://picocms.org/ for more info.

Please refer to [`picocms/Pico`](https://github.com/picocms/Pico) to get info about how to contribute or getting help.

Screenshot
----------

![Pico Screenshot](https://picocms.github.io/screenshots/pico-21.png)

Install
-------

You usually don't have to install this theme manually, it's shipped together with [Pico's pre-built release packages](https://github.com/picocms/Pico/releases/latest) and a default dependency of [`picocms/pico-composer`](https://github.com/picocms/pico-composer).

If you're using a custom theme, you can safely remove this theme.

If you use a `composer`-based installation of Pico and want to either remove or install Pico's default theme, simply open a shell on your server and navigate to Pico's install directory (e.g. `/var/www/html`). Run `composer remove picocms/pico-theme` to remove the theme, or run `composer require picocms/pico-theme` (via [Packagist.org](https://packagist.org/packages/picocms/pico-theme)) to install the theme.

If you rather use one of Pico's pre-built release packages, it is best to simply leave Pico's default theme as it is - it won't hurt... :wink: The reason for this is, that the theme is part of Pico's pre-built release packages, thus it will be automatically re-installed when updating Pico. However, if you really want to remove the theme, simply delete the `themes/default` directory in Pico's install directory (e.g. `/var/www/html`). If you want to install Pico's default theme, you must first create a empty `themes/default` directory on your server, [download the version of the theme](https://github.com/picocms/pico-theme/releases) matching the version of your Pico installation and upload all containing files (i.a. `index.twig`) into said `themes/default` directory (resulting in `themes/default/index.twig`).

The versioning of Pico's default theme strictly follows the version of Pico's core. You *must not* use a version of the theme that doesn't match the version of Pico's core (e.g. version 2.0.1 is *not compatible* with Pico 2.0.0). If you're using a `composer`-based installation of Pico, simply use a version constaint like `^2.0` - `picocms/pico-theme` ensures that its version matches Pico's version. Even if you're using one of Pico's pre-built release packages, you don't have to take care of anything - a matching version of the theme is part of Pico's pre-built release packages anyway.

Usage
-----

Pico's default theme isn't really intended to be used for a productive website, it's rather a starting point for creating your own theme. Simply copy the theme's directory (`themes/default/` to e.g. `themes/my_theme/`) and add the following line to your `config/config.yml`:

```yaml
theme: my_theme
```

You can now edit the theme's stylesheets and JavaScript to fit your needs. If you rather want to use a third-party theme, simply add the theme's directory to your `themes/` directory (e.g. `themes/some_other_theme/`) and update your `config/config.yml` accordingly. Pico's default theme is now completely disabled and won't ever interfere with your custom theme or your website in general anymore. If you want to use Pico's default theme again, either remove the line or replace it by `theme: default`.

Anyway, since Pico's default theme is meant to be a starting point for your own theme, it demonstrates how themes can allow one to tweak a theme's behavior. For this reason it supports a "Widescreen" mode: By adding `theme_config.widescreen: true` to your `config/config.yml`, the theme's main container grows from 768px to 1152px breadth due to adding `class="widescreen"` to the website's `<body>` element. Pico's default theme furthermore supports displaying both a logo and a tagline in its header, as well as adding social buttons to its footer. Rather than using Pico's config for this, it uses the YAML Frontmatter of the `content/_meta.md` Markdown file. Here's `content/_meta.md` from Pico's sample contents:

```yaml
---
Logo: %theme_url%/img/pico-white.svg
Tagline: Making the web easy.
Social:
    - title: Visit us on GitHub
      url: https://github.com/picocms/Pico
      icon: octocat
    - title: Join us on Freenode IRC Webchat
      url: https://webchat.freenode.net/?channels=%23picocms
      icon: chat
---
```

You should also check out the theme's `pico-theme.yml`: First of all it tells Pico to use the latest API version for themes and adjusts Pico's default Twig config. But more importantly it also registers the mentioned `widescreen` theme config as well as the meta headers `Logo`, `Tagline` and `Social`.

Getting Help
------------

Please refer to the ["Getting Help" section](https://github.com/picocms/Pico#getting-help) of our main repository.

Contributing
------------

Please refer to the ["Contributing" section](https://github.com/picocms/Pico#contributing) of our main repository.

By contributing to Pico, you accept and agree to the *Developer Certificate of Origin* for your present and future contributions submitted to Pico. Please refer to the ["Developer Certificate of Origin" section](https://github.com/picocms/Pico/blob/master/CONTRIBUTING.md#developer-certificate-of-origin) in the `CONTRIBUTING.md` of our main repository.
