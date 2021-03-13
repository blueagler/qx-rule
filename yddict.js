//^https:\/\/(ke|wow).youdao.com(\/user\/home*|\/course3\/api\/content\/ios\/applepay*)
https://ke.youdao.com/course3/api/content/ios/applepay?Mkt=AppStore&Mkt1st=AppStore&Pdt=mdict.ios&client=iPhoneDict&deviceid=0eb17d8b3327484d4f4ffd7ca4be23fb&imei=0eb17d8b3327484d4f4ffd7ca4be23fb&keyfrom=mdict.9.0.16.iphonepro&mid=9.0.16&model=iPhone&product=pro&vendor=iPhone&visitorMode=false
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