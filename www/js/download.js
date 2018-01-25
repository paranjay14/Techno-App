var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);    
};

var count=-1 ;
var onDeviceReady =  function() {
var toast = window.plugins.toast;

    cordova.plugins.permissions.checkPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE,
        function(status){
            if(!status.hasPermission){
                cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE, function(success){console.log("YES");}, function(error){console.log("NO");});
                toast.show("Cannot Download. Permission Not Granted", 3000 ,"bottom");
            }
            else{
                console.log("Already Up To Date");
                            }
        });

    document.getElementById('dwnbtn').addEventListener('click', function () {
        
        

        if ($('#year').val() == '2017' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 3;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1PH4Ck8FZRD_JvL6L8kSsvTEwESxi7LML&export=download", "Previous Years' Papers/2017-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?authuser=0&id=1PzjOeQA_JNoSFsK3RkaPdeIgyfnFfMca&export=download", "Previous Years' Papers/2017-EN-Hauts-Sol.pdf");
            download("https://drive.google.com/uc?authuser=0&id=18yZpjHUWjb2CV6fzmymVBmZrt6u_60ty&export=download", "Previous Years' Papers/2017-EN-Hauts-Ans.pdf");

        }
        else if ($('#year').val() == '2016' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 3;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFRHNUTG9aT3RTMmM", "Previous Years' Papers/2016-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFd0JTQ28xM3VFX1E", "Previous Years' Papers/2016-EN-Hauts-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFVV84SVpCcEpIZVU", "Previous Years' Papers/2016-EN-Hauts-Ans.pdf");
        } else if ($('#year').val() == '2015' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 3;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFbEdSbUpreEJBSjA", "Previous Years' Papers/2015-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFcC1wVi05NU5sVWc", "Previous Years' Papers/2015-EN-Hauts-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFOU9BdU52UEI2emc", "Previous Years' Papers/2015-EN-Hauts-Ans.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 2;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFWTdERkZEVXYyRjg", "Previous Years' Papers/2014-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFS3FoQWcyczV1ejg", "Previous Years' Papers/2014-EN-Hauts-Ans.pdf");

        } else if ($('#year').val() == '2013' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSVJ6bU4xUlh5S2M", "Previous Years' Papers/2013-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2012' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFbmpTaDJ0M09kcW8", "Previous Years' Papers/2012-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2011' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFZ0Z5dXdmRUNjdzg", "Previous Years' Papers/2011-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2010' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFNTE2THhxeS1vSDA", "Previous Years' Papers/2010-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2009' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFekNxclJGQ0RGbW8", "Previous Years' Papers/2009-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2008' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFUWEwOEFKd0JrYms", "Previous Years' Papers/2008-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2017' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 3;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1ccMNa0WrQceIsA6gAZuIF49r_LHKutxs&export=download", "Previous Years' Papers/2017-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?authuser=0&id=1cyaQ8M6_3MgvO9hMYar12Pn3cQsMUfcJ&export=download", "Previous Years' Papers/2017-EN-JUNIORS-Sol.pdf");
            download("https://drive.google.com/uc?authuser=0&id=1sz1MPjXeGr6w1BVcdtu9nyxc_CcCHqIv&export=download", "Previous Years' Papers/2017-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2016' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 3;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFOWRjZVlQWW41WWM", "Previous Years' Papers/2016-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFNEF3Z0pNdllaUVU", "Previous Years' Papers/2016-EN-JUNIORS-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdUszQk94UFZwNTA", "Previous Years' Papers/2016-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2015' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 3;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSHZKbFpzR3Rmc3c", "Previous Years' Papers/2015-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFUFZkZmNrWUhJTVU", "Previous Years' Papers/2015-EN-JUNIORS-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFY3RBZDg2QUl3b1k", "Previous Years' Papers/2015-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 2;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdWRGTmlvTjZsZ2s", "Previous Years' Papers/2014-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFVnhKWm5IRTdDbTA", "Previous Years' Papers/2014-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2013' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFQ0MwNk80N1ZZekE", "Previous Years' Papers/2013-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2012' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFN0hUZzRuM25ibGs", "Previous Years' Papers/2012-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2011' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            count = 1;
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSTJ0a3VldmlBYU0", "Previous Years' Papers/2011-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2010' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSFZLSFNCcHplbjQ", "Previous Years' Papers/2010-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2009' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSmNOQVdONngzRzg", "Previous Years' Papers/2009-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2008' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'ENGLISH') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdXpxcHVzMlllVnc", "Previous Years' Papers/2008-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2017' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1NotSywKfgumMl81-TRHEKCczNBSVBi8L&export=download", "Previous Years' Papers/2017-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2016' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdGNWOXdJamlaY0k", "Previous Years' Papers/2016-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2015' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSzI0LVpIR3FYTXM", "Previous Years' Papers/2015-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'HAUTS' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFR19zV0dsX2lGZTg", "Previous Years' Papers/2014-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2017' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1j6Z5l_oq703GdpIJTAxAbyceZY_lZzUV&export=download", "Previous Years' Papers/2017-HI-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2016' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFTF9fY2Naam9GUjg", "Previous Years' Papers/2016-HI-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2015' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFQUg2V0oxN01SUVE", "Previous Years' Papers/2015-HI-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'JUNIOR' && $('#language').val().toUpperCase() == 'HINDI') {
            count = 1;
            toast.show("Downloading " + count + " file(s) ...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFREhxWmE4UmNJNEE", "Previous Years' Papers/2014-HI-JUNIORS-Ques.pdf");

        }else{

            toast.show("Error. Give Correct Input.",2000,"bottom");

        }

    });
};
    
