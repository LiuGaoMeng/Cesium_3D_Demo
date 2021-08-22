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
      let entityCorridor = viewer.entities.add({
        corridor: {
          positions: Cesium.Cartesian3.fromDegreesArray([
            //走廊走向数据，经纬度数据转为世界坐标
            -100, 40, -105, 40, -105, 35, -110, 35, -110, 40, -115, 45,
          ]),
          width: 100000, //宽度必须设置
          height: 200000, //高度 设置zIndex时注释
          extrudedHeight: 2000, //拉伸高度  设置zIndex时注释
          material: Cesium.Color.RED,
          cornerType: Cesium.CornerType.ROUNDED, //拐角样式  ROUNDED：角有光滑的边缘、MITERE：拐角点是相邻边的交点  BEVELED：角被修剪
          granularity: Cesium.Math.RADIANS_PER_DEGREE, //指定每个经度、纬度之间的距离
          zIndex: 0, //层级 当为定义height和extrudeHeight且道路为静态时才有效
        },
      });
      viewer.entities.add({
        name:"corridor2",
        corridor: {
          positions: Cesium.Cartesian3.fromDegreesArray([
            //走廊走向数据，经纬度数据转为世界坐标
            -100.0, 40.0, -105, 40, -105, 35, -110, 35, -110, 40, -115, 40,
          ]),
          width: 100000, //宽度必须设置
          height: 200000, //高度   设置zIndex时注释
          extrudedHeight: 2000, //拉伸高度   设置zIndex时注释
          material: Cesium.Color.BLUE,
          cornerType: Cesium.CornerType.BEVELED, //拐角样式
          granularity: Cesium.Math.RADIANS_PER_DEGREE, //指定每个经度、纬度之间的距离
          zIndex: 1, //层级 当未定义height和extrudeHeight且道路为静态时才有效。
        },
      });
      viewer.trackedEntity = entityCorridor;
    },
  },
};
</script>