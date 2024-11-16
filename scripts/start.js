/**
 * Start
 *
 * The create-guten-block CLI starts here.
 */
'use strict';

// Set environment variables
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Catch unhandled promise rejections
process.on('unhandledRejection', (err) => {
    throw err;
});

const webpack = require('webpack');
const config = require('../config/webpack.config.dev');
const formatWebpackMessages = require('../config/formatWebpackMessage');
const kleur = require('kleur');
const readline = require('readline');

// Ensure Node.js version compatibility
const currentNodeVersion = process.versions.node;
const [major] = currentNodeVersion.split('.').map(Number);

if (major < 8) {
    console.error(
        kleur.red(
            `ERROR: You are running Node ${currentNodeVersion}. Create Guten Block requires Node 8 or higher. Please update your version of Node.`
        )
    );
    process.exit(1);
}

// Spinner utility using dynamic import for `cli-spinners`
async function startSpinner(message) {
    const { default: cliSpinners } = await import('cli-spinners');
    let i = 0;
    const spinner = cliSpinners.dots;
    const interval = setInterval(() => {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${kleur.green(spinner.frames[i])} ${message}`);
        i = (i + 1) % spinner.frames.length;
    }, spinner.interval);

    return () => {
        clearInterval(interval);
        readline.cursorTo(process.stdout, 0);
        readline.clearLine(process.stdout, 0);
    };
}

// Function to handle the build process
async function build(webpackConfig) {
    const compiler = webpack(webpackConfig);

    const stopSpinner = await startSpinner('Building and watching for changes...');

    compiler.watch({}, (err, stats) => {
        stopSpinner();

        if (err) {
            console.error(kleur.red(`Compilation error: ${err.message}`));
            return;
        }

        const messages = formatWebpackMessages(stats.toJson({}, true));

        // Handle errors
        if (messages.errors.length) {
            console.error(kleur.red('\n❌ Failed to compile.'));
            console.error(messages.errors.join('\n\n'));
            console.log(kleur.yellow('\nWatching for changes... (Press CTRL + C to stop).'));
            return;
        }

        // Handle warnings
        if (
            process.env.CI &&
            messages.warnings.length &&
            process.env.CI.toLowerCase() === 'true'
        ) {
            console.warn(
                kleur.yellow(
                    'Treating warnings as errors because process.env.CI is set to true.\n'
                )
            );
            console.warn(messages.warnings.join('\n\n'));
            return;
        }

        // Successful compilation
        console.log(kleur.green('\n✅ Compiled successfully!'));
        console.log(
            kleur.dim('Note: The development build is not optimized. To create a production build, use `npm run build`.')
        );
        console.log(kleur.dim('Watching for changes... (Press CTRL + C to stop).'));
        startSpinner('Watching for changes...');
    });
}

// Start the build
build(config).catch((err) => {
    console.error(kleur.red(`Error during build: ${err.message}`));
    process.exit(1);
});