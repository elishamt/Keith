
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2ZKiSBT9l3zFaGUTy4iKGERQcBcol4l+SCGBxGSpzATFDv+9A6uqqx9memp4SnK599x7zrk/QF5ghmaoAcMfoKS4hhy1S96UCAzBqIoiREEHhJBDMATnmW+scT6QFMUaxErlmcw/p16ZeCS0J4TPpLkwvy1Csr88g3sHlNWJ4OAPAVV54JHGT50nWSqZNt2LxeXKj+K4u74V6dlcn/fLzOl1NdN+Bvc2IsQU57FZJihDFJIZatYQ06/Bl5aGI2Vymq5swvBoNPFXNDqm2j7ykGRt02CtXXEVHmor/hr83axfr0i4fTFs3tBI8E5F6SHLjY7MvGJrdJjuq7lsytrOfIPPcJyj0A5RzjFvvtx3bJZun23jdeq4F3FG/NVqZympE9cbL46utpmL3DrU6Xlqfw24kJmBrThTSeY9f8Pc6dGy5sTw1diU+GDn2vINOgf9tSsOfge+ph9aOf+fvvdNXivLTZHQY/emJuHG2WMnLs5i0MWiuczDblctqEBPu+Jr8H2tngwmymCT20UuiNXF0HNHEscbv6D94MSSsT040evueDl/woe8on9COa+u05eZuHIjR1GsTU/kx2RORpvVLOgK67GrlueDIZMC03opVLdduFIbJhGrDg6X+oBTl9+i2npx6tVyg/kk1rx4mcbPj4rOqLFDMBTvHUBRjBmnkOMif+z1lQ6AYe2igCL+aC9IYrLKlLmyQVwTFv5LdZ2cYSNlXVJkeK3GYvQaBT0RmpPLM+iAkhYBYgyFU8x4QZsFYgzGiIHh3987IEdX/kZcm04WOyDClHE/r0pSwPCD1Y9DGARFlXO3yQOjXSAKhr3PbcQ5zmPW9rHKIQ0SXCMjgZyBYQQJQ78qRBSFYMhphX651ijCtvGy6Rm+N1BBB2QPQnDYmlNVRFGSVFGT1KHU/4t9u7RhYVl+yxEHHZDD9jZYcFQRBDqAPJ5psvgk9hSxJ6pPYq992O7ffwFu44eIQ0wYGALDfoW37sIwl3OVB8pkopuxbsQ6+CzwQylvTFAy77GNJQ5I2KfOaBodcxjywq8jq18t9ME40epGk5V1pj//QxAwBHC5K26ymJynyvK0N+bWupC1YqMk83ghh8tdqe63gnrNxkLjn165DIWEiCzhm0M3e7nNwvpi0OplXOUuiq5djouGqIb+3GYLUY0D9HuycaLJXjQ9HgWJeprrTg4vjobIbD2CM9PeVk66PVgn2dMbh574xRtoB2Hq97YWH+9YFuRBwapl1oTMGFTCoj7KiTBO3jX88BB5n134oa6WuvY3wugxCt4p+k8q34C3iuvdO7/FeB8u/2LQEVTdp7k5CiNnj16bzVaWjlJ+gtZcviKa6mtdQdqgehLGagzu9+8dUBLIo4JmYAhYdoKgA2hRtfq186j4QyZD920zju22bAIZ1z894eEMMQ6zEgxFTVN7mqJK6tutNS3KKWRJK/GMiKnbCrzRy9LlkH9YDOjtZ0o5uP8EGTU/3H4HAAA=';
const dev = process.env.OWNER_NUMBER || '254112251725';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Elisha Mteule';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "Mteule";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/9zqj7g.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/elishamt/Keith.git";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "MR.PING-MD";
const botPackname = process.env.BOT_PACKNAME || "MR.PING-MD";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "mr.ping-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
