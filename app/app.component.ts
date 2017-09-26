import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
const backaddon = require("back-addon");

enableProdMode();

@Component({
    selector: 'cm-app',
    templateUrl: 'app/app.html'
})
export class AppComponent implements OnInit {


    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

}