import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  constructor() {}
  totalSpent:number=0;
  spenton = new FormControl('');
  spent= new FormControl('');
  total:any = [];
  ngOnInit(): void {}
  add() {
    this.total.push({
      name : this.spenton.value,
      spent : this.spent.value
    })
    this.totalSpent=this.spent.value+this.totalSpent;
  }
}
