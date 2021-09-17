//^https:\/\/apiv3.shanbay.com\/(wordsapp\/(vip\/user_item\/status|walkman\/user_walkman)|abc\/applets\/user_applets)
let [{ body }, { url }] = [$response, $request],
obj = JSON.parse(body);
if (url.indexOf("wordsapp/vip/user_item/status") != -1) {
    obj["status"] = "IS_VIP";
} else if (url.indexOf("wordsapp/walkman/user_walkman") != -1) {
    obj["status"] = 1;
    obj["due_date"] = "Austin已破解";
}
else if (url.indexOf("abc/applets/user_applets") != -1) {
    for (i = 0; i < obj["objects"].length; i++){
        obj["objects"][i]["due_date"] = "Austin已破解";
        obj["objects"][i]["status"] = 1;
    }
}
body = JSON.stringify(obj);
$done({ body });