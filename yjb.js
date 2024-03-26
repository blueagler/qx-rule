//^https:\/\/app-api.yangjibao.com\/account

let [{ body }, { url }] = [$response, $request];

const handlers = [
    [
        /account/,
        (d) => {
            d.data.has_fund_hold = true;
            d.data.has_fund_option = true;
            d.data.is_pay = true;
            d.data.subscribe_status = 1;
            d.data.vip_expiry_date = "2099-01-01";
            d.data.vip_label = true;
            d.data.has_stock_hold = true;
            d.data.has_stock_option = true;
            d.data.show_bkxh = true;
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
