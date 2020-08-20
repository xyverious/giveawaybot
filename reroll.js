const ms = require("ms");

module.exports = {
   name: "reroll",
   description: "Reroll Giveaway.",
   
   async run(client, message, args) {
      if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("You don't have permission to reroll giveaway.");
      if(!args[0]) return message.channel.send("No giveaway message ID provided.");
      
      let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
      
      if(!giveaway) return message.channel.send("Coulnd't find any Giveaways with that ID/name");
      
      client.giveawaysManager.reroll(giveaway.messageID)
      .then(() => {
         if(e.startsWith(`Giveaways with ID ${giveaway.messageID} is not ended`)){
            message.channel.send("This giveaways hasn't ended yet.")
         }else {
            console.error(e);
            message.channel.send("an error occured")
         }
      })
   }
   
}