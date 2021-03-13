//^http:\/\/m.ximalaya.com\/vip\/check\/user\/*
var body = $response.body;
var url = $request.url;

if (url.indexOf("=/vip/check/user/") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["isVip"] = true;
}
body = JSON.stringify(obj);
$done({ body });