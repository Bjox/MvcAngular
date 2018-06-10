import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LolcomponentComponent } from './lolcomponent/lolcomponent.component';

@NgModule({
    declarations: [
        AppComponent,
        LolcomponentComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
