//^https:\/\/vipapi.ksedt.com\/(store\/(batchCheckRights|checkRights)|rights\/checkRights)

let [{ body }, { url }] = [$response, $request];

function modifyRights(obj) {
  obj.beginTime = "1970-01-01";
  obj.endTime = "2099-12-31";
  obj.status = "2";
  obj.level = 1;
  return obj;
}

const handlers = [
  {
    regex: /store\/batchCheckRights/,
    type: "JSON",
    handler: (obj) => {
      for (const vipKey in obj.result) {
        obj.result[vipKey] = modifyRights(obj.result[vipKey]);
      }
      return obj;
    },
  },
  {
    regex: /store\/checkRights/,
    type: "JSON",
    handler: (obj) => {
      obj.result = modifyRights(obj.result);
      return obj;
    },
  },
  {
    regex: /rights\/checkRights/,
    type: "JSON",
    handler: (obj) => {
      obj.result.rights.forEach((right) => {
        right.enable = "1";
      });
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
