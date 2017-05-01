Pico
====

[![License](https://picocms.github.io/badges/pico-license.svg)](https://github.com/picocms/pico-composer/blob/master/LICENSE)
[![Version](https://picocms.github.io/badges/pico-version.svg)](https://github.com/picocms/pico-composer#install)
[![Freenode IRC Webchat](https://picocms.github.io/badges/pico-chat.svg)](https://webchat.freenode.net/?channels=%23picocms)

Pico is a stupidly simple, blazing fast, flat file CMS.

Visit us at http://picocms.org/ and see http://picocms.org/about/ for more info.

Screenshot
----------

![Pico Screenshot](https://picocms.github.io/screenshot.png)

Install
-------

You can install Pico either using a pre-bundled release or with composer. If you want to use the pre-bundled release, please head over to the ["Install" section][MainRepoInstall] of our main repository. If you want to use composer, you're at the right spot - and it's dead simple!

###### Step 1

Open a shell and navigate to the desired install directory of Pico within the `httpdocs` directory (e.g. `/var/www/html`) of your server. Download [composer][] and run it with the `create-project` option:

```shell
$ curl -sSL https://getcomposer.org/installer | php
$ php composer.phar create-project picocms/pico-composer .
```

###### Step 2

There's no second step! You have nothing to consider specially, simply navigate to your Pico install using your favorite web browser. Pico's default contents will explain how to use your brand new, stupidly simple, blazing fast, flat file CMS.

Upgrade
-------

If you have installed Pico using a pre-bundled release, please head over to the ["Upgrade" section][MainRepoUpgrade] of our main repository. If you have used composer as elucidated above, you can upgrade Pico by executing just a single shell command. Nevertheless you should *always* create a backup of your Pico installation before upgrading.

Pico follows [Semantic Versioning 2.0][SemVer] and uses version numbers like `MAJOR`.`MINOR`.`PATCH`. When we update the `PATCH` version (e.g. `2.0.0` to `2.0.1`), we made backwards-compatible bug fixes. If we change the `MINOR` version (e.g. `2.0` to `2.1`), we added functionality in a backwards-compatible manner. In both cases you can update Pico by executing just a single shell command in your Pico install directory:

```shell
$ php composer.phar update
```

That's it! composer will automatically update Pico and all plugins and themes you've installed using composer. Please make sure to manually update all plugins and themes you've installed manually.

But wait, we forgot to mention what happens when we update the `MAJOR` version (e.g. `2.0` to `3.0`). In this case we made incompatible API changes. We will then provide a appropriate upgrade tutorial, so please head over to the ["Upgrade" section][MainRepoUpgrade] of our main repository.

Getting Help
------------

Please refer to the ["Getting Help" section][MainRepoGettingHelp] of our main repository.

Contributing
------------

Please refer to the ["Contributing" section][MainRepoContributing] of our main repository.

[composer]: https://getcomposer.org/
[SemVer]: http://semver.org
[MainRepoInstall]: https://github.com/picocms/Pico#install
[MainRepoUpgrade]: https://github.com/picocms/Pico#upgrade
[MainRepoGettingHelp]: https://github.com/picocms/Pico#getting-help
[MainRepoContributing]: https://github.com/picocms/Pico#contributing

