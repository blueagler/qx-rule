//^https:\/\/(dict|wow).youdao.com\/(vip\/user\/status|dictserver\/voiceGuide\/(userTry*|rank*)|user\/home*|mall\/user\/purchases*)
let [{ body }, { url }] = [$response, $request],
obj = JSON.parse(body);
if (url.indexOf("dict.youdao.com/vip/user/status") != -1) {
    obj["vip"] = true;
    obj["vip"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
} else if (url.indexOf("/dictserver/voiceGuide/userTry") != -1) {
    obj["data"]["getData"]["tryNum"] = 999999999999999;
}  else if (url.indexOf("/dictserver/voiceGuide/rank") != -1) {
    obj["data"]["rankInfo"]["user"]["vipinfo"]["vip"] = true;
    obj["data"]["rankInfo"]["user"]["vipinfo"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
}   else if (url.indexOf("wow.youdao.com/user/home") != -1) {
    obj["data"]["vip"]["status"] = true;
    obj["data"]["vip"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
}
else if (url.indexOf("dict.youdao.com/mall/user/purchases") != -1) {
    obj["data"]["vip"]["status"] = true;
    obj["data"]["vip"]["permissions"] = ["ONE_MONTH", "AUTO_SUBSCRIPTION"];
} 
body = JSON.stringify(obj);
$done({ body });