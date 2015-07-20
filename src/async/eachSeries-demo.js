
var async = require('async');

var arr = [1,2,3,4,5,6,7];

var totalRandomTime = 0;
var startTime = new Date().getTime();
async.eachSeries(arr, function(item, callback) {
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
 
>4.180718408897519
1
3.576695721130818
2
4.2796194716356695
3
7.435196952428669
4
3.812564183026552
5
2.3189348191954195
6
5.559395356103778
7
done
total random time 31163.124912418425
total time 31185
[Finished in 31.2s]

从执行的结果来看，很容易就联想到，这是串行执行，
所以所有异步执行完之后的总时间 = 所有随机时间之和。
 */