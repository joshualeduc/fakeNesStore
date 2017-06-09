import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
    templateUrl: 'app/browse/browse.component.html' 
})
export class BrowseComponent implements OnInit {
    gridView: boolean = true;
    listView: boolean = false;
    errorMessage: string;
    games: any[] = [];

    constructor(private _gameService: GameService) {

    }

    ngOnInit(): void {
        this._gameService.getGames()
            .subscribe(games => this.games = games,
            error => this.errorMessage = <any>error);
    }
}