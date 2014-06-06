var taxObject = document.getElementById("sacTax");
var oPriceObject = document.getElementById("oPrice");
var taxRateObject = document.getElementById("taxRate");
var totalObject = document.getElementById("totalPrice");
var usdcnyObject = document.getElementById("usdTocny");
var inRMBObject = document.getElementById("totalInRMB");
var olPriceObject = document.getElementById("olPrice");

function appendToPrice(keyvalue) {
    if (oPriceObject.value == "0") {
        oPriceObject.value = keyvalue;
    }
    else {
        oPriceObject.value = oPriceObject.value + keyvalue;
    }
    olPriceObject.value = (parseInt(oPriceObject.value) / 100).toFixed(2);
}

function calcFunc() {
    taxObject.value = (parseFloat(taxRateObject.value) * parseFloat(olPriceObject.value)).toFixed(2);
    totalObject.value = (parseFloat(olPriceObject.value) + parseFloat(taxObject.value)).toFixed(2);
    inRMBObject.value = (parseFloat(totalObject.value * usdcnyObject.value)).toFixed(2);
}
function resetFunc() {
    olPriceObject.value = "0";
    oPriceObject.value = "0";
    totalObject.value = "0";
    inRMBObject.value = "0";
    taxObject.value = "0";
}
function delFunc() {
    oPriceObject.value = oPriceObject.value.substr(0, oPriceObject.value.length - 1);
    olPriceObject.value = (parseInt(oPriceObject.value) / 100).toFixed(2);
    calcFunc();
    //var strLength = oPriceObject.value.length;
    //oPriceObject.value = oPriceObject.value.substring(0, strLength);
}
var gExchange = window.DOMParser("http://rate-exchange.appspot.com/currency?from=USD&to=CNY");
var yahooFinance = window.DOMParser("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDCNY%22)&env=store://datatables.org/alltableswithkeys");
