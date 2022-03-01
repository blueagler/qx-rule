//^https:\/\/dida365.com\/api\/v2\/user\/status
let [{ body }, { url }] = [$response, $request],
    obj = JSON.parse(body);
if (url.indexOf("api/v2/user/status") != -1) {
    obj["pro"] = true;
    obj["needSubscribe"] = false;
}
body = JSON.stringify(obj);
$done({ body });