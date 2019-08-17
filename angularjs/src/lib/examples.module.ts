// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import { InputKitchenSink } from './directives/input/examples/kitchen-sink.component';
import { CheckboxKitchenSink } from './components/checkbox/examples/kitchen-sink.component';
import { RadioKitchenSink } from './components/radio/examples/kitchen-sink.component';

export const examples = angular
  .module('examples', [])
  .component(InputKitchenSink.selector, InputKitchenSink)
  .component(CheckboxKitchenSink.selector, CheckboxKitchenSink)
  .component(RadioKitchenSink.selector, RadioKitchenSink)
  .name;