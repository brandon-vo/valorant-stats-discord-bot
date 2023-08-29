const { MessageEmbed } = require('discord.js');

const noAccountEmbed = new MessageEmbed()
  .setColor('#d1390f')
  .setThumbnail(
    'https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png'
  )
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields({
    name: 'Error Status',
    value:
      '```ansi\n\u001b[2;31m\n' +
      'Please connect your VALORANT account to your \nDiscord ID using /link to view player statistics.' +
      '\n\nExample: /link ValoStats#NA1\n```',
    inline: true,
  });

const maintenanceEmbed = new MessageEmbed()
  .setColor('#d1390f')
  .setThumbnail(
    'https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png'
  )
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields({
    name: 'Maintenance Status',
    value:
      '```ansi\n\u001b[2;31m\n' +
      'ValoStats currently has issues in retrieving stats.' +
      ' Please try again later.' +
      '\n```',
    inline: true,
  });

const errorEmbed = new MessageEmbed()
  .setColor('#d1390f')
  .setThumbnail(
    'https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png'
  )
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields({
    name: 'Error Status',
    value:
      '```ansi\n\u001b[2;31m\n' +
      'Please ensure the account you are trying to view has' +
      " logged into tracker.gg/valorant!\n\nExample:\n1. Click 'Sign in with Riot ID'\n2. /command-to-use USERNAME#TAG\n\n" +
      'Note: Linked Discord accounts do not need to provide a USERNAME#TAG.\n```',
    inline: true,
  });

// TODO: Not able to be used anymore. Grouped with errorEmbed
const noStatsEmbed = new MessageEmbed()
  .setColor('#d1390f')
  .setThumbnail(
    'https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png'
  )
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields({
    name: 'Error Status',
    value:
      '```ansi\n\u001b[2;31m\n' +
      'This user does not have statistics to retrieve for this gamemode.' +
      '\n```',
    inline: true,
  });

const useSlashEmbed = new MessageEmbed()
  .setColor('RANDOM')
  .setAuthor({ name: 'IMPORTANT READ ME' })
  .addFields({
    name: ':warning: Please use slash commands from now on',
    value:
      "ValoStats has undergone a major update. The bot will no longer use the prefix command '**v!**'. " +
      'All commands have now migrated to slash commands. Type **/help** for a list of commands.\n\n' +
      'Why was this change implemented? As of **April 2022**, prefix commands will unfortunately be removed from all bots.' +
      ' [See Here.](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots)\n\n' +
      'If you cannot see slash commands on this server, please ask the admininstrator to reinvite the bot using [this link. ](https://discord.com/api/oauth2/authorize?client_id=833535533287866398&permissions=431644736576&scope=bot%20applications.commands)' +
      '\nThe bot **does not** need to be kicked. Only **readded!**\n\n' +
      'Any issues? Join the test server and alert **@CMDRVo** for assistance. Thank you! <:jett:839142770576851006>',
    inline: true,
  })
  .setImage(
    'https://cdn.discordapp.com/attachments/834195818080108564/954932610780520468/thanks.jpg'
  );

const helpEmbed = new MessageEmbed()
  .setColor('#6c71c4')
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields(
    {
      name: '\u200B',
      value:
        '```ansi\n\u001b[0;45m' +
        '                          ValoStats                          ' +
        '\u001b[0m\n```',
    },
    {
      name: '**Gamemode Stats (All Acts)**',
      value:
        `<:slash:1145942150916358164> lastmatch: Last Comp Match\n` +
        `<:slash:1145942150916358164> stats: Competitive Stats\n` +
        `<:slash:1145942150916358164> unrated: Unrated Stats\n` +
        `<:slash:1145942150916358164> spikerush: Spike Rush Stats\n` +
        `<:slash:1145942150916358164> deathmatch: Deathmatch Stats\n` +
        `<:slash:1145942150916358164> escalation: Escalation Stats\n` +
        `<:slash:1145942150916358164> replication: Replication Stats\n` +
        `<:slash:1145942150916358164> swiftplay: Swiftplay Stats\n` +
        `<:slash:1145942150916358164> snowball: Snowball Stats\n`,
      inline: true,
    },
    {
      name: '**Other Stats**',
      value:
        `<:slash:1145942150916358164> agent: Top 5 Ranked Agents\n` +
        `<:slash:1145942150916358164> weapon: Top 5 Ranked Weapons\n` +
        `<:slash:1145942150916358164> map: All Ranked Map Stats\n` +
        `<:slash:1145942150916358164> playtime: Total Playtime\n` +
        `**\nUtility**\n` +
        `<:slash:1145942150916358164> link: Link a VALORANT account\n` +
        `<:slash:1145942150916358164> unlink: Unlink VALORANT account\n` +
        `<:slash:1145942150916358164> linked: View linked account\n` +
        `<:slash:1145942150916358164> invite: Get bot invite link\n`,
      inline: true,
    },
    { name: '\u200B', value: '\u200B', inline: true },
    {
      name: '**How to get started**',
      value: `1. 'Sign in with Riot ID' on https://tracker.gg/valorant\n2. Connect your VALORANT account to your Discord\n   ID by typing /link YOUR_USERNAME#TAG`,
      inline: true,
    },
    {
      name: '**Ways to support :)**',
      value:
        `𓆩♡𓆪 [Donate w/ PayPal](https://www.paypal.me/cmdrvo)\n` +
        `𓆩♡𓆪 [Vote on Top.gg](https://top.gg/bot/833535533287866398)\n` +
        `𓆩♡𓆪 [Report bugs](https://discord.com/api/oauth2/authorize?client_id=833535533287866398&permissions=431644736576&scope=bot%20applications.commands)`,
      inline: true,
    }
  );

function linkEmbed(args) {
  return new MessageEmbed()
    .setColor('RANDOM')
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields({
      name: 'Success!',
      value:
        'Successfully linked the VALORANT account `' +
        `${args}` +
        '` to your Discord ID.\n\n' +
        'Please consider voting for ValoStats on [top.gg](https://top.gg/bot/833535533287866398)! It only takes a few minutes :)',
      inline: true,
    });
}

const unlinkEmbed = new MessageEmbed()
  .setColor('RANDOM')
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields({
    name: 'Success!',
    value:
      'Successfuly unlinked any VALORANT accounts from your Discord ID.\n\n' +
      'Please consider voting for ValoStats on [top.gg](https://top.gg/bot/833535533287866398)! It only takes a few minutes :)',
    inline: true,
  });

function linkedEmbed(args) {
  return new MessageEmbed()
    .setColor('RANDOM')
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields({
      name: 'Status',
      value:
        'Your linked account is `' +
        `${args}` +
        '`\n\n' +
        'Please consider voting for ValoStats on [top.gg](https://top.gg/bot/833535533287866398)! It only takes a few minutes :)',
      inline: true,
    });
}

const noLinkEmbed = new MessageEmbed()
  .setColor('RANDOM')
  .setFooter({ text: 'Developed by CMDRVo' })
  .addFields({
    name: 'Error Status',
    value:
      'You do not have an account linked!\nUse `/link USERNAME#TAG` to link a VALORANT account to your Discord ID',
    inline: true,
  });

module.exports = {
  noAccountEmbed,
  maintenanceEmbed,
  errorEmbed,
  noStatsEmbed,
  useSlashEmbed,
  helpEmbed,
  linkEmbed,
  unlinkEmbed,
  linkedEmbed,
  noLinkEmbed,
};
