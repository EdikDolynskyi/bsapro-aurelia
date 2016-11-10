import {bindable} from "aurelia-framework";

export class TodoList {
	@bindable todos = [];
	@bindable onDeleteTodo;

	constructor(){
	}

	deleteTodoAction(todo){
		console.log(todo);
		this.onDeleteTodo(todo);
	}
}