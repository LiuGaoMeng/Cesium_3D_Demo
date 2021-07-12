<template>
    <div id="cesiumContainer"></div>
</template>
<script type="text/javascript">
export default {
     name: 'map',
     data () {
         return {
             tiandituTk:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZmJiMTQzMC0xYjFlLTRlZDktYjI5ZS1mOGIxMzY2ZDQ1NTciLCJpZCI6ODYwOCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MjM3OTcyN30.MSLoEjzlm83XTm1qRlt521SlgoU2jsthi566S6-9m_w'
         }
     },
     mounted(){
         this.initMap()
     },
     methods: {
         initMap(){
             Cesium.Ion.defaultAccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZjg4ZjljZC1mZGM3LTRlZjEtYjg3MC00MjZkNGU3YjI5ZWUiLCJpZCI6MTU5NTIsImlhdCI6MTYwNTE0ODM5OX0.LjxeKrgAo7Ksk8405kSAhYwF0nKcF2w2DGJnKHh51N8'
             let viewer=new Cesium.Viewer('cesiumContainer',{
                 animation:false,//是否创建动画小其间，左下角仪表
                 baseLayerPicker: false, //是否显示图层选择控件按钮 在右上角
                 fullscreenButton :false,//是否显示全屏按钮 在右下角
                 homeButton :false,//是否显示home按钮 在右上角
                 geocoder :false,//是否显示地理搜索按钮 在右上角
                 sceneModePicker:false,//是否显示2D/3D选择器，右上角按钮
                 navigationHelpButton:false,//是否显示帮助按钮 在右上角
                 infoBox :false,//是否显示信息框
                 selectionIndicator:false,//是否展示选取指示器组件
                 timeline:false,//是否显示时间轴
                 scene3DOnly:true,//设置为true。则所有集合图层以3D模式绘制以节约GPU资源
                 //clock:new Cesium.Clock(),//用于控制当前时间的时钟对象
                 shouldAnimate:true,//自动播放动画控件
                 shadows:true,//是否显示光照投影的阴影
                 terrainShadows:Cesium.ShadowMode.RECEIVE_ONLY,//地质接收阴影
                 sceneMode:Cesium.SceneMode.SCENE3D,//初始化渲染3D场景
                 //selectedImageryProviderViewModel:undefined,//当前图像图层的显示模型，仅baseLayerPicker设为true有意义
                 //imageryProviderViewModels:Cesium.createDefaultImageryProviderViewModels(),//可供BaseLayerPicker 选择的图像图层ProviderViewModel数组
                 imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
                    //影像底图
                    url: "http://t{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk="+this.tiandituTk,
                    subdomains: ['0','1','2','3','4','5','6','7'],
                    layer: "tdtImgLayer",
                    style: "default",
                    format: "image/jpeg",
                    tileMatrixSetID: "GoogleMapsCompatible",//使用谷歌的瓦片切片方式
                    show: true
                })

            //      imageryProvider: new Cesium.WebMapTileServiceImageryProvider({//图像图层提供，仅baseLayerPicker为false才可以生效
            //         url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb",
            //         layer: "tdtBasicLayer",
            //         style: "default",
            //         format: "image/jpeg",
            //         tileMatrixSetID: "GoogleMapsCompatible",
            //         show: false
            // })
          })
         },
     }
}

</script>
<style lang='less' scoped>
 #cesiumContainer{
    width: 100%;
    height: 100%;
  }
</style>