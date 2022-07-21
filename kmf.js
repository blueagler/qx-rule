//^https:\/\/api.kmf.com\/(api-kplus\/users\/(self|all)|da\/da_new\/do?as=toeflios_launchscreen_full_FlashPic)
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
if (url.indexOf("api-kplus/users/all") != -1) {
  obj = {
    "status": 200,
    "message": "成功",
    "result": {
      "list": {
        "11758413": {
          "id": 39489,
          "level_id": 1,
          "avatar_pendant_id": 5,
          "apply_detail_id": 74882,
          "is_expire": false,
          "created_at": "2022-07-05 10:14:37",
          "start_time": "2022-07-05 10:14:37",
          "deleted_at": null,
          "updated_at": "2022-07-18 23:42:09",
          "end_time": "2099-01-01 23:59:59",
          "passport_id": 11758413,
          "site_id": 4,
          "score": 99,
          "avatar_pendant_url": "https://code.kmf.com/dist/new_toefl/css/img/pendant-images/manfen.png"
        },
      }
    }
  }
} else if (url.indexOf("api-kplus/users/self") != -1) {
  obj = {
    "status": 200,
    "message": "成功",
    "result": {
      "info": {
        "apply_detail": {
          "id": 74882,
          "answer_json": [
            2,
            8,
            15,
            28,
            29,
            114,
            99
          ],
          "new_tag": 1,
          "apply_time": "2022-02-28 20:10:50",
          "open_time": "2022-02-28 20:10:50",
          "answer": {
            "step_2": {
              "3": [
                {
                  "answer": "1",
                  "time": 1655813079
                }
              ],
              "1": [
                {
                  "answer": "2",
                  "time": 1655813079
                }
              ],
              "6": [
                {
                  "answer": "1",
                  "time": 1655813079
                },
                {
                  "answer": "2",
                  "time": 1655813079
                },
                {
                  "answer": "7",
                  "time": 1655813079
                }
              ],
              "4": [
                {
                  "answer": "1",
                  "time": 1655813079
                }
              ],
              "14": [
                {
                  "answer": "23",
                  "time": 1655813079
                }
              ]
            },
            "step_1": null,
            "step_5": null
          },
          "tmp_cc_pid": 11850508,
          "created_at": "2022-02-28 20:10:50",
          "deleted_at": null,
          "resource_page": 1,
          "step": 5,
          "updated_at": "2022-01-21 20:05:46",
          "kplus_user": {
            "id": 11758413,
            "passport_id": 11758413,
            "site_id": 4,
            "level_id": 1,
            "status": 1,
            "created_at": "2022-02-28 20:10:50",
            "end_time": "2099-06-21 20:05:46",
          },
          "end_time": "2099-06-21 20:05:46",
          "passport_id": 11758413,
          "site_id": 4,
          "from_type": 1
        }
      },
      "kplus_status": 1
    }
  }
} else if (url.indexOf("da/da_new/do?as=toeflios_launchscreen_full_FlashPic") != -1) {
  obj["result"] = {}
}
body = JSON.stringify(obj);
$done({ body });