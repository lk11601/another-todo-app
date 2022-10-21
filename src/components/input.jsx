import PropTypes from "prop-types";
import React from "react";

const Input = ({ placeholder, value, onChange, password }) => {
	return (
		<input
			type={password ? "password" : "text"}
			value={value}
			onChange={onChange}
			className='input'
			placeholder={placeholder}
		/>
	);
};

Input.propTypes = {
	onChange: PropTypes.any,
	password: PropTypes.any,
	placeholder: PropTypes.any,
	value: PropTypes.any,
};

export default Input;
