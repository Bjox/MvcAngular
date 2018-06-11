import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LolcomponentComponent } from 'src/app/lolcomponent/lolcomponent.component';

const routes: Routes = [
    { path: 'Home/Contact', component: LolcomponentComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
