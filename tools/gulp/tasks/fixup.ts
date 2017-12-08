import { join } from 'path';
import { task, src, dest } from 'gulp';

import { fromRoot, DIST_DIR } from '../paths';

const gulpModifyFile = require('gulp-modify-file');

/** Replace System.registry.get calls with System.get to fix mismatching systemjs-builder and systemjs versions */
task('fixup:system-registry', () => {
    return src(join(DIST_DIR, 'scripts/**/*.js'), { base: '.' })
        .pipe(gulpModifyFile((content: string, path: string, file: string) => {
            return content.replace(/System.registry.get/g, 'System.get');
        }))
        .pipe(dest('.'));
});

/** Fixup the production system.config.js */
task('fixup:system-config', () => {
    return src(join(DIST_DIR, 'system.config.js'), { base: '.' })
        .pipe(gulpModifyFile((content: string, path: string, file: string) => {
            // Extract JSON config object
            const startText = 'System.config(';
            const endText = ');';
            let configData = content.replace(startText, '').replace(endText, '');
            const devConfig = eval(`(${configData})`);

            // Copy only config elements needed for production
            const prodConfig: any = {};
            prodConfig['defaultJSExtensions'] = devConfig.defaultJSExtensions;
            prodConfig['paths'] = devConfig.paths;
            prodConfig['packages'] = devConfig.packages;
            prodConfig['meta'] = devConfig.meta;
            prodConfig['map'] = devConfig.map;
            prodConfig['bundles'] = devConfig.bundles;

            // Fix paths for bundles
            prodConfig['bundles']['scripts/app-bundle.js'] = devConfig.bundles['dist/scripts/app-bundle.js'];
            delete prodConfig['bundles']['dist/scripts/app-bundle.js'];

            prodConfig['bundles']['scripts/vendor-bundle.js'] = devConfig.bundles['dist/scripts/vendor-bundle.js'];
            delete prodConfig['bundles']['dist/scripts/vendor-bundle.js'];

            configData = `${startText}${JSON.stringify(prodConfig)}${endText}`;

            return configData;
        }))
        .pipe(dest('.'));
});
