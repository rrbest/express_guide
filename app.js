var express = require('express');
var app = express();

var square = require('./square');
//var arkAPI = require('./node_modules/ark-api/src/account.js')

var request = require('request');
var options = require('./node_modules/ark-api/src/options.js');
var Api = require('./node_modules/ark-api/src/api.js');

var Account = {};
Account.getBalance = function(address, callback) {
  Api.get({
    url: options.url + '/api/accounts/getBalance',
    qs: {
      'address': address
    },
    json: true
  }, callback);
};



app.get('/', function (req, res){
	res.send('Hello World!' + 
		square.area(4) + 
		Account.getBalance("AT2k1MydfeAnuHchJc3Z2EgcQPQoH4s5om",
				  function(error, success, response) {
				    console.log(response);
				})
		);
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});
