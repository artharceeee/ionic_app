playNext() { var index = this.songs.findIndex(x => x.title == this.currTitle);

if ((index + 1) == this.songs.length) {

this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path); }

else {

var nextIndex = index + 1;

this.playSong (this.songs [nextIndex].tit le, this.songs [next Index].subtitle, this.songs [nextIndex].img, this.songs [nextIndex].path);

}
