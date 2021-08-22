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
export default {
  name: "ellipsoid",
  data() {
    return {
        viewer:null
    };
  },
  mounted() {
    this.initLayer();
  },
  methods: {
    initLayer() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWI5MGUzNi1mYWI3LTQzY2QtOGI0Ni0xZWYyNTAxNGM4N2MiLCJpZCI6MTI1OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE0NDkyNTV9.hBH0PGSnKErc_yNhIePASUkr3QPDoo0KDX9uLpNBUns";
      this.viewer = new Cesium.Viewer("cesiumContainer", {
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
      this.addEllipsoid()
    },
    addEllipsoid(){
        let entity=this.viewer.entities.add({
            name:"blueSphere",
            position:Cesium.Cartesian3.fromDegrees(-114,40,300000),
            ellipsoid:{
                radii:new Cesium.Cartesian3(200000,200000,300000),//用于指定椭球的半径，三个方向半径不相等就是椭球体
                material:Cesium.Color.BLUE
            }
        })
        this.viewer.entities.add({
            name:"yellowEllipsoid",
            position:Cesium.Cartesian3.fromDegrees(-107,40,300000),
            ellipsoid:{
                radii:new Cesium.Cartesian3(300000,300000,300000),//用于指定椭球的半径，三个方向半径不相等就是椭球体
                material:Cesium.Color.RED.withAlpha(0.5),
                innerRadii:new Cesium.Cartesian3(100000,100000,100000),//球体的内半径，也就是挖掉内球，中间掏空
            }
        })
        this.viewer.entities.add({
            name:"yellowElliposid",
            position:Cesium.Cartesian3.fromDegrees(-100,40,300000),
            ellipsoid:{
                radii:new Cesium.Cartesian3(200000,200000,300000),
                fill:false,
                outline:true,
                outlineColor:Cesium.Color.YELLOW,
                slicePartitions:64,//指定径向切片数量-垂直分段说 可理解为经度
                stackPartitions:64,//指定堆栈数--水平分段数，可理解为纬度
                subdivisions:256,//指定每个轮廓环的样本数，确定曲率的粒度-水平分段数单个的点 越大圆越平滑
            }
        })
        this.viewer.trackerEntity=entity
    }
  },
};
</script>