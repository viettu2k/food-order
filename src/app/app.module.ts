import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RatingModule } from 'ng-starrating';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent],
  imports: [
    BrowserModule,
    RatingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
