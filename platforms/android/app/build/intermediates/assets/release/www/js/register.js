/**
 * Created by root on 16/1/17.
 */

/**
 * Created by ankit on 27/12/16.
 //  */
var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("register").addEventListener("click", openBrowser1);

};

var onDeviceReady =  function() {
    receivedEvent('deviceready');
};

var receivedEvent =  function(id) {
};

function openBrowser1() {
    var url = 'http://technothlon.techniche.org/register';
    var target = '_blank';
    var options = 'location=no';
    window.plugins.toast.show("Loading....",2000,'bottom');
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
        toast.show('Connect to internet first',2000 ,'bottom');
        // alert('Check internet connectivity or try after sometime.');
        ref.hide();
    }

    function exitCallback() {
        // alert('Browser is closed...');
    }
}

app();