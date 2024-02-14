//^https:\/\/vipapi.ksedt.com\/store\/batchCheckRights

let [{ body }, { url }] = [$response, $request];

const handlers = [
  {
    regex: /batchCheckRights/,
    type: "JSON",
    handler: (obj) => {
      for (const vipKey in obj.result) {
        obj.result[vipKey].beginTime = "1970-01-01";
        obj.result[vipKey].endTime = "2099-12-31";
        obj.result[vipKey].status = "0";
        obj.result[vipKey].level = 1;
      }
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
