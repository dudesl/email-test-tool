var http = require('http');
var mailgun = require('mailgun-js')({
  apiKey: 'your-api-key',
  domain: 'domain-sanbox-mailgun'
});

var url = 'url-to-render';
var body = '';

var data = {
  from: 'sender-mail',
  // to: 'santiago.barchetta@mercadolibre.com',
  to: 'recipe-mail',
  subject: 'subject'
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
