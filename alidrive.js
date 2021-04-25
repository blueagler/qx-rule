//^https:\/\/(api.aliyundrive.com\/v1\/invitationCode\/updateApplyBetaCapacity)
var body = $response.body;
var url = $request.url;

if (url.indexOf("api.aliyundrive.com/v1/invitationCode/updateApplyBetaCapacity") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["applyBeta"] = true;
}
body = JSON.stringify(obj);
$done({ body });