//^https:\/\/desktop.parallels.com\/license\/api\/v1\/subscription(s|-items)
let
  [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
const table = [
  {
    regex: /subscriptions/,
    function() {
      obj["subscriptions"] = [
        {
          storeId: "cb",
          nextBillingCost: "0.00",
          canRenewOnline: false,
          lastBillingAt: "2022-01-01",
          isResumable: false,
          isUpgrading: false,
          duration: {
            value: 9999,
            units: "years"
          },
          isLimited: true,
          nextBillingCostCurrency: "JPY",
          uuid: "bca93f5c3fef49e3b9b00f6fa6f64d64",
          isGracePeriod: false,
          canAddLicense: true,
          universalKeys: [
            {
              used: 1,
              key: "6J93YP-8JMBHT-3N2PAJ-M4QXFG-AXRK8Q",
              is_blacklisted: false,
              vacant: 0,
              quota: 1
            }
          ],
          isSuspendable: true,
          isStarted: true,
          isExpired: false,
          gracePeriodEndsAt: "2023-06-30",
          mainPeriodEndsAt: "2023-06-23",
          isMovable: false,
          isAutorenewable: true,
          canUpgradeOnline: false,
          name: null,
          isActive: true,
          payment_options_url: "https://buy.parallels.com/329/scp/s47686727-8npmpkHQSQuIWeod",
          refNo: 1,
          isHidden: false,
          salesForce: {
            hasContract: false
          },
          licensedProducts: [
            {
              is_main_resource: true,
              productKeyName: "pdfm_pro",
              productName: "Parallels Desktop for Mac",
              licenses: {
                nextPeriod: 1,
                usage: 1,
                total_usage: 1,
                objectType: "host",
                total_available: 0,
                thisPeriod: 1,
                ratio: 1,
                modification: {
                  maxAmt: 5,
                  increment: 1,
                  minAmt: 1,
                  incrementCost: "9856.00",
                  wholePeriodCost: "14119.00"
                },
                total_dynamic_usage: 0,
                limit: 1,
                available: 0,
                total_reserved_usage: 0,
                reserved: 0
              },
              subsetAllowed: false,
              description: "Parallels Desktop for Mac Pro Edition",
              keyName: "pdfm_pro_by_subscription",
              is_primary_resource: true
            }
          ],
          nextBillingAt: "2023-06-23",
          isDowngrading: false,
          storeLastTransactionState: "payment_received",
          isSuspended: false,
          isLicenseManager: true,
          isBusiness: false,
          isSellOptionApplicable: false,
          activatedAt: "2022-06-23",
          storeProducts: [
            {
              details: {
                ext_key: "162413"
              },
              amount: 1
            }
          ],
          isPostPaid: false
        }
      ]
    }
  },
  {
    regex: /subscription-items/,
    function() {
      obj["items"] = [
        {
          hw_id: "f0a83caa2b6251198ea0c3b77b532960",
          is_upgrade: false,
          auto_renewable: true,
          is_sublicense: false,
          limit: 1,
          lic_edition: 2,
          created_date: "2022-06-23 08:33:38",
          lic_new_version: "*",
          product_name: "Parallels Desktop for Mac Standard Edition",
          lic_product: 7,
          expiration_date: "2023-06-23 08:31:21",
          lic_key: "6J93YP-8JMBHT-3N2PAJ-M4QXFG-AXRK8Q",
          expired: false,
          usage: 1,
          hw_id_list: [
            "f0a83caa2b6251198ea0c3b77b532960"
          ],
          product_id: 33,
          lic_version: 0,
          expiration_date_deferred: "2023-06-30 08:31:21",
          is_beta: false,
          is_upgrade_protected: false,
          lic_platform: 3,
          product_code: "pd_pro",
          subscription_uuid: "bca93f5c3fef49e3b9b00f6fa6f64d64"
        }
      ]
    }
  }
]
for (let i = 0; i < table.length; i++) {
  if (table[i].regex.test(url)) {
    table[i].function()
  }
}
body = JSON.stringify(obj);
$done({ body });
