Pico Default Theme Changelog
============================

**Note:** This changelog only provides technical information about the changes
          introduced with a particular Pico version, and is meant to supplement
          the actual code changes. The information in this changelog are often
          insufficient to understand the implications of larger changes. Please
          refer to both the UPGRADE and NEWS sections of the docs for more
          details.

### Version 2.1.4
Released: 2020-08-29

```
* [Changed] Don't setup nav toggle JavaScript when there's no menu
```

### Version 2.1.3
Released: 2020-07-10

No changes

### Version 2.1.2
Released: 2020-04-10

No changes

### Version 2.1.1
Released: 2019-12-31

No changes

### Version 2.1.0
Released: 2019-11-24

```
* [New] Add Pico's official logo and tagline
* [New] Add some utility classes for typography and images
* [Changed] Improve documentation of `pico-theme.yml`
* [Changed] Various small improvements
```

### Version 2.1.0-beta.1
Released: 2019-11-03

```
* [Changed] Add basic `pico-theme.yml` to use API v3, enable Twig's autoescape
            feature (no changes necessary) and register `Social` meta header
* [Changed] Use Pico's `pages` Twig function to create the main navigation
* [Changed] Improve formatting of definition lists and inline code snippets
* [Changed] Improve JSDoc class docs
* [Changed] Various small improvements
```

### Version 2.0.5-beta.1
Released: 2019-01-03

```
* [New] Add `2.0.x-dev` alias for master branch to `composer.json`
```

### Version 2.0.4
Released: 2018-12-17

No changes

### Version 2.0.3
Released: 2018-12-03

No changes

### Version 2.0.2
Released: 2018-08-12

No changes

### Version 2.0.1
Released: 2018-07-29

No changes

### Version 2.0.0
Released: 2018-07-01

```
* [New] Add Bountysource
* [Changed] Improve documentation
```

### Version 2.0.0-beta.3
Released: 2018-04-07

No changes

### Version 2.0.0-beta.2
Released: 2018-01-21

```
* [Fixed] Fix sliding animation of collapsible menu in IE 9
* [Changed] Move Fontello font to `icon/` directory
* [Changed] Move stylesheets to `css/` directory
* [Changed] Improve Fontello font copyright notice
* [Changed] Add Droid Sans and Droid Sans Mono font files to `font/` directory,
            making Pico's default theme fully self-containing
```

### Version 2.0.0-beta.1
Released: 2017-11-05

**Note:** Pico's default theme was completely rewritten from scratch for
          Pico 2.0 and moved to this separate repository. This changelog only
          provides basic information about the most important changes compared
          to Pico 1.0. It therefore doesn't include the changes made before
          this release. The rewrite breaks backwards compatibility (BC).

```
* [New] Rewrite Pico's default theme from scratch with a much cleaner, more
        modern, but still "stupidly simple" structure; the new theme officially
        supports Internet Explorer 9+ as well as all versions of the major
        desktop and mobile browsers, as long as they are still officially
        supported by their respective vendor
* [New] Pico's default theme is now a fully responsive theme, adapting the
        layout to the viewing environment (desktops vs. tablets vs. smartphones
        vs. ...)
* [New] Add a collapsible page menu for small screens (menu slides up/down)
* [New] Add basic form themeing
* [New] Support a "widescreen" mode, demonstrating how themes can adjust their
        behavior using config parameters (i.e. Pico's `config/config.yml`)
* [Changed] Show top-level pages in the website's navigation only (i.e. show
            `page.md` and `sub/index.md`, but not `sub/page.md`)
* [Changed] Hide pages starting with a `_` in the website's navigation
* [Changed] Move Pico's social icons from `index.md` to `_meta.md`,
            demonstrating how themes can use YAML-only meta pages to support
            dynamic content
```
