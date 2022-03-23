import { NotImplemented } from "./Other";

export class Player {
    constructor() {
        this.playlist = [];
        this.currentPlaylist = 0;
        this.currentPlaylistSongs = [];
        this.playIndex = 0;
        this.player = new Audio();
        this.player.addEventListener('ended', () => {
            this.next();
        });
        this.is_playing = false;
        this.playIndexChange = NotImplemented;
    }
    init(playlist, playlistChange, playIndexChange) {
        this.playlist = playlist;
        this.renewCurrentPlaylistSongs();
        this.reload();
    }

    setPlayIndexChangeCallback(playIndexChange) {
        this.playIndexChange = playIndexChange;
    }
    renewCurrentPlaylistSongs() {
        this.currentPlaylistSongs = this.playlist[this.currentPlaylist].file;
    }
    // single song
    play() {
        this.is_playing = true;
        this.player.play();
    }
    pause() {
        this.is_playing = false;
        this.player.pause();
    }
    reload() {
        this.player.src = toPath(this.currentPlaylistSongs[this.playIndex].file);
        this.player.load();
        if (this.is_playing) {
            this.player.play();
        }
    }
    last() {
        if (this.playIndex - 1 === -1) {
            this.playIndex = this.currentPlaylistSongs.length - 1;

        } else {
            this.playIndex -= 1;
        }
        this.reload();
        this.playIndexChange([this.currentPlaylist, this.playIndex]);
    }
    next() {
        if (this.playIndex + 1 === this.currentPlaylistSongs.length) {
            this.playIndex = 0;

        } else {
            this.playIndex += 1;
        }
        this.reload();
        this.playIndexChange([this.currentPlaylist, this.playIndex], this.playlist[this.currentPlaylist].file[this.playIndex].name);
    }
    setCurrentPlay(playlistId, songId) {
        if (playlistId !== this.currentPlaylist || this.playIndex !== songId) {
            this.currentPlaylist = playlistId;
            this.renewCurrentPlaylistSongs();
            this.playIndex = songId;
            this.reload();
            this.playIndexChange([this.currentPlaylist, this.playIndex], this.currentPlaylistSongs[this.playIndex].name);

        }
    }
    destroy() {
        this.pause();
        this.player.src = "";
    }
}

function toPath(fn) {
    return `/data/music/files/${fn}`;
}