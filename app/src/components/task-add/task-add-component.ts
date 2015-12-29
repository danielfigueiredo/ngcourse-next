import {Router} from 'angular2/router';
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators}
    from 'angular2/common';

@Component({
  selector: TaskAddComponent.SELECTOR,
  template: `
    <div class="sm-col-8 mx-auto border rounded">
      <div class="p2 gray bg-darken-1">
        <h4 class="m0 caps">Add Task</h4>
      </div>
      <form class="p2 bg-white"
          [ngFormModel]="addTaskForm"
          (submit)="addTask($event)">
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
        <button class="btn btn-primary"
                type="submit">
          Save
        </button>
        <button class="btn btn-primary bg-gray"
                (click)="cancel()">
          Cancel
        </button>
      </form>
    </div>
  `
})
export class TaskAddComponent {

  static SELECTOR = 'ngc-task-add';

  addTaskForm: ControlGroup;
  
  constructor(
      private _router: Router,
      formBuilder: FormBuilder
   ) {
    this.addTaskForm = formBuilder.group({
      owner: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  addTask($event) {
    $event.preventDefault();
    let task = {
      owner: this.addTaskForm.value.owner,
      description: this.addTaskForm.value.description
    };
    this._router.navigate(['Tasks']);
  }

  cancel($event) {
    $event.preventDefault();
    this._router.navigate(['Tasks']);
  }
}
