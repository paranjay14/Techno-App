var app = function() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
};
var count=-1 ;
var onDeviceReady =  function() {
    var toast = window.plugins.toast;

    // document.getElementById('dwnbtn').addEventListener('click', function () {
    //     downLinks = {
    //         '2016HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFRHNUTG9aT3RTMmM", "2016-EN-Hauts-Ques.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFd0JTQ28xM3VFX1E", "2016-EN-Hauts-Sol.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFVV84SVpCcEpIZVU", "2016-EN-Hauts-Ans.pdf"],],
    //         '2015HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFbEdSbUpreEJBSjA", "2015-EN-Hauts-Ques.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFcC1wVi05NU5sVWc", "2015-EN-Hauts-Sol.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFOU9BdU52UEI2emc", "2015-EN-Hauts-Ans.pdf"],
    //         ],
    //         '2014HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFWTdERkZEVXYyRjg", "2014-EN-Hauts-Ques.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFS3FoQWcyczV1ejg", "2014-EN-Hauts-Ans.pdf"],],
    //         '2013HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSVJ6bU4xUlh5S2M", "2013-EN-Hauts-Ques.pdf"],],
    //         '2012HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFbmpTaDJ0M09kcW8", "2012-EN-Hauts-Ques.pdf"],
    //         ],
    //         '2011HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFZ0Z5dXdmRUNjdzg", "2011-EN-Hauts-Ques.pdf"],
    //         ],
    //         '2010HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFNTE2THhxeS1vSDA", "2010-EN-Hauts-Ques.pdf"],
    //         ],
    //         '2009HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFekNxclJGQ0RGbW8", "2009-EN-Hauts-Ques.pdf"],
    //         ],
    //         '2008HAUTSEnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFUWEwOEFKd0JrYms", "2008-EN-Hauts-Ques.pdf"],],
    //         '2016JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFOWRjZVlQWW41WWM", "2016-EN-JUNIORS-Ques.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFNEF3Z0pNdllaUVU", "2016-EN-JUNIORS-Sol.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdUszQk94UFZwNTA", "2016-EN-JUNIORS-Ans.pdf"],
    //         ],
    //         '2015JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSHZKbFpzR3Rmc3c", "2015-EN-JUNIORS-Ques.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFUFZkZmNrWUhJTVU", "2015-EN-JUNIORS-Sol.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFY3RBZDg2QUl3b1k", "2015-EN-JUNIORS-Ans.pdf"],],
    //         '2014JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdWRGTmlvTjZsZ2s", "2014-EN-JUNIORS-Ques.pdf"],
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFVnhKWm5IRTdDbTA", "2014-EN-JUNIORS-Ans.pdf"],
    //         ],
    //         '2013JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFQ0MwNk80N1ZZekE", "2013-EN-JUNIORS-Ques.pdf"],
    //         ],
    //         '2012JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFN0hUZzRuM25ibGs", "2012-EN-JUNIORS-Ques.pdf"],
    //         ],
    //         '2011JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSTJ0a3VldmlBYU0", "2011-EN-JUNIORS-Ques.pdf"],
    //         ],
    //         '2010JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSFZLSFNCcHplbjQ", "2010-EN-JUNIORS-Ques.pdf"],
    //         ],
    //         '2009JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSmNOQVdONngzRzg", "2009-EN-JUNIORS-Ques.pdf"],
    //         ],
    //         '2008JUNIOREnglish' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdXpxcHVzMlllVnc", "2008-EN-JUNIORS-Ques.pdf"],
    //         ],
    //         '2016HAUTSHindi' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdGNWOXdJamlaY0k", "2016-HI-HAUTS-Ques.pdf"],],
    //         '2015HAUTSHindi' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSzI0LVpIR3FYTXM", "2015-HI-HAUTS-Ques.pdf"],],
    //         '2016JUNIORHindi' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFTF9fY2Naam9GUjg", "2016-HI-JUNIORS-Ques.pdf"],],
    //         '2015JUNIORHindi' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFQUg2V0oxN01SUVE", "2015-HI-JUNIORS-Ques.pdf"],],
    //         '2014HAUTSHindi' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFR19zV0dsX2lGZTg", "2014-HI-HAUTS-Ques.pdf"],],
    //         '2014JUNIORHindi' : [
    //         ["https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFREhxWmE4UmNJNEE", "2014-HI-JUNIORS-Ques.pdf"],
    //         ],
    //     };

    //     downLinkIndex = $('#year').val()+ $('#category').val() + $('#language').val();
    //     links = downLinks[downLinkIndex];
    //     if(links!= undefined){
    //         count = links.length;
    //         toast.show("Downloading "+ count +" files...",1000,'bottom');
    //         for (var i = links.length - 1; i >= 0; i--) {
    //             download(links[i][0],links[i][1]);

    //         };
    //         toast.show("Download finished",1000,'bottom');
    //     }
    //     else{
    //         toast.show("Invalid Input, Please try again!",1000,'bottom');
    //     }

    // });

    document.getElementById('dwnbtn').addEventListener('click', function () {
        if ($('#year').val() == '2017' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 3;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1PH4Ck8FZRD_JvL6L8kSsvTEwESxi7LML&export=download", "2017-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?authuser=0&id=1PzjOeQA_JNoSFsK3RkaPdeIgyfnFfMca&export=download", "2017-EN-Hauts-Sol.pdf");
            download("https://drive.google.com/uc?authuser=0&id=18yZpjHUWjb2CV6fzmymVBmZrt6u_60ty&export=download", "2017-EN-Hauts-Ans.pdf");
        }
        else if ($('#year').val() == '2016' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 3;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFRHNUTG9aT3RTMmM", "2016-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFd0JTQ28xM3VFX1E", "2016-EN-Hauts-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFVV84SVpCcEpIZVU", "2016-EN-Hauts-Ans.pdf");
        } else if ($('#year').val() == '2015' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 3;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFbEdSbUpreEJBSjA", "2015-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFcC1wVi05NU5sVWc", "2015-EN-Hauts-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFOU9BdU52UEI2emc", "2015-EN-Hauts-Ans.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 2;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFWTdERkZEVXYyRjg", "2014-EN-Hauts-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFS3FoQWcyczV1ejg", "2014-EN-Hauts-Ans.pdf");

        } else if ($('#year').val() == '2013' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSVJ6bU4xUlh5S2M", "2013-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2012' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFbmpTaDJ0M09kcW8", "2012-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2011' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFZ0Z5dXdmRUNjdzg", "2011-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2010' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFNTE2THhxeS1vSDA", "2010-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2009' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFekNxclJGQ0RGbW8", "2009-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2008' && $('#category').val() == 'HAUTS' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFUWEwOEFKd0JrYms", "2008-EN-Hauts-Ques.pdf");

        } else if ($('#year').val() == '2017' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 3;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1ccMNa0WrQceIsA6gAZuIF49r_LHKutxs&export=download", "2017-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?authuser=0&id=1cyaQ8M6_3MgvO9hMYar12Pn3cQsMUfcJ&export=download", "2017-EN-JUNIORS-Sol.pdf");
            download("https://drive.google.com/uc?authuser=0&id=1sz1MPjXeGr6w1BVcdtu9nyxc_CcCHqIv&export=download", "2017-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2016' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 3;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFOWRjZVlQWW41WWM", "2016-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFNEF3Z0pNdllaUVU", "2016-EN-JUNIORS-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdUszQk94UFZwNTA", "2016-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2015' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 3;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSHZKbFpzR3Rmc3c", "2015-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFUFZkZmNrWUhJTVU", "2015-EN-JUNIORS-Sol.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFY3RBZDg2QUl3b1k", "2015-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 2;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdWRGTmlvTjZsZ2s", "2014-EN-JUNIORS-Ques.pdf");
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFVnhKWm5IRTdDbTA", "2014-EN-JUNIORS-Ans.pdf");

        } else if ($('#year').val() == '2013' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFQ0MwNk80N1ZZekE", "2013-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2012' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFN0hUZzRuM25ibGs", "2012-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2011' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            toast.show("Downloading...",1000,'bottom');
            count = 1;
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSTJ0a3VldmlBYU0", "2011-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2010' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSFZLSFNCcHplbjQ", "2010-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2009' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSmNOQVdONngzRzg", "2009-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2008' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'English') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdXpxcHVzMlllVnc", "2008-EN-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2017' && $('#category').val() == 'HAUTS' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1NotSywKfgumMl81-TRHEKCczNBSVBi8L&export=download", "2017-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2016' && $('#category').val() == 'HAUTS' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFdGNWOXdJamlaY0k", "2016-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2015' && $('#category').val() == 'HAUTS' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFSzI0LVpIR3FYTXM", "2015-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'HAUTS' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFR19zV0dsX2lGZTg", "2014-HI-HAUTS-Ques.pdf");

        } else if ($('#year').val() == '2017' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?authuser=0&id=1j6Z5l_oq703GdpIJTAxAbyceZY_lZzUV&export=download", "2017-HI-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2016' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFTF9fY2Naam9GUjg", "2016-HI-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2015' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFQUg2V0oxN01SUVE", "2015-HI-JUNIORS-Ques.pdf");

        } else if ($('#year').val() == '2014' && $('#category').val() == 'JUNIOR' && $('#language').val() == 'Hindi') {
            count = 1;
            toast.show("Downloading...",1000,'bottom');
            download("https://drive.google.com/uc?export=download&id=0B5-GsYZi9MQFREhxWmE4UmNJNEE", "2014-HI-JUNIORS-Ques.pdf");

        }else{
            toast.show("Error. Give Correct Input.");

        }

    });
};
    
