import React from "react";
import PropTypes from "prop-types";

const Todos = (props) => {
	const deleteTodo = (index) => {
		console.log(props.listTodos[index]);
		const listTodosUpdated = props.listTodos;
		listTodosUpdated.splice(index, 1);
		console.log(listTodosUpdated);
		props.functionDelete(listTodosUpdated);
	};

	return (
		<ol className="row">
			{props.listTodos.map((value, index) => {
				return (
					<li key={index}>
						{value.label}
						<button
							type="button"
							class="btn-close"
							aria-label="Close"
							onClick={() => {
								deleteTodo(index);
							}}></button>
					</li>
				);
			})}
		</ol>
	);
};

Todos.propTypes = {
	listTodos: PropTypes.array,
	functionDelete: PropTypes.func,
};

export default Todos;
