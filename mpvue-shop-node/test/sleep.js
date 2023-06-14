// 方法一：直接用定时器实现
// function sleep(callback,time){
//     setTimeout(callback,time)
// }

// var start = new Date().getTime()

// function output(){
//     console.log('1111');
//     var end = new Date().getTime()
//     console.log(`${end - start}ms`);
// }

// sleep(output,2000)


// 方法二：使用promise+then 实现
// function sleep(time){
//     return new Promise(resolve=>{
//         setTimeout(resolve,time)
//     })
// }

// var start = new Date().getTime()

// sleep(2000).then(()=>{
//     console.log('start',start);
//     var end = new Date().getTime()
//     console.log(`${end - start}ms`);
// })


// 方法三：使用async/await实现
function sleep(time){
    return new Promise(resolve=>{
        setTimeout(resolve,time)
    })
}
var start = new Date().getTime() 

async function output(){
    await sleep(2000)
    var end = new Date().getTime()
    console.log(`${end - start}ms`);
}

output()



// 注意：为什么输出结果不是2000ms?(为什么定时器执行后会存在时间误差)
// 因为setTimeout属于宏任务，在执行宏任务之前如果当前执行栈中在执行的任务超过了定时器设定的时间，是可能存在误差的