import React, { useState, useEffect } from "react";
import Todos from "./todos.jsx";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero")
			.then((response) => response.json())
			.then((response) => {
				setTodos(response);
			});
	}, []);

	const addTodo = () => {
		const data = [...todos, { label: todo, done: false }];
		console.log(data);
		setTodos(data);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero", {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const deleteTodo = (listUpdated) => {
		setTodos(listUpdated);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero", {
			method: "PUT",
			body: JSON.stringify(listUpdated),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<div className="text-center mt-5">
			<h1>To Do List</h1>
			<input
				type="text"
				name="todo"
				onChange={(event) => {
					return setTodo(event.target.value);
				}}
				value={todo}
			/>
			<button
				onClick={() => {
					addTodo();
					setTodo("");
				}}>
				Add task
			</button>
			<Todos listTodos={todos} functionDelete={deleteTodo} />
		</div>
	);
};

export default Home;
