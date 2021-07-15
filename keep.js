//^https:\/\/api.gotokeep.com\/(account\/v2\/dashboard*|kprime\/(v1\/auth|v2\/home\/complete))
let [{body}, {url}] = [$response, $request],
    obj = JSON.parse(body);
if (url.indexOf("account/v2/dashboard") != -1) {
    obj["data"]["level"] = 5;
    obj["data"]["goal"] = 999;
    for (i = 0; i < obj["data"]["permissions"].length; i++) {
        obj["data"]["permissions"][i]["status"] = true;
        obj["data"]["permissions"][i]["kgLevel"] = 5;
    }
} else if (url.indexOf("kprime/v1/auth") != -1){
    obj["data"]["gmtCurrentTypeEffective"] = 4102243200000;
    obj["data"]["gmtPaidTypeExpire"] = 4102243200000;
    obj["data"]["gmtEffective"] = 4102243200000;
    obj["data"]["gmtPaidTypeEffective"] = 4102243200000;
    obj["data"]["gmtCurrentTypeExpire"] = 4102243200000;
    obj["data"]["gmtExpire"] = 4102243200000;
    obj["data"]["totalEffectiveDays"] = 9999;
    obj["data"]["currentEffectiveDays"] = 9999;
    obj["data"]["status"] = 1;
    obj["data"]["membershipType"] = "ANNUAL_CARD";
} else if (url.indexOf("kprime/v2/home/complete") != -1){
    obj["data"]["memberInfo"]["gmtExpire"] = 4102243200000;
    obj["data"]["memberInfo"]["status"] = 1;
}
body = JSON.stringify(obj);
$done({body});