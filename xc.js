//^https:\/\/go.heytea.com\/api\/service-member\/(vip\/(member\/wechat\/getMemberCardInfo|member-exp\/account-info|member-card\/switch)|user\/member\/member-info)

let [{ body }, { url }] = [$response, $request];

const handlers = [
    [
        /api\/service-member\/vip\/member\/wechat\/getMemberCardInfo/,
        (d) => {
            d.data.showEntrance = true;
            return d;
        },
        1,
    ],
    [
        /api\/service-member\/vip\/member-exp\/account-info/,
        (d) => {
            d.data.isStar = true;
            return d;
        },
        1,
    ],
    [
        /api\/service-member\/vip\/member-card\/switch/,
        (d) => {
            d.data.memberCardSwitch = true;
            return d;
        },
        1,
    ],
    [
        /api\/service-member\/user\/member\/member-info/,
        (d) => {
            d.data.memberPremium.memberStatus = 1;
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
