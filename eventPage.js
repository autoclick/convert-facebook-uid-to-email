/// <reference path="jquery.js" />
var lstResult = [], _status = 0;//completed
var liArray, threads = 1, countThreads = 0;
//Helper start
function focusOrCreateTab(url) {
    chrome.windows.getAll({ "populate": true }, function (windows) {
        var existing_tab = null;
        for (var i in windows) {
            var tabs = windows[i].tabs;
            for (var j in tabs) {
                var tab = tabs[j];
                if (tab.url.indexOf(url) == 0) {
                    existing_tab = tab;
                    break;
                }
            }
        }
        if (existing_tab) {
            chrome.tabs.update(existing_tab.id, { "selected": true });
        } else {
            chrome.tabs.create({ "url": url, "selected": true });
        }
    });
}
function ShowCount(_count) {
    chrome.browserAction.setBadgeText({ text: _count + '' });
    chrome.browserAction.setTitle({ title: _count + '' });
}

function SaveToLocal(_lstResult, _type) {


    $('body').find('[download]').remove();
    const MIME_TYPE = 'text/plain;charset=UTF-8';
    var bb = new Blob([_lstResult.join('\n')], { type: MIME_TYPE });
    var link = document.createElement("a");
    link.textContent = "Save as csv";
    link.download = "List_Facebook_" + _type + "_" + new Date().getTime() + '.csv';
    link.href = window.URL.createObjectURL(bb);

    //window.open(link); //debug only

    document.body.appendChild(link);

    if ($('body').find('[download]').length != 0) {
        link.click();
    }


}
//Listen messsage
function completedScrape() {
    alert('Convert complete');
    _status = 0;//complete
    chrome.browserAction.setBadgeText({ text: 'off' });
    if (lstResult) {
        var lstMail = [];
        var lstPhone = [];
        for (var i = 0; i < lstResult.length; i++) {
            if (lstResult[i].email) {
                lstMail[lstMail.length] = lstResult[i].email;
            }
            if (lstResult[i].phone) {
                lstPhone[lstPhone.length] = lstResult[i].phone;
            }
        }
        if (lstMail.length > 0) {
            SaveToLocal(lstMail, 'Email');
        }
        if (lstPhone.length > 0) {
            SaveToLocal(lstPhone, 'Phone');
        }
    }
}
//https://m.facebook.com/profile.php?v=info&id=100002917108835&nocollections=1
function nextScrape() {
    if (_status == -1) {//stop
        countThreads++;
        if (countThreads == threads) {
            completedScrape();
        }
    } else {
        var _length = liArray.length;
        if (_length > 0) {
            var nextuid = liArray.shift();
            runScrape(nextuid, (_length == 1));
        } else {
            countThreads++;
            //console.log('count:' + countThreads + '---total:' + threads);
            if (countThreads == threads) {
                completedScrape();
            }
        }

        //chrome.browserAction.setBadgeText({ text: _length + '' });
        ShowCount(_length);
    }
}
function runScrape(_id) {
    $.ajax({
        url: "https://m.facebook.com/profile.php?v=info&id=" + _id + "&nocollections=1",
        dataType: 'html'
    }).done(function (htmlnext) {
        var defaultEmail;
        var _doc = $(htmlnext);
        _doc.find('a[href^=mailto]').each(function () {
            defaultEmail = $(this).text();
            //if (!defaultEmail || defaultEmail.indexOf('@facebook.com') > 0) {
            //    defaultEmail = _email;
            //}
        });
        var defaultPhone;
        _doc.find('span[dir="ltr"]').each(function () {
            defaultPhone = $(this).text();
            if (!defaultEmail) {
                defaultEmail = $(this).parent().parent().siblings(0).text();
                if (defaultEmail) {
                    var lst = defaultEmail.match(/([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+)/gi);
                    if (lst) {
                        defaultEmail = lst[lst.length - 1];
                    } else {
                        lst = defaultEmail.match(/((\/|\/\/)[a-z0-9.]+[\s,]?)/gi);
                        if (lst) {
                            for (var i = 0; i < lst.length; i++) {
                                if (lst[i].indexOf('//') < 0) {
                                    defaultEmail = lst[i].match(/[a-z0-9.]+/gi)[0] + '@facebook.com';
                                }
                            }
                        } else {
                            defaultEmail = undefined;
                        }
                    }
                }
            }
        });
        if (!defaultEmail) {
            var lst = _doc.find('#contact-info').text();
            if (lst) {
                lst = lst.match(/((\/|\/\/)[a-z0-9.]+[\s,]?)/gi);
                if (lst) {
                    for (var i = 0; i < lst.length; i++) {
                        if (lst[i].indexOf('//') < 0) {
                            defaultEmail = lst[i].match(/[a-z0-9.]+/gi)[0] + '@facebook.com';

                        }
                    }

                } else {
                    defaultEmail = undefined;
                }
            }
        }
        if (defaultEmail || defaultPhone) {
            //defaultEmail = defaultEmail.replace('Ask@', '@');
            lstResult[lstResult.length] = { 'email': defaultEmail, 'phone': defaultPhone };
        }
        nextScrape();
    }).fail(function () {
        nextScrape();
    });
}

chrome.browserAction.onClicked.addListener(function () {
    if (_status == 1 && confirm('Do you want stop Convert ?')) {
        _status = -1;
    } else {
        focusOrCreateTab(chrome.extension.getURL('options.html'));
    }

});
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (_status == 0) {
            if (request._method == "scrape") {
                liArray = request.data;
                threads = request.threads || 1;
                lstResult = [];
                _status = 1;//running
                countThreads = 0;
                if (liArray) {
                    sendResponse();
                    var uid;
                    for (var i = 0; i < threads; i++) {
                        uid = liArray.shift();
                        if (uid) {
                            runScrape(uid);
                        } else {
                            threads = i;
                            break;
                        }
                    }
                } else {
                    alert('Null List UID');
                }

            }
        } else {
            sendResponse(true);
        }
    });
chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ "url": 'http://www.autoclick.us', "selected": true });
});