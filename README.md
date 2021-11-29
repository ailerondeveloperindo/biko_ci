# ![Biko Logo](https://raw.githubusercontent.com/ailerondeveloperindo/biko_ci/198df74f1b40f8f2cf503c6b067844675bfedbca/public/assets/img/logo.svg)

Hero UI as of recent changes,
![Hero](https://lh3.googleusercontent.com/FFMZtK34quoLQesxBBgwI8MQ3h7-74f0WKExSIBQN3EkuQq8Nxr4jiK9I7zW1NlvqWL8b7mGRK5FMU8BmwBaA_D04-1bmcLAVEANhnom4vaThSd_PwHP1O-yxsx_C0OzIcgY7GwmTe2HreSCjAPnPOP0NS7HnZ5BdcGwn0XQowEjihltfSVfU6AKIGxxRLlRqJ4jS5-ARHZMje3ImhTtjQ_kOr44X5ZgDOINYtS8o57pvs6RwR7tlKyivdol_RipP3Phq19SX72e1J7L2vNwhqy3xcNPYYgulEHiK687z3MgZ5XWQscdD_8yEXXGmjXfBAZfAha4nKHwUKVy2NTKMsvciL1Xpx_3x8v8zId6JSHsDQZCzrGDFZ1L16ScY5IGxVY12zmPhIp1GerYg-_Y5Z7Be0C9gsJ8uIv3YcVABUlsVYOPESdNfaqrHZXaEqh1f3dbUt1qHuZHmy9fIq8XKPCwOoFImjJWCs7H4fzCsgiT_ebLUNPgU9JdmLDR9r_Mt8Wq9lvOSX5dmxENOBU8AYzNOqXAhyK1ekatTUFnUNXksSRLvv1nlbasayms7btOjuOEtBt7oLP2s7ddW8eWTIOAhQw29RDB81GkzvA2XsQ-ehvVPRz39UGZkbTbW-NZ3FW7aT251cC1L5zDhWd80eceURkZJ2Ve2jkKT3HEDSBDmmWANwRycKKiLLJjJ9S8nalO_LR9IZV74MP4kLmbVg=w1276-h668-no?authuser=0)

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
