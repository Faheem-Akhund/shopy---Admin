import {Injectable, Injector} from '@angular/core';

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const auth = this.injector.get(AuthService);
        // if (auth.getToken()) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${auth.getToken()}`
        //         }
        //     });

        // }

        return next.handle(request)
    }
}