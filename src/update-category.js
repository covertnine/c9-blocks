/**
 * WordPress dependencies
 */
const { updateCategory } = wp.blocks;

/**
 * Icon
 */
import Icon from "../assets/c9-feather-logo-icon";

if (updateCategory) {
	updateCategory("c9-blocks", { icon: Icon });
}

import "./update-category/deregister-blocks";
import "./update-category/register-filters";
import "./update-category/register-styles";
import "./update-category/register-stores";
import "./components/sidebar";
