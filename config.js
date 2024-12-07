const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_25_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMixcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImp1aXhJQUJaLzFuR2YrTk84VndZNURqWEdiNndCQjZ5cHFXRlRKamdjOWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFQMHlSTzFJU1ZpYVhTNHhDcFRsUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWUyYjMyZDMtNDNlNi00YzExLWFiMjYtN2JlMTgwNTk3YjdiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDYyLFxuICAgICAgMjQsXG4gICAgICAzOCxcbiAgICAgIDIxNSxcbiAgICAgIDIyMixcbiAgICAgIDEyNixcbiAgICAgIDE4NyxcbiAgICAgIDYwLFxuICAgICAgMjQ3LFxuICAgICAgMTYyLFxuICAgICAgMjEzLFxuICAgICAgOTksXG4gICAgICAxMjUsXG4gICAgICAyNDQsXG4gICAgICAxNjUsXG4gICAgICA3LFxuICAgICAgNjQsXG4gICAgICAxODYsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICA1MSxcbiAgICAgIDMyLFxuICAgICAgMixcbiAgICAgIDE3MSxcbiAgICAgIDk5LFxuICAgICAgMTU5LFxuICAgICAgOTEsXG4gICAgICAxMzEsXG4gICAgICAyMCxcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDEzNixcbiAgICAgIDIyMixcbiAgICAgIDE3MixcbiAgICAgIDE2OCxcbiAgICAgIDIyLFxuICAgICAgMTM1LFxuICAgICAgMjQyLFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNGUjM4NFg5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2ODQ4MTMxNDM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNjM4Mzg1ODcwNDQ1NzoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNzJvdjhHRU0zenpib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhlSnVXNmtUL29iUGlWcC9yekQ1WlBxZWdMQUhUTFhWazFONTZSSi9XUzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRnRtNXVSeSszTmVncGNhZCt5REdKTjVlQUNlVC9keDNWd1dqdVk3ZVFNVWg5eVpFTmI1VlVZT3dMYVczNzlGSE00MHdVdmtkQitETTdpbXlwNnpaaWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTzMxTmppcVV1SFNjZDQ4Z2lySWwwZ1QrUDJlcklmaEJoajBiL1VEZWFxeTBySTZkV2hXVkY4eS82RHlOK25LS0RUVEo2VWZ6SVRmamFOOTJiandlQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjg0ODEzMTQzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1MjM5MjBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
