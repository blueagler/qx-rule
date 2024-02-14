//^https:\/\/(.*)-account\.wps\.com

let [{ body }, { url }] = [$response, $request];

const expireTime = 32536799999,
  vipEnabled = [
    { memberid: 40, name: "超级会员", expire_time: expireTime },
    { memberid: 20, name: "WPS会员", expire_time: expireTime },
    { memberid: 12, name: "稻壳会员", expire_time: expireTime },
  ],
  vipInfo = {
    name: "超级会员Pro",
    has_ad: 0,
    memberid: 40,
    expire_time: expireTime,
    enabled: vipEnabled,
  };

const handlers = [
  {
    regex: /api\/users/,
    type: "JSON",
    handler: (obj) => {
      obj.privilege = [
        { spid: "data_recover", times: 0, expire_time: 32536799999 },
        { spid: "ocr", times: 0, expire_time: 32536799999 },
        { spid: "pdf2doc", times: 0, expire_time: 32536799999 },
        { spid: "pdf_merge", times: 0, expire_time: 32536799999 },
        { spid: "pdf_sign", times: 0, expire_time: 32536799999 },
        { spid: "pdf_split", times: 0, expire_time: 32536799999 },
      ];
      obj.vip = vipInfo;
      return obj;
    },
  },
];

handlers.forEach((handler) => {
  if (handler.regex.test(url)) {
    if (handler.type === "JSON") {
      body = JSON.stringify(handler.handler(JSON.parse(body)));
    } else {
      body = handler.handler(body);
    }
  }
});

$done({ body });
