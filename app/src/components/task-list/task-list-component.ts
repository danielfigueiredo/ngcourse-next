import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskComponent} from '../task/task-component';
import {Task} from '../task/task';

let componentDirectives = [
  NgFor, ROUTER_DIRECTIVES, TaskComponent
];

@Component({
  selector: TaskListComponent.SELECTOR,
  template: `
    <div>
      <header class="flex mb4 header">
        <i class="h1 fa fa-bullseye fa-5x mr2 blue"></i>
        <div class="flex-auto">
          <h3 id="qa-display-name"
            class="mb0 mt1 caps">
            {{user.displayName}}
          </h3>
          <p class="h1 mb0 task-list-header">We've Got {{tasks.length}} Tasks</p>
          <a class="task-add-link" [routerLink]="['Tasks.Add']">
            <i class="fa fa-plus-circle"></i> Task
          </a>
        </div>
      </header>
      <div class="md-col-8 mx-auto rounded tasks-list mb4">
        <ngc-task *ngFor="#task of tasks"
          [task]="task"
          [user]="user">
        </ngc-task>
      </div>
    </div>
  `,
  directives: componentDirectives
})
export class TaskListComponent {

  private _tasks: Task[];
  private _user: any;

  static SELECTOR = 'ngc-tasks';

  constructor() {
    this._tasks = [{"_id":"5612912029j3e3032nz0kj6y","owner":"alice","description":"Do the loundry","__v":0}, {"_id":"561291202d77a30300awc64b","owner":"alice","description":"Clean the house","__v":0}, {"_id":"561291202d77a30300awc64b","owner":"alice","description":"Study","__v":0, "done":true}];
    this._user = {"_id":"560ea7114e9f13f11adb1b51","username":"alice","password":"$2a$10$t4R1ndYMcEpT7.qZfPb2lO6rQXA0sNKFrm5S6Z0XH9cIptKg68Y3K","displayName":"Alice Beeblebrox","__v":0};
  }

  get tasks() {
    return this._tasks;
  }

  get user() {
    return this._user;
  }
}
