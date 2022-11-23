//^https:\/\/dict.youdao.com\/vip\/user\/status?
let obj = JSON.parse($response.body);
obj = {
  ...obj,
  "expire": 1822386993000,
  "vip": true,
  "purchasedPlanIds": [
    "32"
  ],
  "copyWritings": [
    "Blueagle已破解会员"
  ]
}
$done({ body: JSON.stringify(obj) });