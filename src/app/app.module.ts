import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ComputedSignalsComponent } from './computed-signals/computed-signals.component';
import { EffectsComponent } from './effects/effects.component';
import { EqualityFunctionsComponent } from './equality-functions/equality-functions.component';
import { UntrackedDependenciesComponent } from './untracked-dependencies/untracked-dependencies.component';
import { CleanupSignalsComponent } from './cleanup-signals/cleanup-signals.component';
import { SignalsRxjsComponent } from './signals-rxjs/signals-rxjs.component';
import { ToObservableComponent } from './to-observable/to-observable.component';
import { OutputFromObservableComponent } from './output-from-observable/output-from-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ComputedSignalsComponent,
    EffectsComponent,
    EqualityFunctionsComponent,
    UntrackedDependenciesComponent,
    CleanupSignalsComponent,
    SignalsRxjsComponent,
    ToObservableComponent,
    OutputFromObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
