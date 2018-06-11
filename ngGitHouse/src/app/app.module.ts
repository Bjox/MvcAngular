import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LolcomponentComponent } from './lolcomponent/lolcomponent.component';
import { AppRoutingModule } from './/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        LolcomponentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
