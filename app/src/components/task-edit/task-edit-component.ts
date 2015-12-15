import {Component, View, Inject, OnDestroy} from 'angular2/core';
import {FORM_DIRECTIVES, NgIf} from 'angular2/common';
import {TaskActions} from '../../actions/task/task-actions';
import {RouterService} from '../../services/router/router-service';
import {TasksStore} from '../../stores/tasks/tasks-store';

@Component({
  selector: 'ngc-task-edit'
})
@View({template: ` 
    <div class="sm-col-8 mx-auto border rounded">
      <div class="p2 gray bg-darken-1">
        <h4 class="m0 caps">Edit Task</h4>
      </div>
      <form class="p2 bg-white">
        <label>Owner</label>
        <input class="block col-12 mb1 field"
          type="text"
          [(ngModel)]="task.owner">
        <label>Description</label>
        <input class="block col-12 mb2 field"
          type="text"
          [(ngModel)]="task.description">
        <button class="btn btn-primary"
          (click)="updateTask(task)">
          Update
        </button>
        <button class="btn btn-primary bg-gray"
          (click)="cancel()">
          Cancel
        </button>
      </form>
    </div>
    `,
    directives: [FORM_DIRECTIVES]
})
export class TaskEditComponent implements OnDestroy {

  private _task: any = {};
  private _errorMessage: String;
  private _tasksSubscription;
  private tasksActions;
  private router;

  static selector = 'ngcTaskEdit';

  constructor(
      @Inject('tasksActions') tasksActions: TaskActions,
      @Inject('tasksStore') tasksStore: TasksStore,
      @Inject('$stateParams') $stateParams: any,
      @Inject('router') router: RouterService
  ) {
    this.tasksActions = tasksActions;
    this.router = router;
    this._tasksSubscription =
        tasksStore.tasksSubject.subscribe(
            tasks =>
                this._task = tasksStore.getTaskById($stateParams._id),
            error => this._errorMessage = error);
  }

  ngOnDestroy(): any {
    console.log('I BEING DESTROYED HELP ME');
    this._tasksSubscription.dispose();
  }

  updateTask(task) {
    this.tasksActions.updateTask(task);
    this.router.goToTaskList();
  }

  cancel() {
    this.router.goToTaskList();
  }

  get task() {
    return this._task;
  }

  set task(task) {
    if (task) {
      this._task = task;
    }
  }

  get errorMessage() {
    return this._errorMessage;
  }
}
