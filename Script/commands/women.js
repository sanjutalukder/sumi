const fs = require("fs");
module.exports.config = {
	name: "women",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "women",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Women")==0 || event.body.indexOf("women")==0 || event.body.indexOf("WOMEN")==0 || event.body.indexOf("☕")==0) {
		var msg = {
				body: "hahaha Women 🤣",
				attachment: fs.createReadStream(__dirname + `/https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
