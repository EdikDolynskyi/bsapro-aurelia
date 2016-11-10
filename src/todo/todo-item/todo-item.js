import {bindable} from "aurelia-framework";

export class TodoItem {
	@bindable todo = {};
	@bindable onDeleteTodo;

	constructor(){
	}

	deleteTodo(todo){
		console.log(todo)
		this.onDeleteTodo(todo);
	}
}