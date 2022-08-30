//^https:\/\/www.fnyxy.cn\/xcxInterface\/xcxapi\/(getAccByAccID|getDevParaByMac|getaccbywxidNew)
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
if (url.indexOf("getAccByAccID") != -1) {
  obj["moneyg"] = obj["moneyr"] = 9999999999;
} else if (url.indexOf("getDevParaByMac") != -1) {
  // obj["listmoney"] = obj["listvalue1"] = obj["listvalue"] = "0.5,0.5,0.5,0.5"
} else if (url.indexOf("getaccbywxidNew") != -1) {
  obj["accmoneyr"] = obj["accmoneyg"] = 9999999999;
}

body = JSON.stringify(obj);
$done({ body });