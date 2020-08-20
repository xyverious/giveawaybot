const ms = require("ms");

module.exports = {
   name: "giveaway",
   description: "Starts a giveaway",
   
   async run (client, message, args) {
      if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("You don't have permission to start a giveaway.");
      let channel = message.mentions.channels.first();
      if(!channel) return message.channel.send("Please provide or tag a channel");
      let giveawayDuration = args[1];
      if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("Please Input the Time/Duration of giveaways.")
      
      let giveawayWinners = args[2];
      if(isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send("Please provide the number of Winner.")
      
      let giveawayPrize = args.slice(3).join(" ");
      if(!giveawayPrize) return message.channel.send("Are you serious? no Prize for giveaway. Please provide the Prize !!");
      client.giveawaysManager.start(channel, {
         time: ms(giveawayDuration),
         prize: giveawayPrize,
         winnerCount: giveawayWinners,
         hostedBy: client.config.hostedBy ? message.author: null,
         
         messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+ "GIVEAWAY",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+ "GIVEAWAY ENDED",
            timeRemaning: "Time Remaning : **{duration}**",
            inviteToParticipate: "React with 🎉 to enter",
            winMessage: "Congrats **{winners}**, you won **{prize}**",
            embedFooter: "Giveaway Time!!!",
            noWinner: "Couldn't determined a Winners.",
            hostedBy: "Hosted by {user}",
            winners: "Winner(s)",
            endedAt: "Ends at",
            
            units: {
               seconds: "seconds",
               minutes: "minutes",
               hours: "hours",
               days: "days",
               pluralS: false
               
            }
            
         }
         
      })
      
      message.channel.send(`Giveaways Starting in ${channel}`);
   }
}