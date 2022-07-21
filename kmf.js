//^https:\/\/api.kmf.com\/api-kplus\/users\/self
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
if (url.indexOf("api-kplus/users/self") != -1) {
  obj["result"]["kplus_status"] = 3;
}
body = JSON.stringify(obj);
$done({ body });