import {Component} from 'ng-forward';
import {TaskActions} from "../../actions/task/task-actions";
import {TasksStore} from "../../stores/tasks/tasks-store";

@Component({
  selector: RootComponent.SELECTOR,
  template: `
    <div>
      <ngc-main>
        <main class="container mt4" ui-view></main>
      </ngc-main>
    </div>
  `
})
export class RootComponent {

  static SELECTOR = 'root';

}