var receivedEvent =  function(id) {

};

var download = function (url, store) {

var permissions = cordova.plugins.permissions

    permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE,
        function(status){
            if(!status.hasPermission){
                permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, function(success){console.log("YES");}, function(error){console.log("NO");});
                toast.show("Cannot Download. Permission Not Granted", 1000 ,"bottom");
            }
            else{
                console.log("Already Up To Date");
                toast.show("Cannot Download. No internet connection.", 1000 ,"bottom");
                            }
        });
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    var fileURL =  cordova.file.externalRootDirectory + "Technothlon/Previous Years' Papers/" + store;
    var pdfurl;
    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            pdfurl = entry.toURL();
            toast.show(pdfurl);
            count--;
            //alert("Files Downloaded in Internal Storage");

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

var tryagain = function (url, store) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    var fileURL =  cordova.file.externalRootDirectory + "Technothlon/Previous Years' Papers/" + store;
    var pdfurl;
    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            pdfurl = entry.toURL();
            count--;
            toast.show("File Downloaded in SD Card", 1000, "bottom");

        },
                
        function(error) {
            count--;
            if(count == 0)
            {
                var toast= window.plugins.toast;

                permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE,
        function(status){
            if(!status.hasPermission){
                permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, function(success){console.log("YES");}, function(error){console.log("NO");});
                toast.show("Cannot Download. Permission Not Granted", 1000 ,"bottom");
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