// import { a, show } from './mobile.js';

// show(a, 20)

// import anything from './mobile.js';

// let p = new anything();
// p.show();

import * as documents from './mobile.js';

let show = documents.sum(documents.a, documents.b, documents.c);

console.log(show);