# Biko (Business Kompanion)
This documentation is still incomplete

### Directory Structure
```
--- App
   |
   |--- Config
   |--- Controllers
   |--- Database
   |--- Filters
   |--- Helpers
   |--- Language
   |--- Libraries
   |--- Models
   |--- ThirdParty
   |--- Views
   
--- Scss
   |--- abstract
   |--- component
   |--- layout
   |--- pages
   |--- sections
   |--- _app.scss (index.scss uses this as entry point to load the rest of scss files)
   |--- _style.scss
   
--- public
   |--- assets
       |--- js
           |--- biko.bundle.js (Webpack Bundle)
           
--- src
   |--- index.js (Webpack Entry Point)
   |--- index.scss (index.js loads this)
```

### Wireframes / Mockups
Homepage Wireframe - https://www.figma.com/file/OA6G8yOhU2OTczKSMbbjBM/Homepage-Wireframe?node-id=0%3A1

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
> npm run dev

## Building this Project
Run this following command on project directory
> npm run build

## Hosting on Web Server
Please refer to this guide for installation on either apache or nginx web server,
https://codeigniter4.github.io/userguide/installation/running.html?highlight=deploy
### Docker


##
Copyright (c) Ahmad Farid
