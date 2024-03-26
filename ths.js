//^https:\/\/fund.10jqka.com.cn\/marketing\/user\/level\/query\/level

let [{ body }, { url }] = [$response, $request];

const handlers = [
    [
        /marketing\/user\/level\/query\/level/,
        (d) => {
            for (const right of ["qsqr01002", "jzbdgwtx", "jzbd01001", "jzbddwtx", "jzbd01002", "qsqr01001", "zjqr01001", "zjqr01002", "zcgz01001", "zcgz01002"]) {
                d.data.receivedInfo.rights[right] = d.data.levelInfo.rights[right] = {
                    renewal: "1",
                    rightsId: right,
                    preReceive: "0",
                    rightsTime: "365",
                    rightsSource: "2",
                    expireTime: "2099-01-01 00:00:00",
                    receiveTime: "1970-01-01 00:00:00",
                }
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
