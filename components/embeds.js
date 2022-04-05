const { MessageEmbed } = require('discord.js');

const noAccountEmbed = new MessageEmbed()
    .setColor('#d1390f')
    .setThumbnail('https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png')
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields(
        {
            name: 'Error Status',
            value: "```diff\n" + "Please connect your Valorant account to your \nDiscord ID using /link to view player statistics." +
                "\n\nExample: /link ValoStats#NA1\n```",
            inline: true
        },
    );

const maintenanceEmbed = new MessageEmbed()
    .setColor('#d1390f')
    .setThumbnail('https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png')
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields(
        {
            name: 'Maintenance Status',
            value: "```diff\n" + "ValoStats currently has issues in retrieving stats." +
                " Please try again later." + "\n```",
            inline: true
        },
    )

const errorEmbed = new MessageEmbed()
    .setColor('#d1390f')
    .setThumbnail('https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png')
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields(
        {
            name: 'Error Status',
            value: "```diff\n" + "Please ensure the account you are trying to view has" +
                " logged into tracker.gg/valorant!\n\nExample:\n1. Click 'Sign in with Riot ID'\n2. /command-to-use USERNAME#TAG\n\n"
                + "Note: Linked Discord accounts do not need to provide a USERNAME#TAG.\n```",
            inline: true
        },
    )

const noStatsEmbed = new MessageEmbed()
    .setColor('#d1390f')
    .setThumbnail('https://cdn.discordapp.com/attachments/834195818080108564/932365602427920404/x-png-35400.png')
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields(
        {
            name: 'Error Status',
            value: "```diff\n" + "This user does not have statistics to retrieve for this gamemode." + "\n```",
            inline: true
        },
    )

const useSlashEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({ name: "IMPORTANT READ ME" })
    .addFields(
        {
            name: ":warning: Please use slash commands from now on", value: "ValoStats has undergone a major update. The bot will no longer use the prefix command '**v!**'. " +
                "All commands have now migrated to slash commands. Type **/help** for a list of commands.\n\n" +
                "Why was this change implemented? As of **April 2022**, prefix commands will unfortunately be removed from all bots." +
                " [See Here.](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots)\n\n" +
                "If you cannot see slash commands on this server, please ask the admininstrator to reinvite the bot using [this link. ](https://discord.com/api/oauth2/authorize?client_id=833535533287866398&permissions=431644736576&scope=bot%20applications.commands)" +
                "\nThe bot **does not** need to be kicked. Only **readded!**\n\n" +
                "Any issues? Join the test server and alert **@CMDRVo** for assistance. Thank you! <:jett:839142770576851006>", inline: true
        },
    )
    .setImage('https://cdn.discordapp.com/attachments/834195818080108564/954932610780520468/thanks.jpg');

const helpEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter({ text: 'Developed by CMDRVo' })
    .addFields(
        {
            name: "\u200B",
            value:
                "```md\n" +
                "#             ValoStats Commands             #" +
                "\n```",
        },
        { name: 'Stats', value: "```yaml\n/stats\n/unrated\n/lastmatch\n/spikerush\n/deathmatch\n/escalation\n/replication\n/snowball\n/agent\n/weapon\n/map\n/peak\n/playtime```", inline: true },
        { name: 'Other', value: "```yaml\n/link\n/unlink\n/linked\n/invite\n/ping\n/help```", inline: true },
        { name: '\u200b', value: "`To start using ValoStats, log into tracker.gg/valorant\n    Connect with /link USERNAME#TAG to use commands   \n        The Original Valorant Stats Discord Bot       `", inline: false },
    )

module.exports = { noAccountEmbed, maintenanceEmbed, errorEmbed, noStatsEmbed, useSlashEmbed, helpEmbed };