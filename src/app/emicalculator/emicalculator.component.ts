import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  



  Amount=0;
  Interest=0;
  years=0;
  monthlyPayment=0;
  totalInterest=0;
  totalPayment=0;
  
  Cal(){
    const principal =this.Amount*1;
    const CalculateInterest = (this.Interest*1)/ 100 / 12;
    const calculatedPayments = this.years * 12;
    const x = Math.pow(1 + CalculateInterest, calculatedPayments);
    const monthly = (principal * x * CalculateInterest) / (x - 1);
    this.monthlyPayment = parseFloat(monthly.toFixed(2));
    this.totalInterest = parseFloat((monthly * calculatedPayments - principal).toFixed(2));
    this.totalPayment = parseFloat((monthly * calculatedPayments).toFixed(2));
  return this.monthlyPayment,this.totalInterest,this.totalPayment;
  }
}
