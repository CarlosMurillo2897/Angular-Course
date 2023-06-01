import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { inject } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

export const ServerResolver: ResolveFn<Server> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Server> | Promise<Server> | Server => {
  const serversService = inject(ServersService);
  return serversService.getServer(+route.params['id']);
};
