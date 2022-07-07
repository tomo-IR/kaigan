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
  selectedClubs = new FormControl('');
  selectedActions = new FormControl('');
  selectedBodyParts = new FormControl('');

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
  ];
  cons() {
    console.log(this.selectedClubs);
    console.log(this.selectedBodyParts);
    console.log(this.selectedActions);
    console.log(this.selectedDate);
  }
}
