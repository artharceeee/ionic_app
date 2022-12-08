playPrev() { var index = this.songs.findIndex(x => x.title == this.currTitle);

if (index == 0) { var lastIndex = this.songs.length 1;

this.playSong (this.songs [lastIndex].tit le, this.songs [lastIndex].subtitle, this.songs [lastIndex].img, this.songs [lastIndex].path); }

else {

var prevIndex = index - 1;

this.playSong (this.songs [prevIndex].tit le, this.songs [prevIndex].subtitle, this.songs [prevIndex].img, this.songs [prevIndex].path); }

}
