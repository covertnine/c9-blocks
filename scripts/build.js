'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

// Modules.
const fs = require('fs');
const path = require('path');
const { green, red, dim, black } = require('colorette'); // Replaced chalk with colorette
const webpack = require('webpack');
const fileSize = require('filesize');
const gzipSize = require('gzip-size');
const config = require('../config/webpack.config.prod');
const formatWebpackMessages = require('../config/formatWebpackMessage');

// Build file paths.
const theCWD = process.cwd();
const fileBuildVendorsJs = path.resolve(theCWD, './dist/blocks.vendors.build.js');
const fileBuildJS = path.resolve(theCWD, './dist/blocks.build.js');
const fileBuildFrontendJs = path.resolve(theCWD, './dist/blocks.frontend.build.js');
const fileEditorCSS = path.resolve(theCWD, './dist/blocks.editor.build.css');
const fileStyleCSS = path.resolve(theCWD, './dist/blocks.build.css');

/**
 * Get File Size
 *
 * Get filesizes of all the files.
 *
 * @param {string} filePath path.
 * @returns {string} then size result.
 */
const getFileSize = (filePath) => {
  return fileSize(gzipSize.sync(fs.readFileSync(filePath)));
};

/**
 * Build function
 *
 * Create the production build and print the deployment instructions.
 *
 * @param {json} webpackConfig config
 */
async function build(webpackConfig) {
  // Use dynamic import for ora (ES Module)
  const ora = await import('ora'); // Dynamically importing ora
  const spinner = ora.default('Building files...').start(); // Using the default export

  // Compiler Instance.
  const compiler = await webpack(webpackConfig);

  // Run the compiler.
  compiler.run((err, stats) => {
    // Stop the spinner on completion or error
    spinner.stop();

    if (err) {
      return console.log(err);
    }

    // Get the messages formatted.
    const messages = formatWebpackMessages(stats.toJson({}, true));

    // If there are errors just show the errors.
    if (messages.errors.length) {
      // Only keep the first error. Others are often indicative
      // of the same problem, but confuse the reader with noise.
      if (1 < messages.errors.length) {
        messages.errors.length = 1;
      }
      // Formatted errors.
      console.log('\n❌ ', black.bgRed(' Failed to compile build. \n'));
      console.log('\n👉 ', messages.errors.join('\n\n'));

      // Don't go beyond this point at this time.
      return;
    }

    // CI.
    if (
      process.env.CI &&
      ('string' !== typeof process.env.CI ||
        'false' !== process.env.CI.toLowerCase()) &&
      messages.warnings.length
    ) {
      console.log(
        green(
          '\nTreating warnings as errors because process.env.CI = true.\n' +
            'Most CI servers set it automatically.\n'
        )
      );
      console.log(messages.warnings.join('\n\n'));
    }

    // Start the build.
    console.log(`\n ${dim("Let's build and compile the files...")}`);
    console.log('\n✅ ', green(black(' Built successfully! '))); // Fixed console log

    console.log(
      '\n\n',
      'File sizes after gzip:',
      '\n\n',
      getFileSize(fileBuildVendorsJs),
      `${dim('— ./dist/')}`,
      `${green('blocks.vendors.build.js')}`,
      '\n',
      getFileSize(fileBuildJS),
      `${dim('— ./dist/')}`,
      `${green('blocks.build.js')}`,
      '\n',
      getFileSize(fileBuildFrontendJs),
      `${dim('— ./dist/')}`,
      `${green('blocks.frontend.build.js')}`,
      '\n',
      getFileSize(fileEditorCSS),
      `${dim('— ./dist/')}`,
      `${green('blocks.editor.build.css')}`,
      '\n',
      getFileSize(fileStyleCSS),
      `${dim('— ./dist/')}`,
      `${green('blocks.build.css')}`,
      '\n\n'
    );

    return true;
  });
}

build(config);