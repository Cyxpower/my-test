// 漫画的 key
var cartoonKey = {
    // grant_type： 必须参数，固定为client_credentials；
    // client_id： 必须参数，应用的API Key；
    // client_secret： 必须参数，应用的Secret Key；
    grant_type: "client_credentials",
    client_id: "6GOAQUfgecjSsi7X1wZwXww1",
    client_secret: "VBrptRQE5rZpvkP7H0vZXlhRCryHKaPf",
};

// 人脸的 key
let faceKey = {
    // grant_type： 必须参数，固定为client_credentials；
    // client_id： 必须参数，应用的API Key；
    // client_secret： 必须参数，应用的Secret Key；
    grant_type: "client_credentials",
    client_id: "Em6UrlkPK8lmi3K04wxJbXXT",
    client_secret: "F2IRATKfFV5BKBFBEMR7sWJ5qAhivVMP",
};

module.exports = {
    cartoonKey,
    faceKey,
};
