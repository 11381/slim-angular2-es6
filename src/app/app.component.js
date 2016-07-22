import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<h1>app with es6!</h1>"
})
export class AppComponent {
    constructor(){
        console.log("AppComponent Constructor");
    }
};