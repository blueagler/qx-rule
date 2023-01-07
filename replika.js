//^https:\/\/replika.ai\/api\/mobile\/1.5\/payment_subscriptions
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body),
  path = new URL(url).pathname;
switch (path) {
  case "/api/mobile/1.5/payment_subscriptions":
    obj["features"] = [
      { "name": "ar_calls" },
      { "name": "voice_message" },
      { "name": "backgrounds" },
      { "name": "send_photo" },
    ];
    break;
}
body = JSON.stringify(obj);
$done({ body });