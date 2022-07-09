import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-kaigan',
  templateUrl: './add-kaigan.component.html',
  styleUrls: ['./add-kaigan.component.scss'],
})
export class AddKaiganComponent implements OnInit {
  fg: FormGroup | undefined;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      selectedDate: new FormControl(new Date()),
      selectedPlace: new FormControl([]),
      selectedClubs: new FormControl([], [Validators.required]),
      selectedActions: new FormControl([]),
      selectedBodyParts: new FormControl([]),
      textArea: new FormControl(''),
    });
  }

  ngOnInit(): void {}
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
    console.log(this.fg.value.selectedActions);
    console.log(this.fg.value.selectedBodyParts);
    console.log(this.fg.value.selectedClubs);
    console.log(this.fg.value.selectedDate);
    console.log(this.fg.value.selectedPlace);
  }
}
