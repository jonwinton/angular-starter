> Personal Tester

## Installation
* Open Terminal.
* Navigate to the site root directory.
* Run `cp build-env.js-dist build-env.js`.
* Update `URL_SITE` constant in `build-env.js` for `URL_SITE` and `URL_BASE` as necessary to your site root.
* From the directory root run `./build.sh install` once to install project dependencies.
** Script installs a local version of [Node.js](http://nodejs.org/) if it doesn't exist.
** Script uses `npm` for Node dependencies.
** Script uses `bower` for clientside dependencies.
** Alternative Node.js installation options are available in the `tools` directory. If you can't have Node installed globally on your machine, run `./tools/node-standalone-install.sh` to install an instance of Node in your current working directory.
* Run `sudo gem install hologram` and enter your password to install [Hologram](https://github.com/trulia/hologram).

## Documentation

## Usage
* This project uses a build process to genereate static output.
** Run `./build.sh` to perform a development build of the project.
*** The project output will appear in the `web` folder.
*** The styleguide output will appear in the `styleguide` folder.