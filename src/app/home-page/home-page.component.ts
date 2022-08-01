import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor() { }

  old_new_checked = false

  houses = [
    {name: "Phileo",  color: "#C9253C", score: 150},
    {name: "Chara",   color: "#135D32", score: 70},
    {name: "Gratia",  color: "#E39935", score: 80},
    {name: "Veritas",  color: "#154D89", score: 100},
    {name: "Aequitas",  color: "#5E5E5C", score: 100}
  ]

  ngOnInit(): void {
  }

  is_highest_score(score: number) {
    return Math.max(...this.houses.map(function map(a) {return a.score})) == score
  }

  houses_sorted() {
    return [...this.houses].sort(function points(a, b) {
      if (a.score < b.score) {
        return -1
      } else if (a.score == b.score) {
        return 0
      } else {
        return 1
      }
    }).reverse()
  }

}
