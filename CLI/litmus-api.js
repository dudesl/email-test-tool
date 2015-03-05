var Litmus = require('litmus-api');

var api = new Litmus({
  username: 'fernando.rois@mercadolibre.com',
  password: 'MELIfer01',
  url: 'https://litmus.com'
})

// api.getTest('19702396')
//     .then(function(data){
//       var response = data[0];
//
//       console.log("\n\n\n\n");
//       console.log("getTest");
//       console.log("+++++ RESPONSE +++++");
//       console.log(response);
//     })

/**
 * Recupera el resultado de la versión de un caso de prueba
 *
 * @param {String}  id del caso de prueba en litmus
 * @param {Integer} version del caso de prueba que queremos recuperar
 *
 */
api.getResults('19702396', 3)
    .then(
      function(data){
      // un json con el resultado de getResults
      var response = data [0];

      console.log("\n\n\n\n");
      console.log("getResults");
      console.log("+++++ RESPONSE +++++");
      console.log("href for test result in xml format: ");
      console.log(response.request.href);
    })
