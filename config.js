
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RvaEFLeGlSWVBRWk1TSkh2dTVobEdSUWYwSUVoeHpadkVtSUlNRVQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXR2Q1gva3hhNGpjYU1OQUlTYW5JK3lqc3lER3dWbG1GYnFzMzJLT254VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSUdxTDFxSW8yb0FnN3l4ZkRSWHR0eHhOMzROTStxUEoxdjZ2QU1VWG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsaEVMM0xIdHJqcXpNRExkenFNKzBveGVPa2tKS1lJK1phbDhuT2ZOcURnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIL1pTdDA4Ritya0YyUGkxd3p5K05SNWpycys2WVJEWlRCSDNDLzV1SDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFK291V21iUDRJTis1TVd5RGdiZmJPQ0FPck1qZTNidTVmOEJEUFNYalk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFGWmUxQ1JYU3lxYXB1MGN3dHY4VHdNWTdBRHBwQkZGZ1FLdC9NVVNuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9PSnNUQ0hWRjdzMURiTysvU3hpRkdVQzVkcytaL0piUmlxaWg0YnNWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFSa1FLbUZrcVhNK1ZwU0tjVk1PV0FPNldjeGRtTjRFWDhsTklpTXpTYm85K3d0V2hrSHFWM1BOb3RsRUo1SFFyUEtkNnM0MVE2bDhmYjNxV1NWRWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6Inc2Vk5RZThpRXVNWXJNYXFWZUE1UjhrUGdocFA0aitUa0UwQmFmQ0xpSWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRld1p4cThHUlZ1MTU5cnJYb1l0LVEiLCJwaG9uZUlkIjoiMTlhNmJhNmYtNGQ0Yy00OGE0LTk5MzAtNjlhZDczNTJjNzBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im81Nys3ZDZkT0hMam9vTUpxQVNNSW0zL1Q2Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWT0I0eDRsTUVRSGtEV1hJR2JkRE5RNjM3cms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlcxTkRONE0iLCJtZSI6eyJpZCI6Ijk0NzY0ODEwOTA3OjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHTzc4SUdFSS9HdnJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdrdG5aTVpNTE9EZStFRDNHWEo4ZFJaelo3ajBMR1lRSFVLaklWUVg3VVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkUwNEI4L3VJMFhPREtuMlpyQ1VqTXoya0w2ckxxc2FJbjZ0T1o0V2pEZVZjRXY4bUtCZTNIbmZuZHZhWEE2WmRnVjBZU0tBSVZjMVJ6T0ZoVXNBU0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrVThmMllzK29pSnYrMExzbUlNT215WXVOWVlTb0JtYllTL0UrWnRBK1c5NCs3ZCt0Vnc4QjZ6RjhtZWFpTHEyeUdLaVRvVTJReFlyaEdrbTI3SFBqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY0ODEwOTA3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnBMWjJUR1RDemczdmhBOXhseWZIVVdjMmU0OUN4bUVCMUNveUZVRisxRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc4NjU4N30=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
