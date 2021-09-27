//^https:\/\/apiv3.shanbay.com\/((wordsapp\/((walkman\/user_walkman)|(vip\/user_item\/status)))|(abc\/applets\/user_applets)|(wordsutils\/hot_sales)|(operation\/launch_screen\/((future_splashes)|(splash))))

let [{ body }, { url }] = [$response, $request],
obj = JSON.parse(body);
if (url.indexOf("wordsapp/vip/user_item/status") != -1) {
    obj["status"] = "WITHIN_PERIOD";
} else if (url.indexOf("wordsapp/walkman/user_walkman") != -1) {
    obj["status"] = 1;
    obj["buy_time"] = "2000-01-01T13:29:12.961143+00:00";
    obj["due_date"] = "Austin已破解";
}else if (url.indexOf("abc/applets/user_applets") != -1) {
    for (i = 0; i < obj["objects"].length;i++){
        obj["objects"][i]["auto_resume"] = true;
        obj["objects"][i]["buy_time"] = "2000-01-01T13:29:12.961143+00:00";
        obj["objects"][i]["due_reminded"] = false;
        obj["objects"][i]["due_date"] = "Austin已破解";
        obj["objects"][i]["status"] = "IN_USE";
    }
}else if (url.indexOf("wordsutils/hot_sales") != -1) {
    obj["objects"] = []
}else if (url.indexOf("operation/launch_screen/future_splashes") != -1) {
    obj["objects"] = []
}else if (url.indexOf("operation/launch_screen/splash") != -1) {
    obj = { "msg": "Not Found", "errors": {} };
}
body = JSON.stringify(obj);
$done({ body });