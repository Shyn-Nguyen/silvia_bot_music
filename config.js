module.exports = {
    app: {
        px: 'sil/',
        token: 'OTU1NDAzODkyNjEzNTkxMDUw.YjhLNg._IF7dMt6u2g3-AAZxGHFdlGWRnc',
        playing: 'Type [sil/] to use '
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'silvia<3',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
