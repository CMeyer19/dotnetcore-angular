import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ToDoComponent } from './todo/component/todo.component';
import { ToDoEffects } from './todo/todo.effects';
import { ToDoReducer } from './todo/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({todos: ToDoReducer}),
    EffectsModule.forRoot([ToDoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
