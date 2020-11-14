/**
 * WordPress dependencies
 */
const { updateCategory } = wp.blocks;

/**
 * Icon
 */
import Icon from "../../assets/c9-feather-logo-icon";

if (updateCategory) {
	updateCategory("c9-blocks", { icon: Icon });
}

import "./deregister-blocks";
import "./register-filters";
import "./register-styles";
import "./register-stores";
import "../components/sidebar";
