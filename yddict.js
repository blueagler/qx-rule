//^https:\/\/(ke|wow).youdao.com(\/user\/home*|\/course3\/api\/content\/ios\/applepay*)
var body = $response.body;
var url = $request.url;

if (url.indexOf("/user/home") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["vip"]["status"] = true;
} else if (url.indexOf("/course3/api/content/ios/applepay") != -1) {
    var obj = JSON.parse(body);
    obj["data"][0] = "yddict.pro.course.valid";
} 
body = JSON.stringify(obj);
$done({ body });xxxx