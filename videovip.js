//^https:\/\/(passport.iqiyi.com\/apis\/user\/info.action*|nuc.api.mgtv.com\/GetUserInfo*)
var body = $response.body;
var url = $request.url;
//爱奇艺
if (url.indexOf("passport.iqiyi.com") != -1) {
  var obj = JSON.parse(body);
  obj["data"]["vip_list"][0]["longestDeadline"]["t"] = 99999999999999;
  obj["data"]["vip_list"][0]["autoRenew"] = "1";
  obj["data"]["vip_list"][0]["yearExpire"] = 0;
  obj["data"]["vip_list"][0]["deadline"]["t"] = 99999999999999;
  obj["data"]["vip_list"][0]["level"] = "999";
  obj["data"]["vip_list"][0]["status"] = "1";
} else if (url.indexOf("nuc.api.mgtv.com") != -1) {
  var obj = JSON.parse(body);
  obj["data"]["vipinfo"]["isvip"] = 1;
  obj["data"]["vipinfo"]["type"] = "2";
  obj["data"]["vipinfo"]["vip_end_time"] = "Forever";
  obj["data"]["vipinfo"]["growth"]["score"] = 999999999999;
  obj["data"]["vipinfo"]["growth"]["level"] = 999999999999;
}
$done({ body });
