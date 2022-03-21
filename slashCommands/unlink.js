const DiscordUser = require('../schemas/AccountSchema');
const Account = require('../schemas/AccountSchema');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { buttons } = require('../components/buttons');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unlink')
        .setDescription('Unlink a Valorant account from your Discord ID'),
    async execute(interaction) {

        const accounts = await Account.find({ discordId: interaction.user.id })

        // // Check if the user has a linked account and delete it
        if (accounts.length > 0)
            await Account.deleteMany({ discordId: interaction.user.id })

        // Remove linked account from Discord ID
        try {
            await DiscordUser.deleteOne({
                username: interaction.user.username,
                discordId: interaction.user.id,
                valorantAccount: null
            })
            await interaction.reply({
                content: 'Successfuly unlinked the Valorant account from your Discord ID',
                components: [buttons]
            });
        } catch (error) {
            console.error(error);
            return await interaction.reply({
                content: "Failed to unlink the Valorant account from your Discord ID",
                components: [buttons]
            });
        }
    },
};