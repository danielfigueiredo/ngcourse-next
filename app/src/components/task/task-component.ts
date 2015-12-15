import {Component, View, Inject} from 'angular2/core';
import {NgClass, NgIf} from 'angular2/common';

import {RouterService} from '../../services/router/router-service';

@Component({
  selector: 'ngc-task',
  inputs: ['task', 'user']
})
@View({template: ` 
    <div class="flex flex-center py1"
      ng-class="{ 'border-bottom': !$last }">
      <i class="fa px3 py2"
        [ngClass]="{
          'fa-square-o': !task.done,
          'fa-check-square': task.done
        }">
      </i>
      <div class="flex-auto">
        <p class="m0 h6 gray">
          {{ user.displayName || 'Owner not specified' }}
        </p>
        <p class="m0">{{task.description}}</p>
      </div>

      <div class="px2">
        <a *ngIf="task.can.edit"
          (click)="toTaskDetails(task._id)">
          <i class="fa fa-pencil-square p1 gray"></i>
        </a>
      <div>
    </div>
    `,
  directives: [NgClass, NgIf ]
})
export class TaskComponent {

  static selector = 'ngcTask';

  private _task: any;
  private _user: any = {};
  private router: RouterService;

  constructor(@Inject('router') router: RouterService) {
    this.router = router;
  }

  get task(): any {
    return this._task;
  }

  set task(task) {
    this._task = task;
  }

  get user(): any {
    return this._user;
  }

  set user(user: any) {
    if (user) {
      this._user = user;
    }
  }

  toTaskDetails(id) {
    this.router.goToTask(id);
  }
}
