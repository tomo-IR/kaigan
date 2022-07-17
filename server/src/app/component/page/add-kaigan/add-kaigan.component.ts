import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-add-kaigan',
  templateUrl: './add-kaigan.component.html',
  styleUrls: ['./add-kaigan.component.scss'],
})
export class AddKaiganComponent implements OnInit {
  fg: FormGroup;
  constructor(private fb: FormBuilder, private dialog: DialogService) {
    this.fg = this.fb.group({
      selectedDate: new FormControl(new Date()),
      selectedPlace: new FormControl([]),
      selectedClubs: new FormControl([]),
      selectedActions: new FormControl([]),
      selectedBodyParts: new FormControl([]),
      detail: new FormControl('', [
        Validators.required,
        Validators.maxLength(400),
      ]),
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
    'アクション問わず',
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
    '部位問わず',
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
    console.log(this.fg);
  }

  canSubmit() {
    return this.fg.invalid;
  }
  regist(formDate: any) {
    this.dialog.showDialog(formDate);
  }
}
