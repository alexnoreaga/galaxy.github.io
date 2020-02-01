var bulan = "Desember 2019"
var statusgaji = "Status : TRANSFER BERHASIL 01/02/2019"
var statusbonus = "Status : TRANSFER BERHASIL 15/01/2020"

document.getElementById("bulan").innerHTML = bulan;
document.getElementById("statusgaji").innerHTML = statusgaji;
document.getElementById("statusbonus").innerHTML = statusbonus;

function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.username.value == "arifinc" && form.password.value == "acen9999")
                 {
                    window.open("arifin.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "selvy" && form.password.value == "selvy1234")
                 {
                    window.open("selvy.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "rudyismawan" && form.password.value == "rudyrudy")
                 {
                    window.open("rudyrudy.html")/*opens the target page while Id & password matches*/
                }
               if(form.username.value == "tendryaciu" && form.password.value == "tendry123")
                 {
                    window.open("aciu.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "wiwinwin" && form.password.value == "winayahxyz")
                 {
                    window.open("wiwinwina.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "andikim" && form.password.value == "andikim789")
                 {
                    window.open("andiandi.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "andini" && form.password.value == "andini123")
                 {
                    window.open("andiniandiniandini.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "sianagustian" && form.password.value == "agusagus123")
                 {
                    window.open("sianagustian.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "saskiaayu" && form.password.value == "saskia999")
                 {
                    window.open("saskiasaskiasaskia.html")/*opens the target page while Id & password matches*/
                }
                if(form.username.value == "heriwong" && form.password.value == "heriabin")
                 {
                    window.open("heriwongwong.html")/*opens the target page while Id & password matches*/
                }

                 if(form.username.value == "lilisfitriani" && form.password.value == "liliswong")
                 {
                    window.open("lilis.html")/*opens the target page while Id & password matches*/
                }

                 if(form.username.value == "avidadwi" && form.password.value == "avida123")
                 {
                    window.open("avida.html")/*opens the target page while Id & password matches*/
                }

                 if(form.username.value == "alenghen" && form.password.value == "alenghen999")
                 {
                    window.open("aleng.html")/*opens the target page while Id & password matches*/
                }


                 if(form.username.value == "nakoda" && form.password.value == "nakoda456")
                 {
                    window.open("nakoda.html")/*opens the target page while Id & password matches*/
                }

                if(form.username.value == "bayusetiadi" && form.password.value == "bayu345")
                 {
                    window.open("bayu.html")/*opens the target page while Id & password matches*/
                }

                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }