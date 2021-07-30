<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-07-30 18:20:00
 * @LastEditors: liugm
 * @LastEditTime: 2021-07-30 18:25:13
-->
<template>
<div id="cesiumContainer"></div>
</template>
<script>
export default {
  name: "corridor",
  data() {
    return {};
  },
  mounted() {
    this.initView();
  },
  methods: {
    initView() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWI5MGUzNi1mYWI3LTQzY2QtOGI0Ni0xZWYyNTAxNGM4N2MiLCJpZCI6MTI1OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE0NDkyNTV9.hBH0PGSnKErc_yNhIePASUkr3QPDoo0KDX9uLpNBUns";
      let viewer = new Cesium.Viewer("cesiumContainer", {
        baseLayerPicker: false, //图层选择控件
        UrlTemplateImageryProvider: new Cesium.WebMapTileServiceImageryProvider(
          {
            url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
            layer: "tdtImgBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: false,
          }
        ),
      });
        let entity = viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(30, 119, 100000),
          point: {
            color: Cesium.Color.PINK,
            pixelSize: 100,
          },
        });
       viewer.trackedEntity=entity
    },
  },
};
</script>