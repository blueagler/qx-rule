//^https:\/\/(dict|wow).youdao.com\/(vip\/user\/status|dictserver\/voiceGuide\/(userTry*|rank*)|\/user\/home*)
var body = $response.body;
var url = $request.url;

if (url.indexOf("dict.youdao.com/vip/user/status") != -1) {
    var obj = JSON.parse(body);
    obj["vip"] = true;
    obj["vip"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
} else if (url.indexOf("/dictserver/voiceGuide/userTry") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["getData"]["tryNum"] = 999999999999999;
}  else if (url.indexOf("/dictserver/voiceGuide/rank") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["rankInfo"]["user"]["vipinfo"]["vip"] = true;
    obj["data"]["rankInfo"]["user"]["vipinfo"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
}   else if (url.indexOf("wow.youdao.com/user/home") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["vip"]["status"] = true;
    obj["data"]["vip"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
} 
body = JSON.stringify(obj);
$done({ body });xxxx