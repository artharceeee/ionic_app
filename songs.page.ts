import Component,

'@angular/core';

Uninit} from

import { IonRange } from

"@ionic/angular";

@Component({

selector: 'app-songs-options',

templateUrl: './songs- options.page.html',

styleUrls: ['./songs-

options.page.scss'],

})

export class SongsPage { @ViewChild("range", { static: false }) range: IonRange;

//Current song details currTitle: string; currSubtitle: string; currImage: string;

//progress bar value progress: number = 0;

//toggle for play/pause button isplaying: booleab = false;

//track of ion-range touch isTouched: boolean = false;

//ion range texts currSecsText: string; durationText: string;

//ion range value currRangeTime: number; maxRangeValue: number;

//Current song currSong: HTMLAudioElement;

//Upnext song details UpNextTmg: string:
upNextTitle: string;

upNextSubtitle: string; constructor() { }

}
