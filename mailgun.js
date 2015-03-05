var http = require('http');
var mailgun = require('mailgun-js')({
  apiKey: 'key-f1d1f5a41e5528beaeb63f35b6a7c80c',
  domain: 'sandboxd2cba16debb04c3a9d37570b82f0c884.mailgun.org'
  // apiKey: 'key',
  // domain: 'sandbox'
});

var url = 'http://localhost:3000';
var body = '';

var data = {
  from: 'Mailgun Postmaster <postmaster@sandboxd2cba16debb04c3a9d37570b82f0c884.mailgun.org>',
  to: 'santiago.barchetta@mercadolibre.com, 80722a8@emailtests.com',
  subject: '[TEST BR] Muito em breve os seus compradores poderão pagar com 2 cartões de crédito'
}

http.get(url, function(res) {

  if (res.statusCode == '200') {

    res.on("data", function(chunk) {
      // recolecto el body del mail
      body += String(chunk);
    });

    res.on("end", function () {
      data.html = body;
      mailgun.messages().send(data, function (err, body) {})
    });

  } else {
    console.log('Status : ' + res.statusCode)
  }
})
