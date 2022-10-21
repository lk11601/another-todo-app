import PropTypes from "prop-types";
import React from "react";

const Select = ({ options, value, setValue }) => {
	return (
		<select onChange={setValue} value={value} style={{ padding: 12, paddingLeft: 16 }}>
			{options.map((option, index) => (
				<option value={option} key={index}>
					{option}
				</option>
			))}
		</select>
	);
};

Select.propTypes = {
	options: PropTypes.any,
	setValue: PropTypes.any,
	value: PropTypes.any,
};

export default Select;
