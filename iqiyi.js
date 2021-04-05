//^https:\/\/passport.iqiyi.com\/apis\/user\/info.action*
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj["data"]["vip_list"][0]["longestDeadline"]["t"] = 99999999999999;
obj["data"]["vip_list"]["autoRenew"] = "1";
obj["data"]["vip_list"]["yearExpire"] = 0;
obj["data"]["vip_list"]["deadline"] = 99999999999999;
obj["data"]["vip_list"]["level"] = "999";
obj["data"]["vip_list"]["status"] = "1";
body = JSON.stringify(obj);
$done({ body });
