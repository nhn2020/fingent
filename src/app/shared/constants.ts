import { Injectable } from "@angular/core";

@Injectable({
    'providedIn': "root"
})
export class ConstantService  {
    appName = 'Covid - 19';

    userCredentials = {
        username: 'fingent',
        password: 'fingent'
    };

    messages = {
        authError: 'Incorrect username or password'
    };
}