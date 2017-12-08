import { task, src, dest } from 'gulp';

import { fromRoot, DIST_DIR, OUTPUT_DIR } from '../paths';

const publishConfig = require(fromRoot('publish-config.json'));

/** Copies all files from the publish configuration */
task('copy:resources', () => {
    const files = publishConfig.files.map((path: string) => fromRoot(path));
    return src(files, { base: '.' })
        .pipe(dest(DIST_DIR));
});

/** Copies the dist output to the OUTPUT_DIR */
task('copy:output', () => {
    return src(fromRoot('dist/**/*'), { base: 'dist' })
        .pipe(dest(OUTPUT_DIR));
});
