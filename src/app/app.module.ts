import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ComputedSignalsComponent } from './computed-signals/computed-signals.component';
import { EffectsComponent } from './effects/effects.component';
import { EqualityFunctionsComponent } from './equality-functions/equality-functions.component';
import { UntrackedDependenciesComponent } from './untracked-dependencies/untracked-dependencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ComputedSignalsComponent,
    EffectsComponent,
    EqualityFunctionsComponent,
    UntrackedDependenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
