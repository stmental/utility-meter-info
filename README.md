utilitymeter.info web app   
=======

This repository contains the code for the utilitymeter.info web app. 

## Design
  
  * Typescript, Aurelia, SystemJS (JSPM)
  * Firebase for authentication
  * MySql for database

## Aurelia-bundling with SystemJS

The aurelia-bundler module is used to bundle all the source JS files (and optionally HTML and CSS) into one or more files for SystemJS.  This makes it much quicker to download.  JSPM can also bundle files, but JSPM will not resolve all the aurelia dependencies correctly, which is why the aurelia-bundler is needed.
  
  Without bundling: 335 files in 2s
  With bundling: 7 files in 200ms

The aurelia-skeleton git projects make use of the aurelia-bundler and has a bunch of (not particularly user friendly) gulp files to run everything.  We’re going to continue to use gulp with the aurelia-bundler, but use custom gulp files to do the bundling, not those from the skeleton.

Need to install gulp and required tools for aurelia bundling 

    npm install --save-dev @types/node @types/gulp@3.8.35 @types/gulp-sourcemaps @types/del @types/rollup @types/run-sequence aurelia-bundler del gulp gulp-modify-file gulp-sourcemaps gulp-typescript require-dir run-sequence ts-node 

The bundler-tools.tar.gz file contains the alternate gulp scripts and configuration that work better for this project.  They are included in this project already, but archived in this one file for use elsewhere.

The contents of the archive are:
    tools/
    tools/gulp/
    tools/gulp/tasks/
    tools/gulp/tasks/fixup.ts
    tools/gulp/tasks/clean.ts
    tools/gulp/tasks/copy.ts
    tools/gulp/tasks/publish.ts
    tools/gulp/tasks/bundle.ts
    tools/gulp/paths.ts
    tools/gulp/gulpfile.ts
    tools/gulp/tsconfig-gulp.json
    bundle-config.json
    gulpfile.js
    publish-config.json

Run the bundler with:

    gulp publish

This will create a dist/ directory (if it doesn't exist) and put the bundled files there.