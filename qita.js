//^https:\/\/speak.api.yingpar.com\/user\/(.*)/info
const { body } = $response;
let obj = JSON.parse(body);
obj["data"] = {
  ...obj["data"],
  "vipEndTime": 1692502399,
  "vipType": 1,
  "vipLevel": 1
}
body = JSON.stringify(obj);
$done({ body });