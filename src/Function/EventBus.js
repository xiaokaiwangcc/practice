export class EventBus{
    constructor() {
        this.eventObject = {};
        this.callbackId = 0;
    }

    on (key, cb){
        let callId = this.callbackId ++;
        if (!this.eventObject[key]) {
            this.eventObject[key] = {}
        }
        this.eventObject[key][callId] = cb
        return callId
    }

    emit (key, ...arg){
        const eventList = this.eventObject[key]
        for (const eventListKey in eventList) {
            // 如果是once跳过执行
            eventList[eventListKey](...arg)
            let onceFlag = eventListKey.indexOf('D')
            if (onceFlag !== -1){
                delete eventList[eventListKey]
            }
        }
    }

    once (key, cb){
        if (!this.eventObject[key]){
            this.eventObject[key] = {}
        }
        let callId = `D+${this.callbackId}`
        this.callbackId++
        this.eventObject[key][callId] = cb
        return callId
    }

    off (key, callId){
        delete this.eventObject[key][callId]
        console.log(key, '取消订阅成功！')
        // 优化
        if (!Object.keys(this.eventObject[key]).length) {
            delete this.eventObject[key]
        }
    }
}