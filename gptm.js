//^https:\/\/ab.chatgpt.com\/v1\/initialize

let [{ body }, { url }] = [$response, $request];

const handlers = [
  [
    /v1\/initialize/,
    (d) => {
      for (const fg in d.feature_gates) {
        d.feature_gates[fg].value = true;
      }
      return d;
    },
    1,
  ]
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