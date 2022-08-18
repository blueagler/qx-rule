//^https:\/\/pan.baidu.com\/rest\/2.0\/membership\/user

let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);

if (obj["product_infos"]) {
  obj["product_infos"] = obj["product_infos"].filter(item => item["product_name"] != "vip0");
  if (obj["product_infos"].findIndex(item => item["product_name"].includes("vip")) === -1) {
    obj["product_infos"].push({
      "product_name": "svip8_nd",
      "product_description": "超级会员",
      "function_num": 0,
      "start_time": 1553702399,
      "buy_description": "",
      "buy_time": 0,
      "product_id": "1",
      "auto_upgrade_to_svip": 0,
      "end_time": 1692502399,
      "cluster": "vip",
      "detail_cluster": "svip",
      "status": 0
    })
  }
}

body = JSON.stringify(obj);
$done({ body });