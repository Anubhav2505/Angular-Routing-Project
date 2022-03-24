import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankingapp',
  templateUrl: './bankingapp.component.html',
  styleUrls: ['./bankingapp.component.css']
})
export class BankingappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Amount=0;
  RemainigBalance=0;
  totalbalance=0;
Add(){
this.RemainigBalance=this.Amount;
return this.RemainigBalance;
}
Withdraw(){
  if(this.Amount > this.RemainigBalance){
    alert('Your Dont have enough balance');
   }
  else{
    this.RemainigBalance=this.RemainigBalance-this.Amount;
    this.Amount=0;
    return this.RemainigBalance;
  }
  return;
}
Deposit(){
  this.RemainigBalance=this.RemainigBalance*1+this.Amount*1;
  this.Amount=0;
  return this.RemainigBalance;
}
}


