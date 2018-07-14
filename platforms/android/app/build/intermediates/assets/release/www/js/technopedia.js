/**
 * Created by root on 16/1/17.
 */

var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("technopedia").addEventListener("click", openBrowser);

};

var onDeviceReady =  function() {
    receivedEvent('deviceready');
};

var receivedEvent =  function(id) {
};

function openBrowser() {
    var url = 'http://technothlon.techniche.org/technopediainfo';
    window.plugins.toast.show("Loading....", 3000 ,"bottom");
    var target = '_blank';
    var options = 'location=no';
    var ref = cordova.InAppBrowser.open(url, target, options);

    ref.addEventListener('loadstart', loadstartCallback);

    ref.addEventListener('loadstop', loadstopCallback);

    ref.addEventListener('loaderror', loaderrorCallback);

    ref.addEventListener('exit', exitCallback);


    function loadstartCallback(event) {

    }

    function loadstopCallback(event) {

    }

    function loaderrorCallback(error) {
        toast = window.plugins.toast;
        toast.show('Connect to internet first',3000 ,'bottom');
        // alert('Check internet connectivity or try after sometime.');
        ref.hide();
    }

    function exitCallback() {
        // alert('Browser is closed...');
    }
}

app();