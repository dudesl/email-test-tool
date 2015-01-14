var http = require('http');
var mailgun = require('mailgun-js')({
  apiKey: 'key-f1d1f5a41e5528beaeb63f35b6a7c80c',
  domain: 'sandboxd2cba16debb04c3a9d37570b82f0c884.mailgun.org'
});

var url = 'http://127.0.0.1:8080/checkout/emails/merchant_orders/90361536?render=true&force=true&locale=pt_BR';
var body = '';

var data = {
  from: 'Wrapper HTML <postmaster@sandboxd2cba16debb04c3a9d37570b82f0c884.mailgun.org>',
  // to: 'santiago.barchetta@mercadolibre.com',
  to: 'ea0a465@emailtests.com, barracuda@barracuda.emailtests.com, chkemltests@gapps.emailtests.com',
  subject: 'Mail de pago aprobado payer/collector'
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
