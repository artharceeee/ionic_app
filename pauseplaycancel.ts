pause() {

this.currSong.pause(); this.isPlaying false; =

}

play() { this.currSong.play();

this.isPlaying = true;

}

cancel() {

document.getElementById("miniPlayer").s

tyle.bottom = "-100px"; this.currImage =

this.currTitle = this.currSubtitle = "";

this.progress = 0; this.currSong.pause();

this.isplaying = false;

}
