This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## Howtos and Conventions

#### Naming
Name the index file for the block `block-<blockname>.js`

#### Custom Icons
* Save your svg in the `assets` directory. 
* Create a js file in the same directory with the same name (e.g., `assets/cta.svg`, `assets/cta.js`)
* Copy the path from the svg into the `cta.js` file, and export it.
```
export default () =>
<svg id="Layer_1" data-name="Layer...>
```
*   Import your icon into the block like so: `import ctaIcon from '../../../assets/cta';
`