This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## How-tos and Conventions

#### Naming
* Name the index file for the block `block-<blockname>.js`
* If you have an inspector file, name it `block-<blockname>-inspector.js`
* The namespace for blocknames is `c9-blocks`. When you register a block it should be `c9-blocks/<block-name>`
* If you need a two-letter prefix, go with `c9`. You might name a class `C9CtaBlock`

#### Custom Icons
* Save your svg in the `assets` directory. 
* Create a js file in the same directory with the same name (e.g., `assets/cta.svg`, `assets/cta.js`)
* Copy the path from the svg into the `.js` file, and export it.
```
export default () =>
<svg id="Layer_1" data-name="Layer...>
```
*   Import your icon into the block like so: `import ctaIcon from '../../../assets/cta';
`