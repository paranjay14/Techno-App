/**
 * Created by root on 27/12/16.
 */


var screen;
var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
};

var onDeviceReady =  function() {
    receivedEvent('deviceready');
    screen = window.screen;
    screen.unlockOrientation();
    screen.lockOrientation('landscape');
};

var receivedEvent =  function(id) {

};

app();
