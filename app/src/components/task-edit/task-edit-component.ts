import {Component} from 'angular2/core';
import {RouteParams, Router, RouteConfig} from 'angular2/router';
import {TaskListComponent} from '../task-list/task-list-component';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';

@Component({
  selector: TaskEditComponent.SELECTOR,
  template: `
    <div class="sm-col-8 mx-auto border rounded">
      <div class="p2 gray bg-darken-1">
        <h4 class="m0 caps">Edit Task</h4>
      </div>
      <form class="p2 bg-white"
        [ngFormModel]="taskEditForm"
        (submit)="updateTask()">
        <label>Owner</label>
        <input class="block col-12 mb1 field"
          type="text"
          ngControl="owner"
          required>
        <label>Description</label>
        <input class="block col-12 mb2 field"
          type="text"
          ngControl="description"
          required>
        <label>Done?</label>
        <input class="block col-12 mb2 field"
          type="checkbox"
          ngControl="done"
          required>
        <button class="btn btn-primary"
          type="submit">
          Update
        </button>
        <button class="btn btn-primary bg-gray"
          (click)="cancel($event)">
          Cancel
        </button>
      </form>
    </div>
  `
})
export class TaskEditComponent {

  static SELECTOR = 'ngc-task-edit';

  taskEditForm: ControlGroup;
  
  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    formBuilder: FormBuilder) {
    let description = 'Mocked data id in param is: ' +
        this._routeParams.get('id');
    this.taskEditForm = formBuilder.group({
      owner: ['Alice Beeblebrox', Validators.required],
      description: [description, Validators.required],
      done: [false]
    });
  }

  updateTask() {
    this._router.navigate(['Tasks']);
  }

  cancel($event) {
    $event.preventDefault();
    this._router.navigate(['Tasks']);
  }

}
