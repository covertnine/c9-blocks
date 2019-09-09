# File Documentation
This README describes how the files are structured for this project.

## blocks.js
File that imports all defined C9 Blocks from the blocks directory to include in the build.

## frontend.js
File that imports all related frontend code required by certain blocks to include in the build.

## update-category.js

File that updates the C9 Blocks category to include a custom icon and imports files for configuring C9 Blocks such as de-gregistering certain blocks, registering custom styles, adding filters, and creating the C9 custom sidebar.

## init.php

File where all plugin settings are initialized and build files are enqueued.

## Blocks
This directory contains all the source code for each block introduced for the C9 Blocks Plugin.

#### i18n.js
This file sets the locale data.

#### block-{BLOCK_NAME}
This directory contains files that make up each C9 Block.

- index.js - Configures Gutenberg settings and registers the block definition to the editor.
- attributes.js - Defines all the properties and default values for the block.
- edit.js - React component for the block editor side.
- save.js - React component for the front end side.
- styles/editor.scss - Styles only for the editor.
- styles/style.scss - Styles for both editor and front end.
- components/inspector.js - React component for block editor sidebar for configuring settings.
- components/* - Helpful components for the block such as toolbars or child blocks.

## Components
This directory contains common components used across multiple blocks such as toolbars and spacers. It also contains components for the C9 custom sidebar which are given more detail below.

#### sidebar
React component for C9 custom sidebar.

#### custom-palette
React component for background color selectors present in the color palette under C9 Block Colors.

#### color-appender
React component that defines the custom color palette.

#### templates-modal
React component for the templates modal and also manages the storage of C9 templates.

- page-templates/{TEMPLATE_NAME}.js - Markup for a C9 page template.

- section-templates/{TEMPLATE_NAME}.js - Markup for a C9 section template.

- templates-markup.js - File that imports and categorizes all markups.