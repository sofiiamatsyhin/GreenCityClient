import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AdminComponent} from './component/admin/admin.component';
import {UserComponent} from './component/user/user.component';
import {GeneralComponent} from './component/general/general.component';
import {SignUpComponent} from './component/user/auth/sign-up/sign-up.component';
import {NavBarComponent} from './component/user/nav-bar/nav-bar.component';
import {AuthComponent} from './component/user/auth/auth.component';
import {SignInComponent} from './component/user/auth/sign-in/sign-in.component';
import {SubmitEmailComponent} from './component/user/auth/submit-email/submit-email.component';
import {RouterModule} from '@angular/router';
import {router} from './router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './component/user/map/map.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AdminModule} from './component/admin/admin.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    GeneralComponent,
    SignUpComponent,
    NavBarComponent,
    AuthComponent,
    SignInComponent,
    SubmitEmailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDanBliCzAuCZrsq67FeKEs3vqAilUD_is'}),
    Ng2SearchPipeModule,
    AdminModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
