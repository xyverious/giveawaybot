const Discord = require("discord.js");
const client = new Client();
const { readdirSync } = require("fs");
const { token } = require("./config.json");
const config = require("./config.json");
client.config = config;

const { GiveawaysManager } = require("discord-giveaways");

client.giveawaysManager = new GiveawaysManager(client, {
   storage: "./giveaways.json",
   updateCountdownEvery: 5000,
   default: {
      botsCanWin: false,
      exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
      embedColor: "#FF0000",
      reaction: "🎉"
   }
});