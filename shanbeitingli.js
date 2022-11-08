//^https:\/\/apiv3.shanbay.com\/listen\/user\/vip
const { body } = $response;
let obj = JSON.parse(body);
obj = {
  ...obj,
  "vip_expire_at": "2099-01-01",
  "is_vip": true,
  "vip_remain_days": 99999999,
  "vip_valid_at": "2099-01-01",
  "is_big_member": true,
  "big_member_expire_at": "2099-01-01"
}
body = JSON.stringify(obj);
$done({ body });