//^https:\/\/api.kmf.com\/api-kplus\/users\/self
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body);
if (url.indexOf("api-kplus/users/self") != -1) {
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
          "kplus_user": null,
          "end_time": "2099-06-21 20:05:46",
          "passport_id": 11758413,
          "site_id": 4,
          "from_type": 1
        }
      },
      "kplus_status": 1
    }
  }
}
body = JSON.stringify(obj);
$done({ body });