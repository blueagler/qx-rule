//^https:\/\license.pdfexpert.com\/api\/2.0\/pdfexpert6\/account\/state
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
obj["linkedProducts"] = [
  {
    "inAppStates": [
      {
        "entitlements": [
          "macos.pe.subscription.pdf-features"
        ],
        "state": "active",
        "expirationDate": "00:01 01/01/2099",
        "type": "yearly",
        "productId": "pdfexpert3-mac-yearly"
      }
    ],
    "statisticsInfo": {
      "events": [

      ]
    },
    "bundleId": "com.readdle.PDFExpert-Mac",
    "chargingPlatform": "Stripe"
  }
]
body = JSON.stringify(obj);
$done({ body });