import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';
import { exhaustMap, of, take, tap } from 'rxjs';

const cache = new Map<string, any>();
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  console.log('from httpInterceptor');
  if (req.method === 'GET') {
    const cachedResponse = cache.get(req.urlWithParams);
    if (cachedResponse) {
      console.log('Returning cached response for:', req.urlWithParams);
      return of(cachedResponse);
    }
  }

  return authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      if (!user) {
        console.log('from httpInterceptor, no user');
        return next(req);
      }

      const modifiedReq = req.clone({
        params: req.params.set('auth', user.token!),
      });

      console.log('from httpInterceptor, with user');
      return next(modifiedReq).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            cache.set(req.urlWithParams, event);
          }
        }),
      );
    }),
  );
};
