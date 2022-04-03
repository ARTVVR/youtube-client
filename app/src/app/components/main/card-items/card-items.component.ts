import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import data from '../../../response/response';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export default class CardItemsComponent implements OnInit {
  infoCount: string[] = [];

  arrIcons: string[] = [
    'visibility',
    'thumb_up',
    'thumb_down',
    'question_answer',
  ];

  db = data[0].items;

  ngOnInit(): void {
    this.reductionIn();
  }

  static onCompare(
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number {
    if (a.key && b.key === 'favoriteCount') return -1;

    return 1;
  }

  // TODO: Сократить большие числа
  reductionIn() {
    for (let i = 0; i < this.db.length; i += 1) {
      const arrN = Object.values(this.db[i].statistics);
      const newArr = arrN.map(v => {
        if (v.length >= 4) {
          const res = v.slice(0, v.length - 3);
          console.log(`${res}k`);
          return res;
        }
        return v;
      });
      console.log(newArr);
    }
  }
}
