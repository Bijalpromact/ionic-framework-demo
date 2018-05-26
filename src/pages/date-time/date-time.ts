import { Component } from '@angular/core';


@Component({
    selector: 'date-time',
    templateUrl: 'date-time.html'
})
export class DateTime {
    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }


}
