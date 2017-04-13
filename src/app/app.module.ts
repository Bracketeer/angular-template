import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterializeModule} from "angular2-materialize";
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompareComponent } from './compare/compare.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'

const appRoutes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'compare', component: CompareComponent },
  { path: '', component: HomeComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CompareComponent,
    ProductComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
