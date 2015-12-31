import {Component, Inject, OnDestroy} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskComponent} from '../task/task-component';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/task-actions';

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
export class TaskListComponent implements OnDestroy {

  static SELECTOR = 'ngc-tasks';

  private unsubscribe;

  constructor(@Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(
        this.mapStateToThis,
        null
    )(this);
    ngRedux.dispatch(taskActions.getUserTasks());
  }

  ngOnDestroy(): any {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      tasks: state.task.userTasks,
      user: state.user
    }
  }
}
