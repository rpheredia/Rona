import { Injectable, SecurityContext } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AtmServiceService } from '../services/atm-service.service';

@Injectable()
export class HttpinterceptorService implements HttpInterceptor {

  constructor( public atmService: AtmServiceService) { }

  intercept(req: HttpRequest<any>, next :HttpHandler) {
    let token = this.atmService.getToken();

    const authReq = req.clone({
      headers : req.headers.set('bbank-apiKey', environment.apiKey)
                           .set('bbank-secure', token)
    });

    return next.handle(authReq);
  }

}
