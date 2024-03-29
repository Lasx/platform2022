﻿//工具栏
util.fixbar({
    bar1: '<li class="layui-icon" lay-type="bar1" id="utilbar1" style="margin:5px;border-radius:5px;background-color:#303336"><svg t="1647938298678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1324" width="50" height="50"><path d="M824.040339 789.84644584L232.62693201 198.43303886A23.50998078 23.50998078 0 0 0 215.52876411 191.41057735 24.1206294 24.1206294 0 0 0 191.4081347 215.53120675V808.16591159a24.42595369 24.42595369 0 0 0 24.12062941 24.42595371h592.94002914a23.81530508 23.81530508 0 0 0 18.3194651-8.54908365 24.1206294 24.1206294 0 0 0-2.74791935-34.19633581z m-584.08562117-5.80116367V274.15349564l23.50998077 23.50998078-3.96921783 3.96921783a20.1514122 20.1514122 0 1 0 28.70049584 28.39517089l3.66389352-3.66389289 43.66139237 43.35606806-19.23543866 19.23543864a20.1514122 20.1514122 0 0 0-5.80116429 14.04492362 20.4567365 20.4567365 0 0 0 20.1514122 20.45673588 19.84608726 19.84608726 0 0 0 13.4342744-6.10648795l18.93011433-18.93011436L407.57782638 441.77660419 405.1352307 445.74582139a20.1514122 20.1514122 0 1 0 28.70049582 28.39517154L435.66767297 470.47710001l43.66139236 43.35606806-19.23543867 19.23543866a20.4567365 20.4567365 0 0 0 1e-8 28.39517092 21.37270942 21.37270942 0 0 0 14.35024793 5.80116427 20.7620608 20.7620608 0 0 0 14.35024792-5.80116427l18.93011435-18.93011436 43.66139236 43.35606804-3.96921721 3.96921784a20.1514122 20.1514122 0 0 0 14.35024791 34.50165948 20.4567365 20.4567365 0 0 0 14.35024731-6.10648795l3.6638935-3.66389353 43.66139236 43.35606805-19.23543864 19.23543865A20.1514122 20.1514122 0 0 0 618.86232667 710.46209615a20.7620608 20.7620608 0 0 0 14.35024792-5.80116427l18.93011434-18.93011373 43.66139236 43.35606805-3.96921783 3.96921722a20.1514122 20.1514122 0 1 0 28.70049585 28.39517152l3.66389353-3.96921783 25.64725153 25.64725154z" p-id="1325" fill="#ffffff"></path><path d="M365.44305556 541.00704176a23.50998078 23.50998078 0 0 0-17.09816729-7.02246211 24.42595369 24.42595369 0 0 0-24.1206294 24.12062939v117.2445784a24.42595369 24.42595369 0 0 0 24.1206294 24.42595369H466.20011526a24.42595369 24.42595369 0 0 0 24.1206294-24.42595369 23.81530508 23.81530508 0 0 0-8.54908363-18.31946514z m7.32778639 110.22211629v-34.50165948l34.50165948 34.50165948z" p-id="1326" fill="#ffffff"></path></svg></li>'
    , bar2: '<li class="layui-icon" lay-type="bar2" id="utilbar2" style="margin:5px;border-radius:5px;background-color:#303336"><svg t="1647938518774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1294" width="50" height="50"><path d="M810.80162904 840.66946683h-312.23599352a29.58025203 29.58025203 0 0 1 0-59.16050403h312.23599352a29.58025203 29.58025203 0 1 1 0 59.16050403zM758.71573529 325.33217631L325.80053031 758.24738128l-72.39766679 12.40727239L265.4978999 697.69824875l432.79195391-432.79195391 60.42588148 60.42588148m74.3696836-9.29312919L707.55833277 190.53661122a13.14677869 13.14677869 0 0 0-18.58625838 0L216.6083167 662.92501917a28.02728879 28.02728879 0 0 0-7.80589985 15.25026326l-21.32243165 128.37007701a26.29355734 26.29355734 0 0 0 30.40192566 30.22115749l127.67165441-21.87295304a28.10123939 28.10123939 0 0 0 15.102362-7.8223333l472.46235857-472.46235857a13.14677869 13.14677869 0 0 0 0-18.59447509z" p-id="1295" fill="#ffffff"></path></svg></li>'
    , bgcolor: '#393D49'
    , click: function (type) {
        if (type === 'bar1') {
            //测量工具
            Measurewidget();
        }
        else if (type === 'bar2') {
            //标注工具
            Markwidget(currentprojectid);
        }
    }
});


//提示
$("#utilbar1").on("mouseenter", function () {
    if (tipslayer == -1) {
        tipslayer = layer.tips('测量工具', '#utilbar1', {
            tips: [4, '#78BA32']
        });
    }
});
$("#utilbar1").on("mouseleave", function () {
    if (tipslayer != -1) {
        layer.close(tipslayer);
        tipslayer = -1;
    }
});

$("#utilbar1").on("mouseenter", function () {
    if (tipslayer == -1) {
        tipslayer = layer.tips('标注工具', '#utilbar1', {
            tips: [4, '#78BA32']
        });
    }
});
$("#utilbar1").on("mouseleave", function () {
    if (tipslayer != -1) {
        layer.close(tipslayer);
        tipslayer = -1;
    }
});