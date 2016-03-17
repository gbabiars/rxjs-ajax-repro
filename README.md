# rxjs-ajax-repro

This repo is to reproduce a bug in Rx.Observable.ajax on IE11 where the response data is string instaed of object for JSON responses.

`npm install`
`webpack -d`
`gulp server`

Hit `http://localhost/dist/index.html` on local machine to see this.  The document body will be appended with the actual type of the response and the responseType property.
