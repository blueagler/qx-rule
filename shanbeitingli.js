//^https:\/\/apiv3.shanbay.com\/listen\/user\/vip
let obj = JSON.parse($response.body);
obj = {
  ...obj,
  "vip_expire_at": "2099-01-01",
  "is_vip": true,
  "vip_remain_days": 99999999,
  "vip_valid_at": "2099-01-01",
  "is_big_member": true,
  "big_member_expire_at": "2099-01-01"
}
$done({ body: JSON.stringify(obj) });