import PropTypes from "prop-types";
import React from "react";

const Button = ({ children, onClick }) => {
	return (
		<div onClick={onClick} className='button'>
			<div className='button-text'>{children}</div>
		</div>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default Button;
