<template>
<div id="cesiumContainer"></div>
</template>

<script>
export default {
    name: "initmap",
    data() {
        return {
            tiandituTk: "ebf64362215c081f8317203220f133eb",
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            Cesium.Ion.defaultAccessToken =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWI5MGUzNi1mYWI3LTQzY2QtOGI0Ni0xZWYyNTAxNGM4N2MiLCJpZCI6MTI1OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE0NDkyNTV9.hBH0PGSnKErc_yNhIePASUkr3QPDoo0KDX9uLpNBUns";
            var viewer = new Cesium.Viewer("cesiumContainer", {
                baseLayerPicker: false, //图层选择控件
                // animation:false,       //动画
                // homeButton:true,       //home键
                geocoder: true, //地址编码
                scene3DOnly: false, //设置为true 则所有几何图形以3D模式绘制，以节约GPU资源
                // timeline:false,        //时间轴
                // fullscreenButton:true, //全屏显示
                // infoBox:true,         //点击要素之后浮窗
                // sceneModePicker:true,  //投影方式  三维/二维
                // navigationInstructionsInitiallyVisible:false, //导航指令
                // navigationHelpButton:false,     //帮助信息
                // selectionIndicator:false, // 选择
                // clock:new Cesium.Clock(),//用于控制当前时间的时钟对象
                //shouldAnimate:true,//自动播放动画控件
                // shadows:true,//是否显示光照投射的阴影
                // terrainShadows:Cesium.ShadowMode.RECEIVE_ONLY,//地质接收阴影
                sceneMode: Cesium.SceneMode.SCENE3D, //SCENE3D:3d模式 、  SCENE2D：2d模式 、COLUMBUS_VIEW：哥伦布查看模式、  MORPHING：在各种模式之间进行变形
                //selectedImageryProviderViewModel:undefined,//当前图像图层的显示模型，仅baseLayer为true有意义
                // imageryProviderViewModels:Cesium.createDefaultImageryProviderViewModels(),//可供baseLayerPicker选择的图像图层 ProviderVuewModel数组
                // selectedTerrianProviderViewModel:undefined,//当前地形图层的显示模型，仅baseLayerPicker 设为true 有意义
                // terrainProviderViewModels: Cesium.createDefaultTerrianProviderViewModels(),//可供baseLayerPicker选择的地形图层ProviderViewModel数组。仅当baseLayerPicker设置为true时，此值才有效。
                terrainProvider: new Cesium.EllipsoidTerrainProvider(), //地形图形提供者，仅baseLayerPicker为false才有意义
                //  skyBox:new Cesium.SkyBox({
                //    sources:{}
                //  }),//用于渲染 星空的SkyBox
                //  fullscreenElement:document.body,//点击全屏按钮时选的的HTML元素
                //  showRenderLoopErrors:false,//设置为true，将再一个HTML面板中显示错误信息
                //  dataSources:new Cesium.DataSourceCollection(),//需要进行可视化的数据源集合
                // showRenderLoopErrors:false,//设置为true，将在一个HTML面板中显示错误信息
                UrlTemplateImageryProvider: new Cesium.WebMapTileServiceImageryProvider({
                    url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
                    layer: "tdtImgBasicLayer",
                    style: "default",
                    format: "image/jpeg",
                    tileMatrixSetID: "GoogleMapsCompatible",
                    show: false
                    // maximumLevel: 18
                }),
                //图像图层提供者，仅baseLayerPicker为false有意义
                // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
                //   url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
                //   layer: "tdtImgBasicLayer",
                //   style: "default",
                //   format: "image/jpeg",
                //   tileMatrixSetID: "GoogleMapsCompatible",
                //   show: false,
                //   // maximumLevel: 18
                // }),

            });
            viewer._cesiumWidget._creditContainer.style.display = "none" //左下角cesium 图标隐藏，去除版权信息
        },
    },
};
</script>

<style lang="less" scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
}
</style>
