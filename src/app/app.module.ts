import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ComputedSignalsComponent } from './computed-signals/computed-signals.component';
import { EffectsComponent } from './effects/effects.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ComputedSignalsComponent,
    EffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
