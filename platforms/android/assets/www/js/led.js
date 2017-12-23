/**
 * Created by root on 16/1/17.
 */

/**
 * Created by ankit on 27/12/16.
 //  */
var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
};

var onDeviceReady =  function() {
    receivedEvent('deviceready');
};

var receivedEvent =  function(id) {
};

function openBrowser() {
    var url = 'http://technothlon.techniche.org/technothlon2017/login';
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
        // alert('Loading error: ' + error.message);
    }

    function exitCallback() {
        // alert('Browser is closed...');
    }
}

app();