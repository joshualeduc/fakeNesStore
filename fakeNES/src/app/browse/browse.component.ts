import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
    templateUrl: 'app/browse/browse.component.html'
})
export class BrowseComponent implements OnInit {
    gridVeiw: boolean = true;
    listView: boolean = false;
    errorMessage: string;
    nesGames: any[] = [];

    constructor(private _gameService: GameService) {

    }

    ngOnInit(): void {
        this._gameService.getGames()
            .subscribe(nesGames => this.nesGames = nesGames,
                        error => this.errorMessage = <any>error);
    }
}