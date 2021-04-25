//^https:\/\/www.xiaohongshu.com\/api\/sns\/v6/\message\/detect*
var body = $response.body;
var url = $request.url;

if (url.indexOf("www.xiaohongshu.com/api/sns/v6/message/detect") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["private_letter_count"] = 9999;
    obj["data"]["you"]["likes"] = 9999;
    obj["data"]["you"]["connections"] = 9999;
    obj["data"]["you"]["mentions"] = 9999;
    obj["data"]["sysNotification"]["count"] = 9999;
}
body = JSON.stringify(obj);
$done({ body });