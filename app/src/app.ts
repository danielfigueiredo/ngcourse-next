import 'reflect-metadata';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './components/app/app-component';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);