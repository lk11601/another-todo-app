import PropTypes from "prop-types";
import React from "react";
import CheckIcon from "../assets/check.svg";

const CompleteButton = ({ complete, onClick }) => (
	<div
		onClick={onClick}
		style={{
			backgroundColor: complete ? "#0FB800" : "#EBEBEB",
			aspectRatio: 1,
			height: 47,
			borderRadius: 8,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		{complete && <img src={CheckIcon} alt='Check icon' />}
	</div>
);

CompleteButton.propTypes = {
	complete: PropTypes.bool,
	onClick: PropTypes.func,
};

export default CompleteButton;
