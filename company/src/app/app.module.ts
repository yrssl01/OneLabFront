import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
