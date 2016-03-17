import Rx from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';

Rx.Observable.ajax({
  type: 'GET',
  url: 'http://swapi.co/api/people/1',
  crossDomain: true
}).subscribe(data => {
  console.log(data);
  document.body.innerText = `typeof response: ${typeof data.response}, responseType: ${data.responseType}`;
});
