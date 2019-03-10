import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Criterio } from './models/criterio';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  public launches: any[];
  public statuses: any[];
  private key = 'statuses';
  private urlStatus = 'assets/data/launchstatus.json';
  private urlAgencias = 'assets/data/launchagencies.json';
  private urlTipos = 'assets/data/launchmissions.json';
  private urlLanzamientos = 'assets/data/launchlibrary.json';
 

  criterios: Criterio[] = [
    { 'id': 1, 'name': 'Estado' },
    { 'id': 2, 'name': 'Agencias' },
    { 'id': 3, 'name': 'Tipo' }
  ];

  constructor(private http: HttpClient) {
   }


/*  public getStatus$ = (): Observable<any[]> => {
  console.log('getStatus');
  return this.http
  .get(this.urlStatus)
  .pipe(map((res: any) => res.types));
 
 } */
 


 public getAgencias$ = (): Observable<any[]> =>
    this.http
      .get(this.urlAgencias)
      .pipe(map((res: any) => res.agencies))


public getTipos$ = (): Observable<any[]> =>
    this.http
      .get(this.urlTipos)
      .pipe(map((res: any) => res.types))

      public getStatus$ = () => {
        const localstatus = localStorage.getItem(this.key);
        if (localstatus) {
          console.log('if');
        return of(JSON.parse(localstatus));
        } else {
          console.log('else');
          return this.http.get(this.urlStatus).pipe(
            map((res: any) => res.types),
            tap(statuses =>
              localStorage.setItem(this.key, JSON.stringify(statuses))
            )
          );
        }
      }

  /*   public getLaunches$ = () => {
        const localLaunches = localStorage.getItem(this.key);
        if (localLaunches) {
          console.log('if');
          return of(JSON.parse(localLaunches));
        } else {
          console.log('else');
          return this.http.get(this.urlLanzamientos).pipe(
            map((res: any) => res.launches),
            tap(launches =>
              localStorage.setItem(this.key, JSON.stringify(launches))
            )
          );
        }
      } */
 

public getLaunches$ = (): Observable<any[]> =>
this.http.get(this.urlLanzamientos).pipe(map((res: any) => res.launches))

 getCriterios() {
    return this.criterios;
  }
}
