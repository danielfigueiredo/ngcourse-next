import {Component, Input} from 'angular2/core';
import {NgIf, NgClass}  from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Task} from '../task/task';

let componentDirectives = [
    ROUTER_DIRECTIVES, NgIf, NgClass
];

@Component({
  selector: TaskComponent.SELECTOR,
  template: `
    <div class="flex flex-center py1"
      [ngClass]="{ 'border-bottom': !$last }">
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
        <a *ngIf="task.owner === user.username && !task.done"
          [routerLink]="['Tasks.Details', {id: task._id}]">
          <i class="fa fa-pencil-square p1 gray"></i>
        </a>
      <div>
    </div>
  `,
  directives: componentDirectives
})
export class TaskComponent {

  static SELECTOR = 'ngc-task';

  @Input() task : Task;
  @Input() user : any;
}
