
var async = require('async');

var arr = [1,2,3,4,5,6,7];

var totalRandomTime = 0;
var startTime = new Date().getTime();
async.each(arr, function(item, callback) {
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
> 5
4
3
1
6
2
7
done
total random time 27871.035218704492
total time 7520
[Finished in 7.6s]

可以看到这些都是并行执行的，因为所有的随机时间加起来有 27 秒，但是一共执行了 7 秒多，可以看出来这个 7 秒肯定是所有随机时间中的最大值

进行第二步测试，把所有的随机时间输出

> 1.9869336998090148
9.571895068511367
2.9832415049895644
6.746671439614147
6.40445371856913
5.767288061324507
0.5935689061880112
7
1
3
6
5
4
2
done
total random time 34054.05239900574
total time 9587
[Finished in 9.6s]

可以看到随机时间中的最大值是 9.57...
所以所有都执行完之后，应该得到的时间是 9.5 的样子。

果然 最终，全部执行完的时间为 9.587
*/


