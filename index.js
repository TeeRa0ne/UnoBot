const FS = require('fs');
const Discord = require('discord.js');
const { format } = require('path');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready !');
});

client.login(token);
