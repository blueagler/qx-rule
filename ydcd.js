//^https:\/\/dict.youdao.com\/vip\/user\/status?
let obj = JSON.parse($response.body);
obj = {
  ...obj,
  "expire": 1822386993000,
  "vip": true,
  "purchasedPlanIds": [
    "30"
  ]
}
$done({ body: JSON.stringify(obj) });