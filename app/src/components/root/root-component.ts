import {Component, StateConfig} from 'ng-forward';
import {MainComponent} from '../main/main-component';

@Component({
  selector: RootComponent.SELECTOR,
  template: `
    <div>
      <ngc-main>
        <main class="container mt4"><ng-outlet></ng-outlet></main>
      </ngc-main>
    </div>
  `,
  directives: [MainComponent]
})
export class RootComponent {

  static SELECTOR = 'root';

}
