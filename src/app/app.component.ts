import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kaigan';
  today: Date = new Date();
  selectedDate = new FormControl();
  selectedPlace = new FormControl();
  selectedClubs = new FormControl('');
  selectedActions = new FormControl('');
  selectedBodyParts = new FormControl('');
  textArea = new FormControl('');
  placeList: string[] = ['ラウンド', 'ショートコース', 'レンジ', '自宅'];
  clubList: string[] = [
    'クラブ問わず',
    'ウッド',
    'アイアン',
    'パター',
    'ウェッジ',
    'ユーティリティ',
    'その他クラブ',
  ];
  actionList: string[] = [
    'アドレス',
    'テイクバック',
    'トップ',
    'ダウンスイング',
    'インパクト',
    'フォロー',
    'フィニッシュ',
    'その他のアクション',
  ];
  bodyPartsList: string[] = [
    '頭',
    '手',
    '腕',
    '肩',
    '胸',
    '背中',
    '腹',
    '腰',
    '足',
    '膝',
    '足裏',
    'その他の部位',
  ];
  cons() {
    console.log(this.textArea);
    console.log(this.selectedPlace);
    console.log(this.selectedClubs);
    console.log(this.selectedBodyParts);
    console.log(this.selectedActions);
    console.log(this.selectedDate);
  }
}
