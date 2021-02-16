// const axios = require('axios')
//
// axios({
//   method: "GET",
//   url: 'https://doctorpets.tk:3002/appointment/getAllAppointment',
// })
//   .then((val) => {
//     console.log("dari then", val);
//   })
//   .catch((err) => {
//     console.log("dari catch", err);
//   })

////////////////////////////////////////////////////////////////////////////////

var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({

});
var config = {
  method: 'get',
  url: 'https://doctorpets.tk:3002/appointment/getAllAppointment',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
