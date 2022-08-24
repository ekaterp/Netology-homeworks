class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error ("Получено некорректное значение  Id " + id);
        }
        if (this.alarmCollection.some(x => x.alarmId === id)) {
            console.error('Введенный Id уже существует');
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
        const checkClock = (alarm) => {
            console.log(`Checking alarm ${alarm.alarmId} / ${alarm.alarmTime}`);
            if (this.getCurrentFormattedTime() === alarm.alarmTime) {
                console.warn("Alarm occurred: " + alarm.alarmId);
                alarm.funcName();
            }
        }
        if (this.timerId === null) {
            console.log("Starting alarm interval");
            this.timerId = setInterval(() => {
                this.alarmCollection.map(checkClock);
            }, 1000);
        }
    }

    stop() {
        if (this.alarmId !== null) {
            clearInterval(this.alarmId);
            this.alarmId = null;
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

function testCase() {
    console.log("testcase start");
    let alarm = new AlarmClock();
    console.log("staring alarm");
    alarm.start();
    alarm.addClock("23:39", () => {console.log("Доброе утро!")}, 1);
    alarm.addClock("23:39", () => {console.log("Подьем!"); alarm.removeClock(2)}, 2);
    alarm.addClock("23:40", () => {alarm.printAlarms(); alarm.stop(); alarm.clearAlarms(); alarm.printAlarms();}, 3);
    alarm.printAlarms();
    console.log("testcase end");
}

testCase();