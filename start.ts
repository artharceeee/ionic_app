touchStart() {

this.isTouched = true; this.currRangeTime =

Number (this.range.value);

}

touchMove() {

this.currSecsText = this.sToTime (this.range.value); }

touchEnd() {

this.isTouched = false;

this.currSong.currentTime =

Number (this.range.value); this.currSecsText =

this.sToTime(this.currSong.currentTime) this.currRangeTime = Number(this.currSong.currentTime.toFixe d(2).toString().substring(0, 5));

if (this.isPlaying) { this.currSong.play();

}

}
