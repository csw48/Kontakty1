
const uzivatel = require('../Models/uzivatel.js');


var data = [
  {
    
     titul:""
    ,name:"Tlaková skúška PASS-3"
    ,pozicia:"Pass 3"
    ,klapka:290
    ,email:"testsk"
    ,PC: 0
    ,IP:"192.168.3.?"
    ,budova:"Pass 3"
  },

  {
     titul:""
    ,name:"Sklad Pass 3"
    ,pozicia:"Sklad"
    ,klapka:291
    ,email:""
    ,PC: 0
    ,IP:"192.168.3.26"
    ,budova:"Pass 3"
  },
  {
     titul:""
    ,name:"Dávid Karabin"
    ,pozicia:"IT"
    ,klapka:288
    ,email:"david.karabin@pass-sk.com"
    ,PC:53
    ,IP:"192.168.3.73"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Ľubomír Mihok"
    ,pozicia:"BOZP"
    ,klapka:214
    ,email:"lubomir.mihok@pass-sk.com"
    ,PC:24
    ,IP:"192.168.3.31"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Iveta Pavlovová"
    ,pozicia:"Ekonómka"
    ,klapka:201
    ,email:"iveta.pavlovova@pass-sk.com"
    ,PC:4
    ,IP:"192.168.3.32"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Anna Kubičarová"
    ,pozicia:"Ekonómka"
    ,klapka:207
    ,email:"anna.kubicarova@pass-sk.com"
    ,PC:30
    ,IP:"192.168.3.45"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Anna Cardoso"
    ,pozicia:"Ekonómka"
    ,klapka:215
    ,email:"anna.cardoso@pass-sk.com"
    ,PC:40
    ,IP:"192.168.3.71"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Alena Brnová"
    ,pozicia:"Ekonómka"
    ,klapka:204
    ,email:"alena.brnova@pass-sk.com"
    ,PC:34
    ,IP:"192.168.3.66"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Helena Gondová"
    ,pozicia:"Personálne"
    ,klapka:217
    ,email:"helena.gondova@pass-sk.com"
    ,PC:54
    ,IP:"192.168.3.40"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Marta Vojtillová"
    ,pozicia:"Personálne"
    ,klapka:216
    ,email:"marta.vojtillova@pass-sk.com"
    ,PC:14
    ,IP:"192.168.3.41"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Miroslava Pavúková"
    ,pozicia:"Personálne"
    ,klapka:213
    ,email:"miroslava.pavukova@pass-sk.com"
    ,PC:45
    ,IP:"192.168.3.59"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Andrea Grečková"
    ,pozicia:"Personálne"
    ,klapka:277
    ,email:"andrea.greckova@pass-sk.com"
    ,PC:15
    ,IP:"192.168.3.42"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Lívia Valenčíková"
    ,pozicia:"Personálne"
    ,klapka:211
    ,email:"livia.valencikova@pass-sk.com"
    ,PC:26
    ,IP:"192.168.3.53"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Silvia Petríková"
    ,pozicia:"Manažment"
    ,klapka:219
    ,email:"silvia.petrikova@pass-sk.com"
    ,PC:1
    ,IP:"192.168.3.25"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Tatiana Purdová"
    ,pozicia:"Majsterka"
    ,klapka:231
    ,email:"production.pa@pass-sk.com"
    ,PC:13
    ,IP:"192.168.3.64"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Emil Klešč"
    ,pozicia:"Manažment"
    ,klapka:209
    ,email:"emil.klesc@pass-sk.com"
    ,PC:34
    ,IP:"192.168.3.55"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Ľuboslava Lechmanová"
    ,pozicia:"Manažment"
    ,klapka:287
    ,email:"luboslava.lechmanova@pass-sk.com"
    ,PC:52
    ,IP:"192.168.3.74"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Peter Klein"
    ,pozicia:"Manažment"
    ,klapka:210
    ,email:"peter.klein@pass-sk.com"
    ,PC:29
    ,IP:"192.168.3.56"
    ,budova:"Pass 1"
  },
  {
     titul:"Mgr."
    ,name:"Slávka Kavuličová"
    ,pozicia:"Logistika"
    ,klapka:275
    ,email:"slavka.kavulicova@pass-sk.com"
    ,PC:41
    ,IP:"192.168.3.36"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Zuzana Filipová"
    ,pozicia:"Logistika"
    ,klapka:203
    ,email:"zuzana.filipova@pass-sk.com"
    ,PC:20
    ,IP:"192.168.3.47"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Katarína  Kračková"
    ,pozicia:"Logistika"
    ,klapka:208
    ,email:"katarina.krackova@pass-sk.com"
    ,PC:42
    ,IP:"192.168.3.34"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Alžbeta Krigovská"
    ,pozicia:"Logistika"
    ,klapka:278
    ,email:"alzbeta.krigovska@pass-sk.com"
    ,PC:22
    ,IP:"192.168.3.49"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:" Mirka Takáčová"
    ,pozicia:"Kvalita"
    ,klapka:202
    ,email:"miriam.takacova@pass-sk.com"
    ,PC:38
    ,IP:"192.168.3.67"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Magdaléna Hajžušová"
    ,pozicia:"Etikety"
    ,klapka:242
    ,email:"production2@pass-sk.com"
    ,PC:44
    ,IP:"192.168.3.54"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Ľuboslava Kleinova"
    ,pozicia:"Etikety"
    ,klapka:242
    ,email:"production2@pass-sk.com"
    ,PC:45
    ,IP:"192.168.3.54"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Eva Bujňáková"
    ,pozicia:"Majsterka"
    ,klapka:245
    ,email:"eva.bujnakova@pass-sk.com"
    ,PC:35
    ,IP:"192.168.3.61"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Vlasta Bašistová"
    ,pozicia:"Majsterka"
    ,klapka:245
    ,email:"production@pass-sk.com"
    ,PC:35
    ,IP:"192.168.3.61"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Erika Michlíková"
    ,pozicia:"Kvalita"
    ,klapka:230
    ,email:"erika.michlikova@pass-sk.com"
    ,PC:47
    ,IP:"192.168.3."
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Stanislav Pamula"
    ,pozicia:"Kvalita"
    ,klapka:220
    ,email:"stanislav.pamula@pass-sk.com"
    ,PC:25
    ,IP:"192.168.3.52"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Peter Biroščák"
    ,pozicia:"Kvalita"
    ,klapka:232
    ,email:"peter.biroscak@pass-sk.com"
    ,PC:31
    ,IP:"192.168.3.60"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Gabriela Gerda"
    ,pozicia:"Kvalita"
    ,klapka:220
    ,email:"gabriela.gerda@pass-sk.com"
    ,PC:37
    ,IP:"192.168.3.69"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Daniel Reznický"
    ,pozicia:"Kvalita"
    ,klapka:241
    ,email:"daniel.reznicky@pass-sk.com"
    ,PC:27
    ,IP:"192.168.3.37"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Milada Mianovská"
    ,pozicia:"Kvalita"
    ,klapka:232
    ,email:"milada.mianovska@pass-sk.com"
    ,PC:23
    ,IP:"192.168.3.50"
    ,budova:"Pass 1"
  },
  {
     titul:"Ing."
    ,name:"Renáta Kleščová"
    ,pozicia:"Manažment"
    ,klapka:206
    ,email:"renata.klescova@pass-sk.com"
    ,PC:"?"
    ,IP:"?"
    ,budova:"Pass 1"
  },
  {
     titul:""
    ,name:"Sklad Pass 1"
    ,pozicia:"Sklad"
    ,klapka:289
    ,email:""
    ,PC:0
    ,IP:""
    ,budova:"Pass 1"
  },
 {
     titul:""
    ,name:"Kvalita Pass 2"
    ,pozicia:"Kvalita"
    ,klapka:283
    ,email:""
    ,PC:33
    ,IP:"172.19.66.50"
    ,budova:"Pass 2"
  },
  {
     titul:""
    ,name:"Eva Gubašová"
    ,pozicia:"Majsterka"
    ,klapka:281
    ,email:"production@pass-sk.com"
    ,PC:41
    ,IP:"172.19.66.58"
    ,budova:"Pass 2"
  },
  {
     titul:""
    ,name:"Danka Užáková"
    ,pozicia:"Etikety"
    ,klapka:282
    ,email:"production2pass2@pass-sk.com"
    ,PC:43
    ,IP:"172.19.66.54"
    ,budova:"Pass 2"
  },
  {
     titul:""
    ,name:"Kancelária "
    ,pozicia:"Pass 2"
    ,klapka:280
    ,email:""
    ,PC:39
    ,IP:"172.19.69.51"
    ,budova:"Pass 2"
  },
  {
     titul:""
    ,name:"Sklad Pass 2"
    ,pozicia:"Sklad"
    ,klapka:285
    ,email:""
    ,PC:0
    ,IP:""
    ,budova:"Pass 2"
  }]


function seedDB(){
   //Remove all campgrounds
   uzivatel.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed zmena!");
         //add a few campgrounds
        data.forEach(function(seed){
            uzivatel.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added");

                }
            });
        });
    });
    //add a few comments
}


module.exports = seedDB;
