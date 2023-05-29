import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    return authService
        .isAuthenticated()
        .then( (authenticated: boolean) => {
            if(authenticated) {
                return true;
            }
            router.navigate(['/']);
    });
}