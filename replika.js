//https:\/\/replika.ai\/api\/mobile\/1.5\/(payment_subscriptions|store\/login_reward|personal_bot)
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body),
  path = new URL(url).pathname;
switch (path) {
  case "/api/mobile/1.5/payment_subscriptions":
    obj["features"] = [
      ...new Set([
        ...obj["features"],
        { "name": "ar_calls" },
        { "name": "voice_message" },
        { "name": "backgrounds" },
        { "name": "send_photo" },
        { "name": "full_library_access" }
      ])
    ];
    obj["subscription"] = {
      "subscription_type": "IN_APP",
      "subscription_state": "FreeTrial",
      "source": "paypal",
      "expiration": 999999999,
      "created": 0,
      "price": {
        "amount": 1,
        "currency": "CNY"
      },
      "product_id": "a"
    };
    break;
  case "/api/mobile/1.5/store/login_reward":
    obj["has_subscription"] = true;
    break;
  case "/api/mobile/1.5/personal_bot":
    obj["unlocked_features"] = [
      ...new Set([
        ...obj["unlocked_features"],
        "ar_calls",
        "voice_message",
        "backgrounds",
        "send_photo",
        "full_library_access"
      ])
    ]
}
body = JSON.stringify(obj);
$done({ body });