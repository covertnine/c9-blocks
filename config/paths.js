/**
 * Paths
 *
 * Project-related paths for Webpack and other tooling.
 */

const path = require('path');
const fs = require('fs');

// Resolve the real project directory (resolving symlinks if any).
const pluginDir = fs.realpathSync(process.cwd());
const resolvePlugin = (relativePath) => path.resolve(pluginDir, relativePath);

// Export paths.
module.exports = {
	// Environment variables.
	dotenv: resolvePlugin('.env'),

	// Plugin source folder.
	pluginSrc: resolvePlugin('src'),

	// Entry points for Webpack.
	pluginBlocksJs: resolvePlugin('src/blocks.js'),
	pluginBlocksRegisterJs: resolvePlugin('src/register.js'),
	pluginBlocksFrontendJs: resolvePlugin('src/frontend.js'),
	pluginBlocksBootstrapJs: resolvePlugin('src/vendor.js'),
	pluginBlocksEditorJs: resolvePlugin('src/editor.js'),

	// Output folder for the built assets.
	pluginDist: resolvePlugin('dist'),

	// Lockfile for dependency management.
	yarnLockFile: resolvePlugin('yarn.lock'),

	// Root project path.
	appPath: resolvePlugin('.'),
};