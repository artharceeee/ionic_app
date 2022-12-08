playSong(title, subTitle, img, song) {

if (this.currSong != null) {

this.currSong.pause(); //If a song plays, stop that

}

//open full player view

document.getElementById("fullPlayer").s tyle.bottom = "0px";

//set current song details

this.currTitle= title; this.currSubtitle = subTitle;

this.currImage = img;

//Current song audio this.currSong = new Audio(song);

this.currSong.play().then(() => {

//Total song duration this.durationText =

this.sToTime(this.currSong.duration); //set max range value (important to show proress in ion- range)

this.maxRangeValue = Number(this.currSong.duration.toFixed(2 ).toString().substring(0, 5));

//set upnext song

//get current song index

var index = this.songs.findIndex (x => x.title ==

this.currTitle);

//if current song is the last

one then set first song info for upnext song

if ((index + 1) ==

this.songs.length) {

this.upNextImg

=

this.songs[0].img; this.upNextTitle

this.songs[0].title;
this.upNextSubtitle this.songs[0].subtitle;

//else set next song info for else {

upnext song

this.upNextImg = this.songs [index + 1].img;

this.upNextTitle = this.songs [index + 1].title;

this.upNextSubtitle = this.songs [index + 1].subtitle;

}

this.isPlaying = true;

})

this.currSong.addEventListener("timeupd ate", () => {

//update some infos as song //if ion-range not touched the if (!this.isTouched) { plays on do update

//update ion-range value

this.currRangeTime =

Number (this.currSong.currentTime.toFixe d(2).toString().substring(0, 5));

text

//update current seconds this.currSecsText =

this.sToTime(this.currSong.currentTime)

//update progress bar (in

miniize view)

this.progress = (Math.floor(this.currSong.currentTime)

/ Math.floor(this.currSong.duration));
song

//if song ends, play next

if

(this.currSong.currentTime == this.currSong.duration) {

this.playNext();

}

}

}

});
