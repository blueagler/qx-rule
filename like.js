//^https:\/\/(www.xiaohongshu.com\/api\/sns\/v6/\message\/detect*|api.weibo.cn\/2\/direct_messages\/user_list*)
var body = $response.body;
var url = $request.url;

if (url.indexOf("www.xiaohongshu.com/api/sns/v6/message/detect") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["private_letter_count"] = 9999;
    obj["data"]["you"]["likes"] = 9999;
    obj["data"]["you"]["connections"] = 9999;
    obj["data"]["you"]["mentions"] = 9999;
    obj["data"]["sysNotification"]["count"] = 9999;
} else if (url.indexOf("api.weibo.cn/2/direct_messages/user_list") != -1) {
    var obj = JSON.parse(body);
    for (i = 0; i < obj["user_list"].length; i++) {
        obj["user_list"][i]["unread_count"] = 9999;
    }
    obj["unread_count"]["ext_new"]["addfriends"]["count"] = 9999;
    obj["unread_count"]["ext_new"]["follower"]["count"] = 9999;
    obj["unread_count"]["ext_new"]["likeuser"]["count"] = 9999;
}
body = JSON.stringify(obj);
$done({ body });