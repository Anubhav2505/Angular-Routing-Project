import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BankingappComponent } from './bankingapp/bankingapp.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { routes } from './routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    BankingappComponent,
    CreditcardComponent,
    EmicalculatorComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
