//^https:\/\/apiv3.shanbay.com\/wordsapp\/(vip\/user_item\/status|walkman\/user_walkman)
let [{ body }, { url }] = [$response, $request],
obj = JSON.parse(body);
if (url.indexOf("wordsapp/vip/user_item/status") != -1) {
    obj["status"] = "IS_VIP";
} else if (url.indexOf("wordsapp/walkman/user_walkman") != -1) {
    obj["status"] = 1;
    obj["due-date"] = "2099-01-01";
}
body = JSON.stringify(obj);
$done({ body });