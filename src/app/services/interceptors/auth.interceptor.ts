import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authReq = req;
  const token = localStorage.getItem('token');

  if (token) {
    authReq = addToken(req, token);
  }

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return throwError(() => err);
    })
  );
};

const addToken = (req: HttpRequest<any>, token: string) => {
  return req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });
};
