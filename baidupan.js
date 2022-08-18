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

if (obj["user_type"]) {
  obj["user_type"] = "svip";
}

if (obj["level_info"]) {
  obj["level_info"] = {
    "last_manual_collection_time": 0,
    "current_value": 1000,
    "history_value": 1000,
    "accumulated_uncollected_points": 1000,
    "daily_value": 1000,
    "accumulated_lost_points": 0,
    "current_max_points": 1000,
    "current_level": 8,
    "history_level": 8,
    "default_daily_value": 1000,
    "accumulated_day": 365
  }
}

if (obj["new_guide_data"]) {
  obj["new_guide_data"] = {
    "action_url": "",
    "title": "作者: Blueagle(Austin)",
    "title_action_url": "",
    "button": {
      "text": "去充值真正的会员",
      "action_url": "https://pan.baidu.com/wap/vip/user?from=myvip3#svip"
    },
    "sub_card_list": [
      {
        "content": "作者官网",
        "icon_url": "https://staticsns.cdn.bcebos.com/amis/2022-3/1646707879779/%E9%9D%9E%E4%BC%9A%E5%91%98-%E4%BC%9A%E5%91%98%E9%A2%91%E9%81%93.png",
        "action_url": "https://blueagle.top/"
      },
      {
        "content": "作者GitHub",
        "icon_url": "https://staticsns.cdn.bcebos.com/amis/2022-3/1646707926421/%E9%9D%9E%E4%BC%9A%E5%91%98-%E5%8A%A0%E9%80%9F%E5%8D%87%E7%BA%A7.png",
        "action_url": "https://github.com/blueagler"
      }
    ]
  }
}

if (obj["status_data"]) {
  obj["status_data"] = "已破解SVIP8"
}

if (obj["status_data_arr"]) {
  obj["status_data_arr"] = ["已破解SVIP8"]
}

body = JSON.stringify(obj);
$done({ body });