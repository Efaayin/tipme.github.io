import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calculate-tip',
  templateUrl: './calculate-tip.component.html',
  styleUrls: ['./calculate-tip.component.sass']
})
export class CalculateTipComponent implements OnInit {
  tipPercentage: number = 0.1;
  cost: number = 0;
  tip: number = 0;
  amountPayable: number = 0;
  display: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calculateTip() {
    if (this.display.length = 1) {
      this.display = [];
      this.display.push(1);
    } else {
      this.display.push(1);
    }
    this.tip = this.tipPercentage * this.cost; 
    this.amountPayable = this.cost + this.tip;
  }

  reset() {
    this.display = [];
    this.cost = 0;
  }
}
