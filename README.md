# Biko (Business Kompanion)
## Development Requirements
In order to have this project built, server need to fullfil these following requirements.
```
php 8+ (with ext-mbstring, ext-int, php-json, php-mysqlnd, and php-xml enabled)
npm 8.1.0 +
NodeJS 16.13.0 +
```
## Deployment Requirements

## Working on this Project
Webpack has this watch feature which if enabled, watch over any changes made on any of the project files and rebuild the bundle. Enable this feature by running this command on project main directory,
> npm run watch

Alternatively, You can do this as well
> npx webpack --watch --config webpack.config-dev.js

Run the Local Development Server by using this command
> php spark serve (More on https://codeigniter4.github.io/userguide/installation/running.html)

## Building this Project
Run this following command on project directory
> npm run build

## Hosting on Web Server
More Information on that here,
https://codeigniter4.github.io/userguide/installation/running.html?highlight=deploy


##
Made with ❤ by Aileron / Farid