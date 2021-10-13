import { Injectable } from "@angular/core";

declare let alertify : any;

@Injectable()

export class AlertifyService {

    constructor() {}

    success(message : String) {
        alertify.success(message);
    }

    error(message : String) {
        alertify.error(message);    
    }
}