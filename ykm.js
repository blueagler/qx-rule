//^https:\/\/mmykm\d.gdbs.gov.cn\/ebus\/minshengwxmp\/api\/r\/opc_process\/collection\/ykm(index\/(vac\/minify|nat)|details\/(vac|nat))
let [{ body }, { url }] = [$response, $request],
    json = JSON.parse(body);

const config = {
    name: "刘峻豪",
    vaccine_factory: "北京科兴中维",
    vaccine_name: "新冠疫苗（Vero细胞）",
    inoculation_unit: "香蜜湖社康中心",
    testing_facility: "深圳市罗湖医院集团医学检验实验室"
}

const getTestTime = (minus, showSecond) => `${(d => new Date(d.setDate(d.getDate() - minus)).toISOString().slice(0, 10))(new Date)} 23:59${showSecond ? ':59' : ''}`;

if (url.includes("ebus/minshengwxmp/api/r/opc_process/collection")) {
    switch (true) {
        case url.includes("ykmindex/vac/minify"):
            json.data.records = [
                {
                    date: "2022-01-01",
                    tag: "已完成全程接种",
                    needle_times: 3
                }
            ];
            break;
        case url.includes("ykmdetails/vac"):
            let newRecords = [];
            for (let i = 1; i <= 3; i++) {
                newRecords.push({
                    "接种时间": `2022-01-0${String(i)}`,
                    "是否完成接种": "是",
                    "申报时间": `2022-01-0${String(i)} 00:00:00`,
                    "厂家名称": json.data.records[0] ? json.data.records[0]["厂家名称"] : config.vaccine_factory,
                    "数据来源": "SZ",
                    "疫苗名称": json.data.records[0] ? json.data.records[0]["疫苗名称"] : config.vaccine_name,
                    "针次": String(i),
                    "接种单位": json.data.records[0] ? json.data.records[0]["接种单位"] : config.inoculation_unit,
                    "批号": "202111093L"
                })
            }
            json.data.records = newRecords;
            break;
        case url.includes("ykmindex/nat"):
            json.data.records = [
                {
                    "姓名": json.data.records[0] ? json.data.records[0]["姓名"] : config.name,
                    "检测结果": "阴性",
                    "申报时间": getTestTime(1, true),
                    "数据来源": "公安",
                    "检测类型": "核酸检测",
                    "采样日期": getTestTime(1, true),
                    "展示来源": "广东省卫生健康委员会",
                    "检测日期": getTestTime(1, true),
                    "显示时间": getTestTime(1, false),
                    "检测机构": json.data.records[0] ? json.data.records[0]["检测机构"] : config.testing_facility,
                }
            ]
            break;
        case url.includes("ykmdetails/nat"):

            let injectRecords = [];
            for (let i = 1; i <= 30; i++) {
                injectRecords.push({
                    "姓名": json.data.records[0] ? json.data.records[0]["姓名"] : config.name,
                    "检测结果": "阴性",
                    "申报时间": getTestTime(i, true),
                    "数据来源": "国办",
                    "检测类型": "核酸检测",
                    "采样日期": getTestTime(i, true),
                    "展示来源": "国家卫生健康委员会",
                    "检测日期": getTestTime(i, true),
                    "显示时间": getTestTime(i, false),
                    "检测机构": json.data.records[0] ? json.data.records[0]["检测机构"] : config.testing_facility,
                })
            }

            json.data.records = [
                ...injectRecords,
                ...json.data.records
            ];
    }
}

$done({ body: JSON.stringify(json) });