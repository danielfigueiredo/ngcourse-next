import {Component, StateConfig} from 'ng-forward';
import {MainComponent} from '../main/main-component';
import {TaskListComponent} from '../task-list/task-list-component';
import {TaskEditComponent} from '../task-edit/task-edit-component';
import {TaskAddComponent} from '../task-add/task-add-component';

@Component({
  selector: RootComponent.SELECTOR,
  template: `
    <div>
      <ngc-main>
        <main class="container mt4"><ng-outlet></ng-outlet></main>
      </ngc-main>
    </div>
  `,
  directives: [MainComponent],
  providers: ['ngcourse.router.config']
})
@StateConfig([
  { url: '/tasks', component: TaskListComponent, name: 'tasks' }
])
export class RootComponent {

  static SELECTOR = 'root';

}
