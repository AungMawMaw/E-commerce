import {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, delayWhen, retry, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { Router } from '@angular/router';

//NOTE: Simple cache object
const requestCache = new Map<string, any>();

//NOTE: Tracking slow requests
const slowRequestThreshold = 3000; // in milliseconds
//NOTE: Queue for offline requests
let offlineRequestQueue: HttpRequest<any>[] = [];

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);
  errorService.clearError();
  const router = inject(Router);

  const startTime = Date.now(); //NOTE: start time of req
  console.log(
    `Before sending to server -> HTTP Request - Method: ${req.method}, URL: ${req.url}, Time: ${new Date().toISOString()}`,
  );

  // const authToken = ''; //NOTE:for auth route
  // const clonedRequest = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${authToken}`,
  //     'X-Request-ID': `req-${Date.now()}`, // Custom header for tracking requests
  //   },
  // });

  // NOTE: Caching: If it's a GET request and the response is cached, return the cached response
  if (req.method === 'GET' && requestCache.has(req.url)) {
    console.log('Returning cached response for:', req.url);
    return of(requestCache.get(req.url));
  }

  return next(req).pipe(
    //clonedRequest
    retry(2), // retry failed requests.. up to 2 times..
    delayWhen((event: HttpEvent<any>) => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime > slowRequestThreshold) {
        console.warn(`Request to ${req.url} took too long: ${elapsedTime}ms`);
      }
      return of(event);
    }),
    tap((event: HttpEvent<any>) => {
      const elapsedTime = Date.now() - startTime;
      console.log(
        `requesting -> HTTP Response - Method: ${req.method}, URL: ${req.url}, Time: ${elapsedTime}ms`,
      );
      if (req.method === 'GET') {
        //save cache
        requestCache.set(req.url, event);
      }
    }),
    catchError((error) => {
      const elapsedTime = Date.now() - startTime;
      let errorMessageReqType = '';

      switch (req.method) {
        case 'GET':
          errorMessageReqType = 'Failed to fetch data.';
          break;
        case 'POST':
          errorMessageReqType = 'Failed to post data.';
          break;
        case 'PUT':
          errorMessageReqType = 'Failed to update data.';
          break;
        default:
          errorMessageReqType = 'An unexpected error occurred.';
      }

      let errorMessageErrorType = '';
      switch (error.status) {
        case 0: //NOTE: Network error
          errorMessageErrorType =
            'Network issue: Please check your internet connection.';
          offlineRequestQueue.push(req); //clonedRequest
          break;
        case 400:
          errorMessageErrorType =
            'Bad request: Please check the data you are sending.';
          break;
        case 401:
          errorMessageErrorType = 'Unauthorized: You need to log in.';
          router.navigate(['/login']);
          break;
        case 404:
          errorMessageErrorType = `Not found: The requested URL ${req.url} was not found on the server.`;
          break;
        case 500:
          errorMessageErrorType =
            'Internal server error: Please try again later.';
          break;
        default:
          errorMessageErrorType = 'An unexpected error occurred.';
      }

      console.error(
        `HTTP ${req.method} error - URL: ${req.url}, Status: ${error.status}, Time: ${elapsedTime}ms`,
        error.message,
      );

      errorService.showError(errorMessageErrorType);

      return throwError(() => new Error(errorMessageErrorType));
    }),
  );
};
