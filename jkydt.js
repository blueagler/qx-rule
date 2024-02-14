//^https:\/\/(vipapi.ksedt.com\/(store\/(h5\/)?(batchCheckRights|checkRights)|rights\/checkRights)|op.ksedt.com\/jxedtLive\/h5\/topicDetail)

let [{ body }, { url }] = [$response, $request];

function modifyStoreRight(d) {
  d.beginTime = "1970-01-01";
  d.endTime = "2099-12-31";
  d.status = "2";
}

const handlers = [
  [
    /rights\/checkRights/,
    (d) => {
      for (const right of d.result.rights) {
        right.enable = "1";
      }
      return d;
    },
    1,
  ],
  [
    /store\/(h5\/)?checkRights/,
    (d) => {
      modifyStoreRight(d.result);
      return d;
    },
    1,
  ],
  [
    /store\/(h5\/)?batchCheckRights/,
    (d) => {
      for (const vipKey in d.result) {
        modifyStoreRight(d.result[vipKey]);
      }
      return d;
    },
    1,
  ],
  [
    /jxedtLive\/h5\/topicDetail/,
    (d) => {
      d.result.topicIntro.boughtState = "1";
      return d;
    },
    1,
  ],
];

for (const handler of handlers) {
  if (handler[0].test(url)) {
    body = !!handler[2]
      ? JSON.stringify(handler[1](JSON.parse(body)))
      : handler[1](body);
    break;
  }
}

$done({ body });
