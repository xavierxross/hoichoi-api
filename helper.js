const axios = require("axios");
const set = require("./settings")

async function data(path) {
    return await videoFetcher(await gistID(path))
};

async function gistID(path) {
    var gistconfig = {
        method: "get",
        url: "https://prod-api-cached-2.viewlift.com/content/pages?site=hoichoitv&includeContent=true&moduleOffset=0&moduleLimit=5&languageCode=default&countryCode=IN&path=" + path
    };
    return axios(gistconfig)
        .then(function(response) {
            return response.data.modules[1].contentData[0].gist.id
        })
        .catch(function(error) {
            return "not_found"
        });
}

async function videoFetcher(gist) {
    var tokenn = await token()
    if (tokenn == "token_err") {
        return "token_err"
    } else if (tokenn == "exce") {
        return "exce"
    } else if (gist == "not_found") {
        return "not_found"
    } else {
        var videoconfig = {
            method: "get",
            url: "https://prod-api.viewlift.com/entitlement/video/status?deviceType=web_browser&contentConsumption=web&id=" + gist,
            headers: { "Authorization": tokenn }
        };
        return axios(videoconfig)
            .then(function(respo) {
                var data = respo.data
                if (data.video.drmEnabled == true) {
                    return "drm"
                } else {
                    var video = ({
                        status: true,
                        title: data.video.gist.title,
                        description: data.video.gist.description,
                        category: data.video.gist.primaryCategory.title,
                        image: data.video.gist.videoImageUrl,
                        download: data.video.streamingInfo.videoAssets.mpeg,
                        hls: data.video.streamingInfo.videoAssets.hlsDetail.url
                    })
                    return video
                }
            })
            .catch(function(err) {
                if (err.response.status == 409 && err.response.data.errorCode == "MAX_STREAMS_ERROR") {
                    return "max"
                } else if (err.response.status == 500 && err.response.data.errorCode == "INTERNAL_ERROR") {
                    console.log(err)
                    return "serious"
                } else {
                    console.log(err)
                    return "other"
                }
            })
    }
}

async function token() {
    var tokenconfig = {
        method: "post",
        url: "https://prod-api.viewlift.com/identity/signin?site=hoichoitv&deviceId=hoi-choi-un-official-a-p-i-" + settings.randomString,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({ email: set.email, password: set.password })
    };
    return axios(tokenconfig)
        .then(function(res) {
            return res.data.authorizationToken
        })
        .catch(function(e) {
            if (e.response.status == 401 && e.response.data.code == "DEVICE_LIMIT_EXCEEDED") {
                return "exce"
            } else {
                return "token_err"
            }
        });
}

module.exports = {
    data
};
