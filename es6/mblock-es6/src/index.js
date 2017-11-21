import log from './log'

const logCall = log(console.log)
const systemLog = logCall('node')

systemLog('test')

__environment__.sayHello(1)
__environment__.sayHello(2)

console.log(__environment__)
