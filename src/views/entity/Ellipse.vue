<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-08-20 14:04:56
 * @LastEditors: liugm
 * @LastEditTime: 2021-08-20 17:34:20
-->
<template>
  <div id="cesiumContainer"></div>
</template>
<script>
import ellipse from "./img/heart.png"
export default {
  name: "ellipse",
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
        )
      })
      let entity=viewer.entities.add({
          position:Cesium.Cartesian3.fromDegrees(-111,40,150000),
          name:"ellipse",
          ellipse:{
            semiMinorAxis:300000,//短半轴
            semiMajorAxis:300000,//长半轴  短半轴与长半轴相等为圆
            height:200000,
            material:Cesium.Color.GREEN,
            rotation:Cesium.Math.PI_OVER_FOUR
          }
      })
      viewer.entities.add({
        position:Cesium.Cartesian3.fromDegrees(-100,40,150000),
        name:"ellipse",
        ellipse:{
          semiMinorAxis:200000,//短半轴，注意蒜瓣周如果比长半轴小就是椭圆
          semiMajorAxis:300000,//长半轴， 注意长半轴如果比短半轴小会报错
          // height:200000,
          extrudedHeight:20000,//拉伸高度，高度和拉伸高度只能存在一个，表面材质也会拉伸
          material:ellipse,//材质
          rotation:Cesium.Math.toRadians(90),
          stRotation:Cesium.Math.toRadians(90) //纹理同rotation旋转一致
        }
      })
      viewer.trackerEntity=entity
    },
  },
};
</script>