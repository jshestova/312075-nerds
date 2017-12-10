        window.onload = function () {
            var sedona = document.getElementById('sedona');
            var sedonaHeader = document.getElementById("sedona-header");
            var sedonaInner = document.getElementById("sedona-inner");
            var pink = document.getElementById('pink');
            var pinkHeader = document.getElementById("pink-header");
            var pinkInner = document.getElementById("pink-inner");
            var barbershop = document.getElementById('barbershop');
            var barbershopHeader = document.getElementById("barbershop-header");
            var barbershopInner = document.getElementById("barbershop-inner");
            var mishka = document.getElementById('mishka');
            var mishkaHeader = document.getElementById("mishka-header");
            var mishkaInner = document.getElementById("mishka-inner");
            var aplus = document.getElementById('aplus');
            var aplusHeader = document.getElementById("aplus-header");
            var aplusInner = document.getElementById("aplus-inner");
            var kvast = document.getElementById('kvast');
            var kvastHeader = document.getElementById("kvast-header");
            var kvastInner = document.getElementById("kvast-inner");


            sedona.onmouseover = function (e) {
                document.getElementById('sedona-inner').style.display = 'flex';
                sedonaHeader.style.fill = "#e9e9e9";
            }

            sedona.onmouseout = function (e) {
                document.getElementById('sedona-inner').style.display = 'none';
                sedonaHeader.style.fill = "#4d4d4d";

            };

            pink.onmouseover = function (e) {
                document.getElementById('pink-inner').style.display = 'flex';
                pinkHeader.style.fill = "#e9e9e9";
            }

            pink.onmouseout = function (e) {
                document.getElementById('pink-inner').style.display = 'none';
                pinkHeader.style.fill = "#4d4d4d";

            };

            barbershop.onmouseover = function (e) {
                document.getElementById('barbershop-inner').style.display = 'flex';
                barbershopHeader.style.fill = "#e9e9e9";
            }

            barbershop.onmouseout = function (e) {
                document.getElementById('barbershop-inner').style.display = 'none';
                barbershopHeader.style.fill = "#4d4d4d";

            };

            mishka.onmouseover = function (e) {
                document.getElementById('mishka-inner').style.display = 'flex';
                mishkaHeader.style.fill = "#e9e9e9";
            }

            mishka.onmouseout = function (e) {
                document.getElementById('mishka-inner').style.display = 'none';
                mishkaHeader.style.fill = "#4d4d4d";

            };

            aplus.onmouseover = function (e) {
                document.getElementById('aplus-inner').style.display = 'flex';
                aplusHeader.style.fill = "#e9e9e9";
            }

            aplus.onmouseout = function (e) {
                document.getElementById('aplus-inner').style.display = 'none';
                aplusHeader.style.fill = "#4d4d4d";

            };

            kvast.onmouseover = function (e) {
                document.getElementById('kvast-inner').style.display = 'flex';
                kvastHeader.style.fill = "#e9e9e9";
            }

            kvast.onmouseout = function (e) {
                document.getElementById('kvast-inner').style.display = 'none';
                kvastHeader.style.fill = "#4d4d4d";
            };
        }
