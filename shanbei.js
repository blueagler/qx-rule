//^https:\/\/apiv3.shanbay.com\/((wordsapp\/((walkman\/user_walkman)|(vip\/user_item\/status)))|(abc\/applets\/user_applets)|(wordsutils\/hot_sales)|(operation\/launch_screen\/((future_splashes)|(splash))))

let [{ body }, { url }] = [$response, $request],
obj = JSON.parse(body);
if (url.indexOf("wordsapp/vip/user_item/status") != -1) {
    obj["status"] = "WITHIN_PERIOD";
} else if (url.indexOf("wordsapp/walkman/user_walkman") != -1) {
    obj = {
        "status" : 1,
        "id" : "wyjwp",
        "buy_time" : "2000-01-01T13:29:12.961143+00:00",
        "user_id" : true,
        "due_date" : "Austin已破解"
      }
      
}else if (url.indexOf("abc/applets/user_applets") != -1) {
    obj = {
        "objects" : [
          {
            "code_name" : "roots",
            "auto_resume" : true,
            "buy_time" : "2000-01-01T13:29:12.961143+00:00",
            "due_date" : "Austin已破解",
            "due_reminded" : false,
            "id" : "rosvic",
            "applet_id" : "bbohes",
            "price_policy_id" : "bsjlni",
            "status" : "IN_USE",
            "user_id" : true,
            "applet_name" : "智慧词根"
          },
          {
            "code_name" : "affixes",
            "auto_resume" : true,
            "buy_time" : "2000-01-01T13:29:12.961143+00:00",
            "due_date" : "Austin已破解",
            "due_reminded" : false,
            "id" : "rphbvz",
            "applet_id" : "burubg",
            "price_policy_id" : "avmhu",
            "status" : "IN_USE",
            "user_id" : true,
            "applet_name" : "派生联想"
          },
          {
            "code_name" : "collins",
            "auto_resume" : true,
            "buy_time" : "2000-01-01T13:29:12.961143+00:00",
            "due_date" : "Austin已破解",
            "due_reminded" : false,
            "id" : "bafiksxuiuan",
            "applet_id" : "juuxc",
            "price_policy_id" : "tmyjl",
            "status" : "IN_USE",
            "user_id" : true,
            "applet_name" : "柯林斯词典"
          }
        ]
      }
      
}else if (url.indexOf("wordsutils/hot_sales") != -1) {
    obj["objects"] = []
}else if (url.indexOf("operation/launch_screen/future_splashes") != -1) {
    obj["objects"] = []
}else if (url.indexOf("operation/launch_screen/splash") != -1) {
    obj = { "msg": "Not Found", "errors": {} };
}
body = JSON.stringify(obj);
$done({ body });