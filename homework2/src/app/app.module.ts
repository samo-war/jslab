import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { HomeworkListComponent } from './components/homework-list/homework-list.component';
import { HomeworkComponent } from './components/homework/homework.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    HomeworkListComponent,
    HomeworkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
