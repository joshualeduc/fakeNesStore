import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
    private _gameUrl = 'http://localhost:59236/api/games'
    constructor(private _http: Http) {

    }

    getGames(): Observable<any[]> {
        return this._http.get(this._gameUrl)
            .map((response: Response) => <any[]> response.json())
            .do(data => console.log(`All: ${JSON.stringify(data)}`))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}