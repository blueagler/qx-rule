var e = require("./crypto");

module.exports = {
    CryptoJS: e,
    EncryptByKey: function (t, r) {
        var n = e.enc.Utf8.parse(t);
        return e.AES.encrypt(n, e.enc.Utf8.parse(r), {
            mode: e.mode.ECB,
            padding: e.pad.Pkcs7
        }).ciphertext.toString().toUpperCase();
    },
    EncryptByKeyUTF8: function (t, r) {
        var n = e.enc.Utf8.parse(t);
        return e.AES.encrypt(n, e.enc.Utf8.parse(r), {
            mode: e.mode.ECB,
            padding: e.pad.Pkcs7
        }).ciphertext.toString(e.enc.Base64);
    },
    DecryptByKey: function (t, r) {
        var n = e.enc.Hex.parse(t), p = e.enc.Base64.stringify(n);
        return e.AES.decrypt(p, e.enc.Utf8.parse(r), {
            mode: e.mode.ECB,
            padding: e.pad.Pkcs7
        }).toString(e.enc.Utf8).toString();
    },
    DecryptByKeyUTF8: function (z, t) {
        var r = e;
        return r.AES.decrypt(z, r.enc.Utf8.parse(t), {
            mode: r.mode.ECB,
            padding: r.pad.Pkcs7
        }).toString(r.enc.Utf8);
    }
};