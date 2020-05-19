// 示例作业提交

// 第九题

setTimeout(function () {
    var a = "hello";
    setTimeout(function () {
        var b = "lagou";
        setTimeout(function () {
            var c = "I love U";
            console.log(a + b + c)
        }, 10)
    }, 10)
}, 10)

Promise.resolve('hello').then("lagou").then("I love U").then((res) => {
    console.log(res)
})


const getAsyncWord = function (word) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(word);
        }, 10)
    })
}
getAsyncWord('hello').then(function (word) {
    return getAsyncWord(word + 'lagou')
}).then(function (word) {
    return getAsyncWord(word + "I love U")
}).then(function (word) {
    console.log(word);
})