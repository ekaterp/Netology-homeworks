class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (isNaN(id)) {
            throw new Error ("Получено некорректное значение  Id " + id);
        }
        if (this.alarmCollection.some(x => x.alarmId === id)) {
            console.error ('Введенный Id уже существует');
            return;
        }
        this.alarmCollection.push({alarmTime: time, funcName: callback, alarmId: id});
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(obj => obj.alarmId !== id);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        function addLeadingZero(s) {
            if (s.length == 1) {
                s = "0" + s;
            }
            return s;
        }
        return addLeadingZero(String(now.getHours())) + ":" + addLeadingZero(String(now.getMinutes()));
    }

    start() {
        function checkClock () {
            if (getCurrentFormattedTime === this.alarmCollection.alarmTime) {

            }
        }
    }

    stop() {
        function clearInterval() {
            this.alarmCollection.alarmId = "";
            this.alarmCollection.alarmTime = "";
        }
        if (!isNaN(this.alarmCollection.alarmId)) {
            clearInterval();
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(`Id: ${item.alarmId}, Time: ${item.alarmTime}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        this.alarmId = null;
    }

}

let phoneAlarm = new AlarmClock;
phoneAlarm.addClock("10:00", () => console.log("Доброе утро!"), 001);
phoneAlarm.addClock("10:01", () => {console.log("Подьем!"); phoneAlarm.removeClock(002)}, 002);
phoneAlarm.addClock("10:02", () => {phoneAlarm.printAlarms; phoneAlarm.stop; phoneAlarm.clearAlarms; phoneAlarm.printAlarms;}, 003);
phoneAlarm.printAlarms;
