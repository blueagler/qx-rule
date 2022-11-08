//^https:\/\/speak.api.yingpar.com\/user\/(.*)/info
let obj = JSON.parse($response.body);
obj["data"] = {
  ...obj["data"],
  "vipEndTime": 1692502399,
  "vipType": 1,
  "vipLevel": 1
}
$done({ body: JSON.stringify(obj) });