module.exports = {
    firstUpperCase: function (str) {
        let output = str.trim().split('')
        output[0] = output[0].toUpperCase()
        output = output.join('')
        return output
    },
    getInputName: function (input) {
        let name
        if (typeof input === 'object') {
            name = input.key
        }
        else {
            name = input
        }
        return name
    },
    defaultSync: function (arg, callback) {
        let event = arg[0]
        let isEvent = typeof event.target !== 'undefined' && typeof event.target.setAttribute === 'function'
        if (isEvent) {
            if (typeof event.target.checked !== 'undefined') {
                callback(event.target.checked)
            }
            else {
                callback(event.target.checked)
            }
        }
        else {
            callback(arg[0])
        }
    }
}
