import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Toggle = ({ options, value, onChange }) => {
	const theme = useSelector((state) => state.theme.theme);
	const lightTheme = theme === "light";
	return (
		<div style={{ display: "flex" }}>
			{options.map((item, index) => (
				<div key={index}>
					{value.toLowerCase() === item.toLowerCase() ? (
						<div
							style={{
								marginRight: 16,
								padding: 16,
								backgroundColor: lightTheme ? "black" : "white",
								borderRadius: 8,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: lightTheme ? "white" : "black",
							}}
							id={item}
						>
							{item}
						</div>
					) : (
						<div
							style={{
								marginRight: 16,
								padding: 16,
								backgroundColor: lightTheme ? "grey" : "grey",
								borderRadius: 8,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							id={item}
							onClick={onChange}
						>
							{item}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

Toggle.propTypes = {
	onChange: PropTypes.any,
	options: PropTypes.any,
	value: PropTypes.any,
};

export default Toggle;
