<h1 align="center">
  <br>
  <a><img src="https://telegra.ph/file/7ccde141eb2d927425fa9.png" alt="Hoichoi API" width="300"></a>
  <br>
  <br>
  <b>Unofficial Hoichoi API</b>
  <br>
</h1>

 <br>
 

## Features :
- This Repository is totally free
- Unlimited API calls
- Generate Unlimited Download & Streaming Link


## Api Endpoint:<br>
**You need exact movie or webseries's episode url**
 - For movie 👉 <tt>https://www.hoichoi.tv/movies/dugga-2020</tt>
- For series 👉 <tt>https://www.hoichoi.tv/webseries/damayanti-s01-e03</tt>

**Request**

 `http://[Your-App-Url]/?url=[Hoichoi-Url]`

*Ex.*

 `https://localhost:8080/?url=https://www.hoichoi.tv/movies/dugga-2020`

**Response**

```json
{
  "status": true,
  "title": "Dugga",
  "description": "Goddess Durga defeated the demons, but can Dugga - our protagonist, overpower the demons within her mind? Watch the full movie on Hoichoi.\n",
  "category": "Drama",
  "image": "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/11/5/1604598395769_1280x720_16x9Images.jpg",
  "download": [
    {
      "codec": "H264",
      "renditionValue": "_270p",
      "url": "https://hoichoimp4ns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/1604595730352_dugga_hoichoi_270.mp4?__token__=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/*~hmac=96c34561ed16177c914d203e4053a542052e25c2a561bc0a3e1cfa5dbfe5c61f"
    },
    {
      "codec": "H264",
      "renditionValue": "_360p",
      "url": "https://hoichoimp4ns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/1604595730352_dugga_hoichoi_360.mp4?__token__=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/*~hmac=96c34561ed16177c914d203e4053a542052e25c2a561bc0a3e1cfa5dbfe5c61f"
    },
    {
      "codec": "H264",
      "renditionValue": "_720p",
      "url": "https://hoichoimp4ns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/1604595730352_dugga_hoichoi_720.mp4?__token__=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/*~hmac=96c34561ed16177c914d203e4053a542052e25c2a561bc0a3e1cfa5dbfe5c61f"
    }
  ],
  "hls": "https://hoichoihlsns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/hls/1604595730352_dugga_hoichoi.m3u8?hdnts=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/hls/*~hmac=44fffc9626049487978953544c62393ee88ade0bc745c06810507b1b969788a2"
}
```


## Deploy :<br>
*Deployment is very simple, But you cannot deploy it on Heroku. Because if IP will changed it will recognized as a New Device. For that Device limit will reached and you will get error*

**Requirements :**
- A VPS (Minimum Specification, Fixed IP)
- A Hoichoi Account, Make sure no user will stream with this account.

**Start :**

- Clone this Repository

```
git clone https://github.com/viewlift-ripper/hoichoi-api.git
```

- Go to the Cloned Directory

```
cd hoichoi-api
```

- Open <code>settings.js</code> , enter your Hoichoi Credentials & save it

```
nano settings.js

crtl + o & enter to save
```

- Install Dependencies
```
npm install
```

- Start the Application
```
npm start
```

- Using Forever JS

```
npm install forever -g 
forever start main.js
```

**That's It, Now make some useful stuff from it.**

## Exception Handling :<br>

**You will get Error in these cases 👇**

1. If entered Invalid Url
2. If the email password are not working
3. If the content is DRM Protected
4. If Maximum Stream Limit reached (Because someone is watching content on Official Hoichoi Website or App)
5. If Maximum device Limit Reached
6. If Something unexpected will happened

*You will get <code>"status": false</code> with a Error Message in these cases*
