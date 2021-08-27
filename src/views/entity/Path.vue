<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-08-27 15:31:20
 * @LastEditors: liugm
 * @LastEditTime: 2021-08-27 15:49:43
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "Path",
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
        shouldAnimate: true, //自动播放动画控件
        UrlTemplateImageryProvider: new Cesium.WebMapTileServiceImageryProvider({
          url:
            "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
          layer: "tdtImgBasicLayer",
          style: "default",
          format: "image/jpeg",
          tileMatrixSetID: "GoogleMapsCompatible",
          show: false,
        }),
      });
      this.addModel();
    },
    addPath(){//添加路径，路径需要时间节点动态变化
    let start=Cesium.JulianDate.now()//开始时间
    let stop =Cesium.JulianDate.addSeconds(start,360,new Cesium.JulianDate())
    this.viewer.clock.startTime=start.clone() //设置时钟开始时间
    this.viewer.clock.stopTime=stop.clone()//设置时钟结束时间
    this.viewer.currentTime=start.clone()//设置时钟当前时间
    this.viewer.clock.clockRange=Cesium.cLOCKrANGE.LOOP_STOP,//循环执行（2），到达终止时间，从起点重新开始
    this.viewer.clock.multiplier=10//时间速率，数字越大时间走的越快
    this.viewer.timeline.zoomTo(start,stop)//设置时间轴

    },
    addModel() {
      let position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, 10000);
      let heading = Cesium.Math.toRadians(135); //水平左右方向
      let pitch = 0; //垂直上下方向
      let rool = 0; //自身翻滚，沿轴
      let hpr = new Cesium.HeadingPitchRoll(heading, pitch, rool);
      let orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
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
          // silhouetteColor: Cesium.Color.fromAlpha(Cesium.Color.BLUE, 1), //模型轮廓线颜色与透明度
          // silhouetteSize: 3, //模型轮廓大小
          maximumScale: 200, //设置模型最大放大大小
          // color: Cesium.Color.YELLOWGREEN, //指定与模型的渲染颜色混合的Color
          show: true, //模型是否可见
          // colorBlendMode: Cesium.ColorBlendMode.MIX, //颜色混合模式  HIGHLIGHT、REPLACE、MIX
          // colorBlendAmount: 0.6, //颜色混合比例
        },
      });
      this.viewer.trackedEntity = entity;
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
