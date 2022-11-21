//^https:\/\/dict.youdao.com\/vip\/user\/status
let obj = JSON.parse($response.body);
obj = {
  ...obj,
  "svipExpire": 1722386993000,
  "svip": true
}
$done({ body: JSON.stringify(obj) });