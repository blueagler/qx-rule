//^https:\/\/(api|nlp)\.writefull\.(com|ai)\/(ispremium|config)

let [{ body }, { url }] = [$response, $request];

const handler = {
  "ispremium": _ => ({
    isPaid: true,
    isPremium: true,
  }),
  "config": obj => ({
    ...obj,
    account: {
      ...obj.account,
      texgpt: {
        enabled: true,
      }
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