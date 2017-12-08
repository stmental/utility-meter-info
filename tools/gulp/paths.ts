import { resolve, join } from 'path';

export const ROOT_DIR = resolve(__dirname, '../../');
export const DIST_DIR = join(ROOT_DIR, 'dist');
//export const OUTPUT_DIR = join(ROOT_DIR, '../ErpPortal')
export const OUTPUT_DIR = DIST_DIR;

export function fromRoot(...paths: string[]) {
    return join(ROOT_DIR, ...paths);
}
