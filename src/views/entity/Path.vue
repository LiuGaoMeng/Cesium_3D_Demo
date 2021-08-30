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
  name: "path",
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
      this.addPath();
    },
    addPath() {
      // debugger
      //添加路径，路径需要时间节点动态变化
      let start = Cesium.JulianDate.now(); //开始时间
      let stop = Cesium.JulianDate.addSeconds(
        start,
        360,
        new Cesium.JulianDate()
      );
      this.viewer.clock.startTime = start.clone(); //设置时钟开始时间
      this.viewer.clock.stopTime = stop.clone(); //设置时钟结束时间
      this.viewer.currentTime = start.clone(); //设置时钟当前时间
      this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //循环执行（2），到达终止时间，从起点重新开始
      this.viewer.clock.multiplier = 10; //时间速率，数字越大时间走的越快
      this.viewer.timeline.zoomTo(start, stop); //设置时间轴
      let posions = this.computePath(-123.0744619, 44.0503706, start);
      this.addPathModel(posions, start, stop);
    },
    computePath(lon, lat, start) {
      let property = new Cesium.SampledPositionProperty();
      for (let i = 0; i < 10; i++) {
        let time = Cesium.JulianDate.addSeconds(
          start,
          i * 60,
          new Cesium.JulianDate()
        );
        let position = Cesium.Cartesian3.fromDegrees(lon, lat + i * 0.1, 1750);
        property.addSample(time, position);
        
      }
      return property;
    },
    addPathModel(posions, start, stop) {
      let entity = this.viewer.entities.add({
        position: posions, //这里的position为new Cesium.SampledPositionProperty
        orientation: new Cesium.VelocityOrientationProperty(posions), //根据所提供的速度计算模型的朝向
        // viewForm:new Cesium.Cartesian3(0,0,0),
        availability: new Cesium.TimeIntervalCollection([
          new Cesium.TimeInterval({
            //和时间轴关联
            start: start,
            stop: stop,
          }),
        ]),
        model: {
          uri: "../models/Cesium_Air.glb",
          //模型最小刻度
          scale: 50,
          minimumPixelSize: 32, //指定模型的最小像素大小，而不考虑缩放
          maximumSize: 128, //模型最大比例尺大小，minimumPixelSize的上限
          runAnimations: true, //指定是否应启动模型中指定glTF动画
          // clampAnimations: true, //指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势
          // silhouetteColor: Cesium.Color.fromAlpha(Cesium.Color.BLUE, 1), //模型轮廓线颜色与透明度
          // silhouetteSize: 3, //模型轮廓大小
          maximumScale: 200, //设置模型最大放大大小
          // color: Cesium.Color.YELLOWGREEN, //指定与模型的渲染颜色混合的Color
          show: true, //模型是否可见
          // colorBlendMode: Cesium.ColorBlendMode.MIX, //颜色混合模式  HIGHLIGHT、REPLACE、MIX
          // colorBlendAmount: 0.6, //颜色混合比例
        },
        path: {
          show: true,
          resolution: 60, //指定在对该位置进行采样时要移动的最大秒数
          leadTime: 0, //显示path前面的秒数
          trailTime: 10, //显示path尾部的秒数
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 1,
            color: Cesium.Color.ORANGE,
          }),
          width: 3,
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
