import {Component} from '@angular/core';
import {NumpadPage} from '../numpad/numpad';
import {CollectionsPage} from '../collections/collections';
import {SongPage} from '../song/song';
import {SearchPage} from '../search/search';
import {MorePage} from '../more/more';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private tab5Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = NumpadPage;
    this.tab2Root = CollectionsPage;
    this.tab3Root = SongPage;
    this.tab4Root = SearchPage;
    this.tab5Root = MorePage;
  }
}
