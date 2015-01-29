//Select File Popup

$('#btnClear').click(function () {
    location.reload();
});
document.getElementById('fileinputhandler').onchange = function (e) {
    handleFileUpload(e.target);
};
//Paste txt
$('#fileResult').change(function (e) {
    e.preventDefault();
    splitText($(this).val(), 20);
});
//Drag and drop
var obj = $("#dragandrophandler");
obj.on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
obj.on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
});
obj.on('drop', function (e) {

    //var input = e.originalEvent.dataTransfer;
    $(this).css('border', '2px dotted #0B85A1');
    e.preventDefault();
    handleFileUpload(e.originalEvent.dataTransfer);

});
//If the files are dropped outside the div, file is opened in the browser window. To avoid that we can prevent ‘drop’ event on document.
$(document).on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
});
$(document).on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    obj.css('border', '2px dotted #0B85A1');
});
$(document).on('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
});
//Read the file contents using HTML5 FormData() when the files are dropped.
function handleFileUpload(input) {
    var reader = new FileReader();
    reader.onload = function () {
        //splitText(reader.result);
        var txt = reader.result;
        $("#fileResult").val(txt);
        splitText(txt, 30);
    };
    reader.readAsText(input.files[0]);
}
function splitText(txt, maxid) {
    var liHtml = '';
    var liArray = [];
    if (txt.indexOf('","', 50) >= 0) {//is csv format
        if (maxid) {
            var lines = txt.split('\n', maxid + 1);
            if (lines.length > 2) {
                var _cols = '';
                for (var _key = 1; _key < lines.length; _key++) {
                    _cols = lines[_key].split('","', 1);
                    if (_cols[0].length > 5 && _cols[0].indexOf('undefined') < 0) {

                        liHtml += '<li>' + _cols[0].replace('"', '') + '</li>';
                    }
                }
                $('#formatList').append(liHtml.trim());
            }
        } else {
            var lines = txt.split('\n');
            if (lines.length > 2) {
                var _cols = '';
                for (var _key = 1; _key < lines.length; _key++) {
                    _cols = lines[_key].split('","', 1);
                    if (_cols[0].length > 5 && _cols[0].indexOf('undefined') < 0) {

                        liArray[liArray.length] = _cols[0].replace('"', '').trim();
                    }
                }
                return liArray;
            }
        }

    } else {
        if (maxid) {

            var lines = [];
            if (txt.indexOf(',', 50) >= 0) {
                lines = txt.split(',', maxid);
            }
            if (txt.indexOf(';', 50) >= 0) {
                lines = txt.split(';', maxid);
            } else {
                lines = txt.split('\n', maxid);
            }
            if (lines.length > 0) {
                for (var _key in lines) {
                    liHtml += '<li>' + lines[_key] + '</li>';
                }
                $('#formatList').append(liHtml.trim());
            }
        } else {
            var lines = txt.split('\n');
            if (lines.length > 0) {
                for (var _key in lines) {
                    liArray[liArray.length] = lines[_key].trim();
                }
                return liArray;
            }
        }

    }
    //txt = txt.substring(0, breakIndex);

}
//Runn
$('#btnStart').click(function () {
    //save list uid
    var svalue = $("#fileResult").val();
    if (svalue) {
        var liArray = splitText(svalue);
        if (liArray && liArray.length > 0) {
            //chrome.storage.local.set({ 'uids': liArray }, function (a, b, c) {
            var threads = $("#threads").val();
            //alert(threads);
            chrome.runtime.sendMessage({ _method: "scrape", data: liArray, 'threads': threads }, function (_error) {
                if (_error) {
                    alert('You can not convert now. Please stop current convert');
                }
                //window.top.close();
            });
            //});
        }
    } else {
        alert('list uid Empty');
    }
    //run background

    //window.top.close();
});