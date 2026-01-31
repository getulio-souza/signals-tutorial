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
import { SignalsInputComponent } from './signals-input/signals-input.component';
import { SignalsInputExtraComponent } from "./signals-input-extra/signals-input-extra.component";
import { TwoWayDataBindingSignalComponent } from "./two-way-data-binding-signal/two-way-data-binding-signal.component";

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
    OutputFromObservableComponent,
    SignalsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignalsInputExtraComponent,
    TwoWayDataBindingSignalComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
