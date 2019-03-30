function convert() {
    var fromAmount = document.getElementById('fromAmt').value;
    console.log(fromAmount);
    var toAmount = document.getElementById('toAmt').value;
    var from = document.getElementById('fromCur').value;
    var to = document.getElementById('toCur').value;
    var XHR = new XMLHttpRequest();
    var code = from + "_" + to;
    var url = "https://free.currencyconverterapi.com/api/v6/convert?q=" + code + "&compact=ultra&apiKey=8a6ea31b37387bd5df83";
    XHR.open("GET", url, true);
    XHR.send();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var result = XHR.responseText;
            var jsResult = JSON.parse(result);
            var conversion = jsResult[code];
            //                                    console.log(conversion);
            var value = fromAmount * conversion;
            console.log(value);
            document.getElementById('toAmt').value = value;
        }
    }
}