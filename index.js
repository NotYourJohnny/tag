const Discord = require("discord.js"),
  {Client} = Discord;

const client = new Client();

client.on("message", (message) => {
  // With mention
  message.reply("I am mentioning you!");

  // Without mention
  message.reply("I am not mentioning you!", {
    allowedMentions: {
      repliedUser: false
    }
  });

  // Using embeds
  message.reply({
    embed: {
      title: "This is a title"
    }
  });
});

client.login("OTM0NDYyNDI3ODE3NDYzODc4.Yewb9A.y_BUDMVLcRwllCuZwl9tPpMWo-s");