/**
 *
 * Asynchronously loads the component for Inputs
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
