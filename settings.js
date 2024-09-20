const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxmWUw1MW1QMVAzOEdKcnBQaHpZUzFQMkFMUzFkdDBYRGtlTk51SVRVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVVRZmxVZTJCOVNOTzV6bWN2bTJvMmp4QnZQNkxvb0NjOVhBcGR4K1Vqdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUCtPR1N4R2NqUzV4bDc4MitFN0JOdHh2NkFUemh0ejJiK2RmNFF1SG1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQXVLRmZDU1U0aWh6VGo2eXl4U05CRGNKcmptRWJ1MGMzQS9TSHMyYjFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHUmR5WFFrZGFIWmxFS0drWnZ2QjNaTzBqKytDT3V5a2M4NlFYdmtWV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRYTTFVcmtuWmpiYUdlcHFlbzJnRVU5d3ZGNDNJMFBiUVhhOWpuWC9wWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEo3S3cxUWoyTkhYV2xmd2NBYktpc29YZUhjVFMvVjdubExPYlFRSnhIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVveWdFY04xUlV2bXJybmZ6NjlDTDIrNU8vd3kzdGk0SVMwcHdBZ01Hcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGNlZQM3JsaUszT2thL3FHQXZiRU9tWnBkd0hhOGQwSkxhRmZkT3lyWSs2ZC9tRUs2QWZmSnc0VE4wZmVqMUx0YnQxbjhJcm10VjcxQTlERFZGUmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJkZ25EenBxYUd5V3d2WGlHZ2xGSmQwZWd4bWloMENMeXZpbXNxN3NUczFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4NTAzMzM2MTU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNTUyRDZGOEIxRkM0RDZFMTA4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4NjkxNzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE4NTAzMzM2MTU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQTVDMTEwODlDMjE1QkFDQTc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4NjkxODB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9meVZMUEViVG5xRmpwZjdZNkFnTUEiLCJwaG9uZUlkIjoiZWQ0ZWM1NzAtMDY2Yi00OWIzLTkzOGEtMjZmMjBiMmMxNzY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQWWZqN25NMVFqL3VSLzMzNTdHYXdQQWdsST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0VU9IWG1iN3pQWFRpQmcxWDJEYVhLRC9ObDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEZXSDhaMVIiLCJtZSI6eyJpZCI6IjE4NTAzMzM2MTU0OjE3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYlRqdklQRUtYZHQ3Y0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwU25CZDlnSE1yeEtOdC95YWMvd2xRUXVCaWQ4d0lPdFNva0NZWEU4T2x3PSIsImFjY291bnRTaWduYXR1cmUiOiJYNXE1U0NteldHUy8zcFpWY2FrSktEOFRIQ3UvSVRUV3FKQnZVY2VtMkNXaGtTeU9iU3NkUUo5SUlMd0hZVE9rSWdWc040Y2dWU1RsN0NlMjAza3Zodz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVEkxNUNMbXlmQ1BpRmJXLzY5Y3pPQzZkTnFoYngrWG1aZ05tanBjZE9VSWFCRkY1SEdNVWcwQjNicG5MSUtQU0FFc1h0Y0VHVkpVODZzVjdJVlkyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODUwMzMzNjE1NDoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkRXB3WGZZQnpLOFNqYmY4bW5QOEpVRUxnWW5mTUNEclVxSkFtRnhQRHBjIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY4NjkxNjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUY5In0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_DELETE_TIME : process.env.BOT_DELETE_TIME || '7',
SECONDS_MINUTES_DAYS : process.env.SECONDS_MINUTES_DAYS || "days",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
