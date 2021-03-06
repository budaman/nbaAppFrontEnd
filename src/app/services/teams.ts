import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';




@Injectable()

export class TeamsService {

  constructor(private _http: Http) { }

  getTeams() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this._http.get('http://localhost:3000/teams/getTeams', {headers: headers})
    .map(res => res.json())
  }
}
