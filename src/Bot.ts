const { Client, GatewayIntentBits } = require('discord.js');
import { Piece, PieceType, PieceColour } from './Piece';
import { Chessboard } from './Chessboard';
import { Utility } from './Utility';
import * as dotenv from "dotenv";
dotenv.config()

console.log("Bot is starting...");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.login(process.env.DISCORD_KEY)

let chessboard = new Chessboard();

console.log(chessboard.getPiece("B2"))

// Channels & Servers Z-bot can post in
let channels: (string)[] = ['949886919838433361'];

client.on('messageCreate', (message: { author: { bot: any; }; channel: { id: string; }; reply: (arg0: string) => void; }) => {
    if (message.author.bot) {
        return;
    }
    if (!channels.includes(message.channel.id)) {
        return;
    }
    message.reply("Hello");
})
