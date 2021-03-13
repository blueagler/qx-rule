//^https:\/\/api.rr.tv(\/user\/profile*|\/drama\/app\/get_combined_drama_detail*)

var body = $response.body;
var url = $request.url;

if (url.indexOf("/user/profile") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["user"]["level"] = 30;
    obj["data"]["user"]["vipMedal"] = 1;
    obj["data"]["user"]["privilegeList"] = [1, 4, 37, 43, 23];
} else if (url.indexOf("/drama/app/get_combined_drama_detail") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["userVod"]["hasPrivilege"] = true;
    obj["data"]["dramaDetail"]["season"]["downloadBlock"] = false;
    obj["data"]["qualityConfig"]["sortedItems"] = [1, 4, 37, 43, 23];
    for (i = 0; i < obj["data"]["qualityConfig"]["sortedItems"].length; i++){
        obj["data"]["qualityConfig"]["sortedItems"][i]["canPlay"] = true;
    }
}
body = JSON.stringify(obj);
$done({ body });