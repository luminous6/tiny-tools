import { typeOf } from './common';
import { debounce } from './util';

function log(e) {
  console.log(e);
}
window.addEventListener('resize', debounce(log, 500));
console.log(typeOf(true));
