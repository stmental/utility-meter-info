import moment from 'moment';

export class App {
    public time: string;
    constructor() {
        this.updateTime();
    }

    private updateTime() {
        this.time = moment(new Date()).format('h:m:ss');
        setTimeout(this.updateTime.bind(this), 1000);
    }
}
