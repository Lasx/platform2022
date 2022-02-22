﻿
/*
 * 加载3d tiles模型
 */
function LoadModel(obj) {
    var modelurl = datasurl + "/AllModel/" + obj.path;
    //删除上一个模型（保证只有一个模型）
    
    if (curtileset != null) {
        viewer.scene.primitives.remove(curtileset);
    }

    //添加模型
    curtileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: modelurl,
        maximumScreenSpaceError: isMobile.any() ? 1 : 1,
        maximumNumberOfLoadedTiles: isMobile.any() ? 1000 : 1000
    }));

    //缩放至模型
    //判断是否有最佳视角
    if (obj.modelView != null && obj.modelView.length > 0) {
        var home = JSON.parse(obj.modelView);
        viewer.scene.camera.setView(home);
    } else {
        viewer.zoomTo(curtileset);
    }

    //测量工具测量类型（跳转到模型测量）
    viewer.scene.globe.depthTestAgainstTerrain = false;
    elem.tabChange('measureway', 'modelMeasure');//模型测量
};
