<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-08-01 22:55:59
 * @LastEditors: liugm
 * @LastEditTime: 2021-08-02 08:59:59
-->
<template>
  <div id="cesiumContainer"></div>
</template>
<script>
export default {
  name: "cylinder",
  data() {
    return {};
  },
  mounted() {
    this.initLayer();
  },
  methods: {
    initLayer() {
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
      let entity=viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-114, 40, 0),
        cylinder: {
          length: 500000, //圆柱体高度
          topRadius: 300000, //圆柱体顶部半径  可与底部半径不同 生成圆锥
          bottomRadius: 300000, //圆柱体底部半径
          material: Cesium.Color.RED,
          fill:true,
          outline:true,
          outlineColor:Cesium.Color.BLUE,
          outlineWidth:4,
          slices: 100, //圆柱周围圆圈分断数  决定外表平滑程度
          numberOfVerticalLines: 100, //圆柱垂直线分段数
        },
      });
      viewer.trackedEntity=entity
    },
  },
};
</script>