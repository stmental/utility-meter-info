import { task } from 'gulp';
const aureliaBundler = require('aurelia-bundler');

import { fromRoot } from '../paths';
const bundleConfig = require(fromRoot('bundle-config.json'));

/** Creates production bundles of our aurelia application */
task('bundle:portal', () => {
    return aureliaBundler.bundle(bundleConfig);
});

/** Returns our configuration to an unbundled state */
task('unbundle:portal', () => {
    return aureliaBundler.unbundle(bundleConfig);
});
