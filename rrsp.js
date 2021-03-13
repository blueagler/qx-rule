//^https:\/\/api.rr.tv(\/user\/profile*|\/drama\/app\/get_combined_drama_detail*|\/watch\/v4\/priority_video_quality\/get_priority_video_quality_config*)
var body = $response.body;
var url = $request.url;

if (url.indexOf("/user/profile") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["user"]["level"] = 30;
    obj["data"]["user"]["vipMedal"] = 1;
    obj["data"]["user"]["privilegeList"] = [{
		"action": "play",
		"effectObject": "video",
		"id": 1,
		"function": "originalPainting",
		"func": "originalPainting",
		"endTime": 1667341767582,
		"description": "解锁原画",
		"icon": "jiesuoyuanhua"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 4,
		"function": "noLimit",
		"func": "noLimit",
		"endTime": 1567341767582,
		"description": "看剧无限制",
		"icon": "kanjuwuxianzhi"
	}, {
		"action": "play",
		"effectObject": "growth",
		"id": 37,
		"function": "0.4",
		"func": "0.4",
		"endTime": 1667341767582,
		"description": "看剧经验+40%",
		"icon": "jingyanzhijiacheng"
	}, {
		"action": "send",
		"effectObject": "danmu",
		"id": 43,
		"function": "superBarrageBlue",
		"func": "superBarrageBlue",
		"endTime": 1667341767582,
		"description": "超级弹幕",
		"icon": "chaojidanmu"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 23,
		"function": "noAd",
		"func": "noAd",
		"endTime": 1667341767582,
		"description": "看剧无广告",
		"icon": "kanjuwuguanggao"
	}];
} else if (url.indexOf("/drama/app/get_combined_drama_detail") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["userVod"]["hasPrivilege"] = true;
    obj["data"]["dramaDetail"]["season"]["downloadBlock"] = false;
    obj["data"]["dramaDetail"]["season"]["feeMode"] = "restriction";
    for (i = 0; i < obj["data"]["sortedItems"].length; i++){
        obj["data"]["sortedItems"][i]["canPlay"] = true;
    }
    
} else if (url.indexOf("/watch/v4/priority_video_quality/get_priority_video_quality_config") != -1) {
    var obj = JSON.parse(body);
    for (i = 0; i < obj["data"]["sortedItems"].length; i++){
        obj["data"]["sortedItems"][i]["canPlay"] = true;
    }
}
body = JSON.stringify(obj);
$done({ body });