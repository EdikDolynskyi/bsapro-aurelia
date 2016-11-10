export class App {
	configureRouter(config, router) {
		config.title = 'BSA Aurelia ToDo';
		config.map([
			{
				route: ['', 'todo'],
				name: 'todo',
				moduleId: './todo/todo',
				nav: true,
				title: 'Todo'
			},
		]);

		this.router = router;
	}
}