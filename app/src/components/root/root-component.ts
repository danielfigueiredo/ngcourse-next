import {Component, StateConfig} from 'ng-forward';
import {TaskActions} from "../../actions/task/task-actions";
import {TasksStore} from "../../stores/tasks/tasks-store";

@Component({
  selector: RootComponent.SELECTOR,
  template: `
    <div>
      <ngc-main>
        <main class="container mt4"><ng-outlet></ng-outlet></main>
      </ngc-main>
    </div>
  `
})
//@StateConfig([
//  { name: 'tasks', url: '/tasks', component: ''},
//  { name: '', url: '', component: ''},
//  { name: '', url: '', component: ''},
//  { name: '', url: '', component: ''},
//  { name: '', url: '', component: ''},
//  { name: '', url: '', component: ''}
//])
export class RootComponent {

  static SELECTOR = 'root';

}