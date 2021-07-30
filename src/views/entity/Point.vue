<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-07-19 09:00:25
 * @LastE s: liugm
 * @LastEditTime: 2021-07-30 18:24:56
-->
<template>
  <div id="cesiumContainer"></div>
</template>
<script type="text/javascript">
export default {
  name: "Point",
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
      let viewer = new Cesium.Viewer("cesiumContainer", {
        baseLayerPicker: false, //图层选择控件
        UrlTemplateImageryProvider:new Cesium.WebMapTileServiceImageryProvider({
              url:
                "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
              layer: "tdtImgBasicLayer",
              style: "default",
              format: "image/jpeg",
              tileMatrixSetID: "GoogleMapsCompatible",
              show: false
            })
      });
      let entity=viewer.entities.add({
        position:Cesium.Cartesian3.fromDegrees(30,119,100000),
        point:{
          color:Cesium.Color.PINK,
          pixelSize:100
        }
      })
      viewer.trackedEntity=entity
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
  