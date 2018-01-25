var pushNotification;
var storage;
var screen;
var count;
var fileTransfer;
var url;
var fileurl;
var iccount;
var tccount;
var toast;
var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var el = document.getElementById('technopedia');
    if(el) {
        el.addEventListener('click', openBrowser);
    }

};


var onDeviceReady =  function() {
    receivedEvent('deviceready');
    fileTransfer = new FileTransfer();
    toast = window.plugins.toast;
    pushNotification = window.plugins.pushNotification;
    storage = window.localStorage;
    screen = window.screen;
    screen.lockOrientation('portrait');


    if (storage.getItem('countSet') != 1) {
        storage.setItem('count', 0);
        storage.setItem('countSet', 1);
    }

    if (storage.getItem('icardcountSet') != 1) {
        storage.setItem('icardcount', 0);
        storage.setItem('icardcountSet', 1);
    }

    if (storage.getItem('tcardcountSet') != 1) {
        storage.setItem('tcardcount', 0);
        storage.setItem('tcardcountSet', 1);
    }


    count = storage.getItem('count');
    iccount = storage.getItem('icardcount');
    tccount = storage.getItem('tcardcount');

    pushNotification.register(
            successHandler,
            errorHandler,
            {
                "senderID": "651243666380",
                "ecb": "onNotification"
            });


};

var receivedEvent =  function(id) {
};

function errorHandler(error) {
    //alert('error = ' + error);
}

function successHandler(result) {
    //alert('result = ' + result);
}

