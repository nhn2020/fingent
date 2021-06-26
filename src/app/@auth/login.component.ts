import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from './authentication.service';
import { ConstantService } from '../shared/constants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  appName: string;
  error: string | undefined;
  loginForm!: FormGroup;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private constantsService: ConstantService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {
    this.appName = this.constantsService.appName;
    this.createForm();
  }

  ngOnInit() { }

  login() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).subscribe((res: any) => {
        if (res.isSuccess) {
          this.router.navigate(['/dashboard']);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: this.constantsService.messages.authError });
        }
      })
    }
  }


  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
