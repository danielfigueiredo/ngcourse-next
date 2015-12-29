import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskListComponent} from '../task-list/task-list-component';
import {TaskAddComponent} from '../task-add/task-add-component';
import {TaskEditComponent} from '../task-edit/task-edit-component';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: TaskListComponent, name: 'Tasks', useAsDefault: true },
  { path: '/add', component: TaskAddComponent, name: 'Tasks.Add'},
  { path: '/:id', component: TaskEditComponent, name: 'Tasks.Details' }
])
export class TaskOutletComponent {

}
