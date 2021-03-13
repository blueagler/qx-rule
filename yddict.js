//^https:\/\/wow.youdao.com(\/user\/home*)

var body = $response.body;
var url = $request.url;

if (url.indexOf("/user/home") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["vip"]["status"] = true;
}
body = JSON.stringify(obj);
$done({ body });