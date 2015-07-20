// eachLimit


var async = require('async');

var arr = [1,2,3,4,5,6,7];

var totalRandomTime = 0;
var startTime = new Date().getTime();

/**
 * @param  {Array}
 * @param  {Number}     limit   
 * @param  {Function}   iterator 对应每个 Item 的处理事件
 * @param  {Function}   callback 所有都完成后，回调
 */
async.eachLimit(arr, 2, function(item, callback) {
    //随机数
    var random = Math.random();
    totalRandomTime += random;
    console.log(random * 10);
    setTimeout(function() {
        console.log(item);
        callback();    
    }, random * 10 * 1000);
    
}, function(err) {
    if(err) {
        console.log('err occur:', err);
    }else {
        console.log('done');
        console.log("total random time", totalRandomTime * 10 * 1000);
        var endTime = new Date().getTime();
        console.log("total time", endTime-startTime);
    }
});


/**
我们先假定 limit 为 2，从下面的结果我们可以清晰的看到，刚开始一下子开启了两个任务，当一个任务执行完之后，就立刻会有新的任务加进来，当前执行的任务总数保持在 2 个。
如果我们指定 limit 为 3，那么可以猜到的结果是，程序开始执行，立刻会有三个任务开启，也就是马上回输出三个随机数，然后执行完一个任务，就会有一个新的回调加进来。

>6.6369074722751975
3.276398265734315
2
4.922849433496594
1
0.47372023575007915
4
4.67138797044754
3
7.704708182718605
5
6.845167716965079
6
7
done
total random time 34531.13927738741
total time 18643
[Finished in 18.7s]
 */