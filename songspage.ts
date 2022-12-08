sToTime(t) {

return

this.padZero(parseInt(String((t / (60)) % 60))) + ":" +

this.padZero(parseInt(String((t) % 60))); }

padZero(v) {

return (v < 10) ? "0" + V: V;

}
