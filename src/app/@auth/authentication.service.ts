import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';

import { Credentials, CredentialsService } from './credentials.service';
import { ConstantService } from '../shared/constants';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private credentialsService: CredentialsService, private constantsService: ConstantService) { }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(params: LoginContext): Observable<Credentials> {
    let mockResponse: any = {
      isSuccess: false,
      data: {}
    };
    if(_.isEqual(params, this.constantsService.userCredentials)) {
      mockResponse.isSuccess = true;
      mockResponse.data = {
        username: params.username,
        token: '123456'
      };
    }
    this.credentialsService.setCredentials(mockResponse.data, false);
    return of(mockResponse);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }

}
