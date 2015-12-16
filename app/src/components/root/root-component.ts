import {Component} from 'ng-forward';

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