<template>
  <div id="cesiumContainer"></div>
</template>
<script type="text/javascript">
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
        // animation:false,       //动画
        // homeButton:true,       //home键
        // geocoder:true,         //地址编码
        baseLayerPicker: false, //图层选择控件
        // timeline:false,        //时间轴
        // fullscreenButton:true, //全屏显示
        // infoBox:true,         //点击要素之后浮窗
        // sceneModePicker:true,  //投影方式  三维/二维
        // navigationInstructionsInitiallyVisible:false, //导航指令
        // navigationHelpButton:false,     //帮助信息
        // selectionIndicator:false, // 选择
        UrlTemplateImageryProvider:new Cesium.WebMapTileServiceImageryProvider({
              url:
                "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
              layer: "tdtImgBasicLayer",
              style: "default",
              format: "image/jpeg",
              tileMatrixSetID: "GoogleMapsCompatible",
              show: false
              // maximumLevel: 18
            }),
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
    },
  },
};
</script>
<style lang='less' scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
  