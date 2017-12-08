import { task } from 'gulp';
import { join } from 'path';
import * as del from 'del';

import { OUTPUT_DIR, DIST_DIR } from '../paths';

/** Removes the dist directory */
task('clean:dist', () => {
    console.log('Deleting ' + DIST_DIR);
    return del([DIST_DIR]);
});

/** Removes the output directory */
task('clean:output', () => {
    return del([
        join(OUTPUT_DIR, 'jspm_packages'),
        join(OUTPUT_DIR, 'scripts'),
        join(OUTPUT_DIR, 'styles'),
        join(OUTPUT_DIR, 'index.html'),
        join(OUTPUT_DIR, 'favicon.ico'),
        join(OUTPUT_DIR, 'system.config.js')
    ], { force: true });
});
