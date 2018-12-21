# iixd_gruppe5_bsp3
The amazing Spendierhousn Webapp 

## Pre-requisites
The following software is needed to run the webapp:
* Node-JS (tested using Node 8.12.0)
* NPM (tested using NPM 6.4.1)
* Browser (tested using Chrome 71.0.3578.98)

## Setup
Before you can run the Webapp you have to install the required packages using the following code:
```bash
npm install
```

## Start
To start the Webapp execute the following command:
```bash
npm start
```

Now a webserver is started on port 3000 and the sources are compiled.
After a few moments, this should be the output:
```

> typescript-react-mobx-boilerplate@1.0.0 start /Path/to/iixd_gruppe5_bsp3
> webpack-dev-server --mode development --hot --progress --colors --port 3000

 10% building 1/1 modules 0 active(node:13610) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(node:13610) DeprecationWarning: Tapable.apply is deprecated. Call apply on the plugin directly instead
ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Path/to/iixd_gruppe5_bsp3/src
ℹ ｢wds｣: 404s will fallback to /index.html
ℹ ｢wdm｣:    864 modules                                                       . ℹ ｢wdm｣: Compiled successfully.
```

Now you can open a browser and navigate to `http://localhost:3000`
