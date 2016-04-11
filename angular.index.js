require('./assets/styles/site.scss');

import Calculator from './src/calculator';

(function() {
  console.log('AngularJS');

  var calc = new Calculator();
  calc
    .add(1, 2)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => { console.log(err); });
}());