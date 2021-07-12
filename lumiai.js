//^https:\/\/app.lumiai.com\/api\/(iconfig\/app|ipay\/index)
let [{body}, {url}] = [$response, $request],
    obj = JSON.parse(body);
if (url.indexOf("iconfig/app") != -1) {
    obj["data"]["recharge_start_money"] = "1";
} else if (url.indexOf("ipay/index") != -1) {
    obj["data"]["fix_arr"] = [
        {
            "money": "1",
            "money_str": "1元"
        },
        {
            "money": "2",
            "money_str": "2元"
        },
        {
            "money": "10",
            "money_str": "10元"
        },
        {
            "money": "20",
            "money_str": "20元"
        },
        {
            "money": "30",
            "money_str": "30元"
        },
        {
            "money": "40",
            "money_str": "40元"
        },
        {
            "money": "50",
            "money_str": "50元"
        },
        {
            "money": "100",
            "money_str": "100元"
        }
    ];
    obj["data"]["init_money"] = "1";
}
body = JSON.stringify(obj);
$done({body});