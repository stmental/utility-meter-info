import { task } from 'gulp';
import * as runSequence from 'run-sequence';

/** The main scaffolding build task that is used to generate the published website with production bundles. */
task('publish', ['unbundle:portal'], (done) => {
    return runSequence(
        'clean:dist',
        'clean:output',
        'bundle:portal',
        'fixup:system-registry',
        'copy:resources',
        'fixup:system-config',
        'unbundle:portal',
        //'copy:output',
        done
    );
});
