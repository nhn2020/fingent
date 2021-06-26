import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ToastModule
  ],
  declarations: [LoginComponent],
  providers: [
    MessageService
  ]
})
export class AuthModule { }
