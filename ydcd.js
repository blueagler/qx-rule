//^https:\/\/dict.youdao.com\/vip\/user\/status
let obj = JSON.parse($response.body);
obj = {
  ...obj,
  "svipExpire": 1722386993000,
  "svip": true,
  "expire": 1722386993000,
  "vip": true,
  "purchasedPlanIds": [
    "29"
  ],
  "copyWritings": [
    "Blueagle已破解会员"
  ]
}
$done({ body: JSON.stringify(obj) });