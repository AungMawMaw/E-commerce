import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { SignUpComponent } from './modules/auth/components/sign-up/sign-up.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AccountComponent } from './modules/account/account.component';
import { ProfileComponent } from './modules/account/components/profile/profile.component';
import { WelcomeUserComponent } from './modules/account/components/welcome-user/welcome-user.component';
import { AddressBookComponent } from './modules/account/components/address-book/address-book.component';
import { PaymentOptionComponent } from './modules/account/components/payment-option/payment-option.component';
import { MyReturnComponent } from './modules/account/components/my-return/my-return.component';
import { MyCancellationsComponent } from './modules/account/components/my-cancellations/my-cancellations.component';
import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  // {
  //   path: 'signUp',
  //   component: SignUpComponent,
  // },

  { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' },

  {
    path: 'account',
    component: AccountComponent,
    // canActivate: [authGuard],
    children: [
      { path: '', component: WelcomeUserComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'addressBook', component: AddressBookComponent },
      { path: 'paymentOption', component: PaymentOptionComponent },
      { path: 'myReturn', component: MyReturnComponent },
      { path: 'mycanellations', component: MyCancellationsComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'signIn', pathMatch: 'full' },
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
    ],
  },
];
