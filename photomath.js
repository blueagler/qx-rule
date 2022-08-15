//^https:\/\/lapi.photomath.net\/v4\/me

let [{ body }, { url }] = [$response, $request],
    obj = JSON.parse(body);

obj["content"]["scope"] = [
    ...obj["content"]["scope"],
    "free:solution",
    "paid:solution",
    "trial:solution",
    "mypedia:solution",
    "wip:basic"
];

obj["content"]["subscription"] = {
    "expiry": "2099-01-15T19:07:03.000Z",
    "orderId": "320000813070599",
    "autoRenewing": true,
    "productId": "com.microblink.PhotoMath.purchase.genius.one_year",
    "status": "active",
    "inGracePeriod": false,
    "packageName": "com.microblink.PhotoMath",
    "started": "1970-01-08T19:07:03.000Z"
};

body = JSON.stringify(obj);
$done({ body });