function onNotification(e) {

    switch( e.event )
    {
        case 'registered':
            if ( e.regid.length > 0 )
            {
                var registerurl = "http://technoapp.techniche.org/push.php";

                $.ajax({
                    url: registerurl,
                    method: 'post',
                    data: {name: "User" , id : e.regid+""},
                    success: function(result) {
                        storage.setItem('regStatus', 1);

                    }
                });
            }
            break;

        case 'message':

            if ( e.foreground )
            {

            }
            else
            {
                if ( e.coldstart )
                {

                }
                else
                {

                }
            }

            // msgcnt will serve as the message type, defined as given below.
            // 1 -> Update 2->IMAGE_Card 3->Coup 4->Link 5->TEXT_Card
            // All will have title and message


            if(e.msgcnt == 1 )
            {
                // Update will have 'update' to be shown
                count = e.payload.ucount;
                storage.setItem("msg"+count, e.payload.updatemsg);
                storage.setItem('count',e.payload.ucount);
            }

            if(e.msgcnt == 2 )
            {
                // ImageCard will have an image_url and image_text text hidden(T/F) title description
                url = e.payload.imageurl;
                store = e.payload.imagetext;

                uri = encodeURI(url);
                fileURL =  "file:///storage/emulated/0/Technothlon/" + e.payload.type+ "/image/" + '.' + store;

                fileTransfer.download(
                        uri,
                        fileURL,
                        function(entry) {
                            iccount = e.payload.iccount;
                            text1 = '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__media"><img src="';
                            text2 = fileURL;
                            text3 = '" style="width: 100%; height: auto;"></div><div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text">';
                            text4 = e.payload.ictitle;
                            text5 = '</h2></div><div class="mdl-card__actions mdl-card--border"><p class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">';
                            text6 = e.payload.icdescrp;
                            text7 = '</p></div></div>';

                            text = text1 + text2 + text3 + text4 + text5 + text6 + text7;

                            storage.setItem('icard'+iccount, ''+ text);
                            storage.setItem('icardcount', iccount);

                        },
                        function(error) {
                            tryagain1(url,store);
                        },
                        false,
                        {
                            headers: {

                            }
                        }
                    );

                function tryagain1(url,store){
                    uri = encodeURI(url);
                    fileURL =  "file:///sdcard/Technothlon/" + e.payload.type+ "/image/" + '.' + store;

                    fileTransfer.download(
                        uri,
                        fileURL,
                        function(entry) {
                            iccount = e.payload.iccount;
                            text1 = '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__media"><img src="';
                            text2 = fileURL;
                            text3 = '" style="width: 100%; height: auto;"></div><div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text">';
                            text4 = e.payload.ictitle;
                            text5 = '</h2></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">';
                            text6 = e.payload.icdescrp;
                            text7 = '</a></div></div>';

                            text = text1 + text2 + text3 + text4 + text5 + text6 + text7;


                            storage.setItem('icard'+iccount, ''+text);
                            storage.setItem('icardcount', iccount);
                        },
                        function(error) {
                        },
                        false,
                        {
                            headers: {

                            }
                        }
                    );
                }

                }

            if(e.msgcnt == 3 )
            {
                // Coup will have id and image_url

                url = e.payload.imageurl;
                store = e.payload.imagetext;


                uri = encodeURI(url);
                fileURL =  "file:///storage/emulated/0/Technothlon/" + e.payload.type+ "/image/" + '.' + store;

                fileTransfer.download(
                    uri,
                    fileURL,
                    function(entry) {
                        storage = window.localStorage;
                        storage.setItem('coupImgUrl', fileURL);
                        storage.setItem('coupId',e.payload.id);
                        storage.setItem('coupSet',1);
                        // $('#tcoupimg').src(fileURL);
                        // $('#tcoupid').html(e.payload.tcoupid);
                    },
                    function(error) {
                        tryagain2(url,store);
                    },
                    false,
                    {
                        headers: {

                        }
                    }
                );

                function tryagain2(url,store){
                    var uri = encodeURI(url);
                    var fileURL =  "file:///sdcard/Technothlon/" + e.payload.type+ "/image/" + '.' + store;

                    fileTransfer.download(
                        uri,
                        fileURL,
                        function(entry) {
                            storage = window.localStorage;
                            storage.setItem('coupImgUrl', fileURL);
                            storage.setItem('coupId',e.payload.id);
                            storage.setItem('coupSet',1);
                        },
                        function(error) {
                        },
                        false,
                        {
                            headers: {

                            }
                        }
                    );
                }


            }

            if(e.msgcnt == 4 )
            {
                // Will have the link to the visiting page
                alert(e.payload.link);
                window.location.href = e.payload.link ;
            }

            if(e.msgcnt == 5 )
            {
                // TextCard will have an image_url and Text_text text hidden(T/F) title description

                tccount = e.payload.tccount;
                text1 = '<div class="demo-card-square mdl-card mdl-shadow--2dp" id="original"><div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text" style="margin-top: 0px;">'
                text2 = e.payload.ttitle;
                text3 ='</h2></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="more" href="'
                text4 = e.payload.tlink;
                text5 = '">';
                text6 = e.payload.tdescrp;
                text7 = '</a></div></div><br/>';

                        text = text1 + text2 + text3 + text4 + text5 + text6 + text7;

                        storage.setItem('tcard'+tccount, ''+ text);
                        storage.setItem('tcardcount', tccount);


            }

            if(e.msgcnt == 6 )
            {
                // None will have nothing except the title and message
            }

            break;

        case 'error':
            break;

        default:
            break;
    }
}

function openBrowser() {
    var url = 'http://technothlon.techniche.org/technopediainfo';
    var target = '_blank';
    var options = 'location=no';
    window.plugins.toast.show("Loading...",2000,"bottom");
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
        ref.hide();
    }

    function exitCallback() {
        // alert('Browser is closed...');
    }
}

var download = function (url, store) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    var fileURL =  "file:///storage/emulated/0/Technothlon/" + store;
    var pdfurl;
    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            pdfurl = entry.toURL();
            count--;
            alert("Files Downloaded in Internal Storage");

        },
        function(error) {
            tryagain(url,store);
        },
        false,
        {
            headers: {

            }
        }
    );

};

function checkInternet(){
    var networkState = navigator.connection.type;
    if(networkState == Connection.NONE){
        return 0;
    }
    return 1;
}

app();