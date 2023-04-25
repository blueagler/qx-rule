//^https:\/\/account\.wps\.cn\/api\/users

const $response = {
  body: `{"exp":0,"level":1,"privilege":[],"result":"ok","server_time":1682419211,"total_buy":0,"total_cost":0,"userid":470102475,"vip":{"name":"注册用户","has_ad":1,"memberid":10,"expire_time":1993459211,"enabled":[]},"wealth":0}`
}
const $request = {
  url: "https://account.wps.cn/api/users",
}

let [{ body }, { url }] = [$response, $request];

const handler = {
  "api\/users": obj => ({
    ...obj,
    privilege: [
      { spid: "data_recover", times: 0, expire_time: 32536799999 },
      { spid: "ocr", times: 0, expire_time: 32536799999 },
      { spid: "pdf2doc", times: 0, expire_time: 32536799999 },
      { spid: "pdf_merge", times: 0, expire_time: 32536799999 },
      { spid: "pdf_sign", times: 0, expire_time: 32536799999 },
      { spid: "pdf_split", times: 0, expire_time: 32536799999 }
    ],
    vip: {
      name: "超级会员Pro",
      has_ad: 0,
      memberid: 'vip_pro_plus',
      expire_time: 32536799999,
      enabled: [
        { memberid: 'vip_pro_plus', name: "超级会员Pro", expire_time: 32536799999 },
        { memberid: 40, name: "超级会员", expire_time: 32536799999 },
        { memberid: 20, name: "WPS会员", expire_time: 32536799999 },
        { memberid: 12, name: "稻壳会员", expire_time: 32536799999 },
        { memberid: 100, name: "企业用户", expire_time: 32536799999 },
        { memberid: 83, name: "小金库", expire_time: 32536799999 },
      ]
    }
  })
};
for (const p in handler) {
  if (new RegExp(p).test(url)) {
    body = JSON.stringify(handler[p](JSON.parse(body)));
    break;
  }
}

$done({ body });