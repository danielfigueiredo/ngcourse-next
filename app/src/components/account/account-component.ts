/*
  Resolve annotation not working, so resolve method is done in RootComponent
 */

import {Component} from 'ng-forward';

@Component({
  selector: AccountComponent.SELECTOR,
  template: `
    My Account
  `
})
//@Inject('resolveTimeout')
export class AccountComponent {

  static SELECTOR = 'ngc-task';
  //
  //text: String;
  //
  //constructor(resolve) {
  //  this.text = resolve;
  //}

  //@Resolve()
  //static resolveTimeout() {
  //  return 'a';
  //}
}
