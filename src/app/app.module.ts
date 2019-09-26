import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {FormComponent} from './components/form/form.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'new', component: FormComponent},
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
