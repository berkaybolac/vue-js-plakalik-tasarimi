var express = require('express');
var cors = require('cors');

// use it before all route definitions

var app = express();

//app.use(cors({origin: 'http://localhost:8081'}));
app.use(express.json());
var nodemailer = require("nodemailer");
var transfer = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user:"example@gmail.com",
    pass:"password"
  }
})
/*app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});*/



/*app.use('/public',function(request, response, next) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  // Request headers you wish to allow
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Set to true if you need the website to include cookies in the requests sent
  response.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});*/
app.use(cors());
app.post('/', function(request, response){
  response.header("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Origin", "*");
  // Request headers you wish to allow
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Set to true if you need the website to include cookies in the requests sent
  response.setHeader('Access-Control-Allow-Credentials', true);
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
   var mailjson = {
    from:"yourmail@gmail.com",
    to:"yourmail@gmail.com",
    subject:"YENİ SİPARİŞ",
    html:`<h1>Contact details</h1>
      <h2> İsim Soy İsim:${request.body.isimsoyisim} </h2><br>
      <h2> Email:${request.body.email} </h2><br>
      <h2> Telefon Numarası:${request.body.telefon} </h2><br>
      <h2> İl: ${request.body.ilsecim} </h2><br>
      <h2> İlçe: ${request.body.ilce} </h2><br>
      <h2> Açık adres: ${request.body.adres} </h2><br>
      <h2> Plaka Yazısı: ${request.body.text} </h2><br>
      <h2> Plaka Yazısı Yerleşim Şekli: ${request.body.yerlesim} </h2><br>
      <h2> NOT: Paka yazısı yerleşim şekli ortada ise sol ikon ve sağ ikon gözükür. Sağda ise sol ikon gözükür, solda ise sağ ikon gözükür. 
      Eğer ikonlar boşsa, sipariş veren kişi sadece yazı yazmak istemiştir.
      </h2><br>
      <h2> Yazı Fontu:${request.body.fontFamily} </h2><br>
      <h2> Sol İkon:${request.body.solikon} </h2><br>
      <h2> Sağ İkon:${request.body.sagikon} </h2><br>
      `
    

   }
   transfer.sendMail(mailjson,function(error){
    if(error) console.log(error);
    else console.log("mail gönderildi")
    });
    
});



const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`listening on ${PORT}`));