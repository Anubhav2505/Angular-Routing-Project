import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BankingappComponent } from './bankingapp/bankingapp.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';



export const routes:Routes=[
    {path:'form',component:FormComponent },
    {path:'banking',component:BankingappComponent },
    {path:'creditcard',component:CreditcardComponent},
    {path:'emical',component:EmicalculatorComponent }

];