import { TodoClass } from './todo-class';

export class Todo {
	constructor() {
		this.heading = "Todos";
		this.todos = [{ description: 'Learn Aurelia', done: false }];
		this.todoDescription = '';
	}

	addTodo() {
		if (this.todoDescription) {
			this.todos.push(new TodoClass(this.todoDescription));
			this.todoDescription = '';
		}
	}

	deleteTodo(todo) {
		console.log(todo);
		let index = this.todos.indexOf(todo);
		if (index !== -1) {
			this.todos.splice(index, 1);
		}
	}
}