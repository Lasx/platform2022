﻿//ETL widget
function LoadETLLayer() {


    var etllayerindex = layer.open({
        type: 1
        , title: ['ETL管理', 'font-weight:bold;font-size:large;font-family:	Microsoft YaHei']
        , area: ['800px', '600px']
        , shade: 0
        , offset: 'auto'
        , closeBtn: 1
        , maxmin: true
        , moveOut: true
        , content: '<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBriefitem" style="margin:0px;width:100%;height:100%;"><ul class="layui-tab-title" style="float: left;width:20%;border-color:white;"><li class="layui-this" style="display: block;">监测设备</li><li style="display: block;">监测数据库</li><li style="display: block;">ETL SQL</li><li style="display: block;">设备厂家</li><li style="display: block;">设备经销商</li></ul><div class="layui-tab-content" style="width:80%;float: left;border-left:solid;border-left-color:#e6e6e6;border-left-width:1px;"><div class="layui-tab-item layui-show"><!--监测设备--></div><div class="layui-tab-item"><!--监测数据库--><div class="layui-fluid"><div class="layui-card"><div class="layui-card-body"><div style="padding-bottom: 10px;"><button id="adddatabase" class="layui-btn layuiadmin-btn-useradmin" data-type="add">添加新监测数据库</button></div><table id="LAY-database-manage" lay-filter="LAY-database-manage"></table><script type="text/html" id="table-toolbar-database"><a class="layui-btn layui-btn-normal layui-btn-xs" lay-event="databaseedit"><i class="layui-icon layui-icon-edit"></i>编辑</a><a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="databasedel"><i class="layui-icon layui-icon-delete"></i>删除</a></script></div></div></div></div><div class="layui-tab-item"><!--ETL SQL--></div><div class="layui-tab-item"><!--设备厂家--></div><div class="layui-tab-item"><!--设备经销商--></div></div></div>'
        , zIndex: layer.zIndex
        , success: function (layero) {
            //置顶
            layer.setTop(layero);
        }
    });






}