var receivedEvent =  function(id) {

};

var download = function (url, store) {
    if(!checkInternet()){
        toast.show("Cannot Download. No internet connection.", 3000 ,"bottom");
        return;
    }
    cordova.plugins.permissions.checkPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE,
        function(status){
            if(!status.hasPermission){
                cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE, function(success){console.log("YES");}, function(error){console.log("NO");});
                toast.show("Cannot Download. Permission Not Granted", 3000 ,"bottom");
            }
            else{
                console.log("Already Up To Date");
                            }
        });
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    var fileURL =  cordova.file.externalRootDirectory + "Technothlon/" + store;
    var pdfurl;
    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            pdfurl = entry.toURL();
            // toast.show(pdfurl);
            count--;

            toast.show("Download Finished", 2500 ,"bottom");
            
        },

        function(error) {
            if(!checkInternet()){
                toast.show("Cannot Download. No internet connection.", 3000 ,"bottom");
                
                }
            cordova.plugins.permissions.checkPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE, function(status){
            if(!status.hasPermission){
                cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE, function(success){console.log("YES");}, function(error){console.log("NO");});
                toast.show("Cannot Download. Permission Not Granted", 3000 ,"bottom");
            }
            else{
                console.log("Already Up To Date");
                toast.show("Cannot Download. No internet connection.", 3000 ,"bottom");
                            }
        });

            tryagain(url,store);
        },
        false,
        {
            headers: {

            }
        }
        );

};

var tryagain = function (url, store) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    var fileURL =  cordova.file.externalRootDirectory + "Technothlon/" + store;
    var pdfurl;
    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            pdfurl = entry.toURL();
            count--;
            toast.show("File Downloaded in SD Card", 2000, "bottom");

        },
                
        function(error) {
            count--;
            if(count == 0)
            {
                var toast= window.plugins.toast;
            cordova.plugins.permissions.checkPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE,
        function(status){
            if(!status.hasPermission){
            cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE, function(success){console.log("YES");}, function(error){console.log("NO");});
                toast.show("Cannot Download. Permission Not Granted", 3000 ,"bottom");
            }
            else{
                console.log("Already Up To Date");
                toast.show("Cannot Download. No internet connection.", 1000 ,"bottom");
                            }
        });
           


            }
        },
        false,
        {
            headers: {

            }
        }
        );

};

app();