//^https:\/\/api(.*).qupeiyin.com\/user\/member_data
let obj = JSON.parse($response.body);
obj['data'] = {
  ...obj['data'],
  "is_svip": "1",
  "svip_endtime": "1771442906",
}
$done({ body: JSON.stringify(obj) });