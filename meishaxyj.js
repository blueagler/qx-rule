//^https:\/\/www.fnyxy.cn\/xcxInterface\/xcxapi\/(getAccByAccID|getDevParaByMac|getaccbywxidNew)
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
if (url.indexOf("getAccByAccID") != -1) {
  obj["moneyg"] = obj["moneyr"] = 9999;
} else if (url.indexOf("getDevParaByMac") != -1) {
  obj["listmoney"] = obj["listvalue1"] = obj["listvalue"] = "0,0,0,0"
} else if (url.indexOf("getaccbywxidNew") != -1) {
  obj["accmoneyr"] = obj["accmoneyg"] = 9999;
}

body = JSON.stringify(obj);
$done({ body });