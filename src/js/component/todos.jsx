import React from "react";
import PropTypes from "prop-types";

const Todos = (props) => {
	return (
		<ol className="row">
			{props.listTodos.map((value, index) => {
				return <li key={index}>{value.label}</li>;
			})}
		</ol>
	);
};

Todos.propTypes = {
	listTodos: PropTypes.array,
};

export default Todos;
