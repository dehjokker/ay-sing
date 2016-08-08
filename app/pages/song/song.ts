import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Song } from '../../interfaces/song.interface';

/*
  Generated class for the SongPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/song/song.html',
})
export class SongPage {

  song: Song;
  playing: boolean;

  constructor(private navCtrl: NavController) {
    this.song = {
      title: 'Are You Ready for Jesus to Come?',
      number: 6,
      key: 'D major',
      lyrics: `<p>The theme of the Bible is Jesus,<br />\nAnd how He died to save men.<br />\nThe plan of salvation assures us,<br />\nHe's coming back again.</p>\n\n<p><b>Chorus</b><br />\nAre you ready when Jesus to come?<br />\nAre you faithful in all that you do?<br />\nHave you fought a good fight,<br />\nHave you stood for the right?<br />\nHave others seen Jesus in you?<br />\nAre you ready to stand in your place?<br />\nAre you ready to look in His face?<br />\nCan you look up and say,<br />\n&ldquo;This is my Lord!&rdquo;<br />\nAre you ready for Jesus to come?</p>\n\n<p>Don't cling to the world and its treasure,<br />\nThis earth will soon pass away.<br />\nOh, give Him your love without measure,<br />\nHe's calling you today.</p>\n\n<p><b>Chorus</b><br />\nAre you ready when Jesus to come?<br />\nAre you faithful in all that you do?<br />\nDo you fight a good fight,<br />\nDo you stand for the right?<br />\nDo others see Jesus in you?<br />\nAre you ready to stand in your place?<br />\nAre you ready to look in His face?<br />\nCan you look up and say,<br />\n&ldquo;This is my Lord!&rdquo;<br />\nAre you ready for Jesus to come?</p>`
    }

    this.playing = false;
  }

  bookmark() {}

  getSheetMusic() {}

  toggleMusic() {}
}
