<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-07-19 09:00:25
 * @LastE s: liugm
 * @LastEditTime: 2021-07-19 18:29:38
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "Point",
  data() {
    return {
      viewer: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWI5MGUzNi1mYWI3LTQzY2QtOGI0Ni0xZWYyNTAxNGM4N2MiLCJpZCI6MTI1OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE0NDkyNTV9.hBH0PGSnKErc_yNhIePASUkr3QPDoo0KDX9uLpNBUns";
       this.viewer = new Cesium.Viewer("cesiumContainer", {
        baseLayerPicker: false, //图层选择控件
        UrlTemplateImageryProvider: new Cesium.WebMapTileServiceImageryProvider(
          {
            url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
            layer: "tdtImgBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: false,
          }
        ),
      });
      this.addModel()
      
    },
    addModel(){
        let position = Cesium.Cartesian3.fromDegrees(
        -123.0744619,
        44.0503706,
        10000
      );
      let heading = Cesium.Math.toRadians(135); //水平左右方向
      let pitch = 0; //垂直上下方向
      let rool = 0; //自身翻滚，沿轴
      let hpr = new Cesium.HeadingPitchRoll(heading, pitch, rool);
      let orientation = Cesium.Transforms.headingPitchRollQuaternion(
        position,
        hpr
      );
      let entity = this.viewer.entities.add({
         name: "model",
        position: position,
        Orientation: orientation, //公共属性，朝向
        model: {
          uri: "../models/Cesium_Air.glb",
          //模型最小刻度
          scale: 50,
          minimumPixelSize: 32, //指定模型的最小像素大小，而不考虑缩放
          maximumSize: 128, //模型最大比例尺大小，minimumPixelSize的上限
          runAnimations: true, //指定是否应启动模型中指定glTF动画
          clampAnimations: true, //指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势
          silhouetteColor: Cesium.Color.fromAlpha(Cesium.Color.BLUE, 1), //模型轮廓线颜色与透明度
          silhouetteSize: 3, //模型轮廓大小
          maximumScale: 200, //设置模型最大放大大小
          color: Cesium.Color.YELLOWGREEN, //指定与模型的渲染颜色混合的Color
          show: true, //模型是否可见
          colorBlendMode: Cesium.ColorBlendMode.MIX, //颜色混合模式  HIGHLIGHT、REPLACE、MIX
          colorBlendAmount: 0.6, //颜色混合比例
        },
      });
      console.log(this.viewer);
      this.viewer.trackedEntity = entity;
    }
  },
};
</script>

<style lang="less" scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
