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
      this.addLabel()
    },
    addLabel(){
        let entity=this.viewer.entities.add({
            position:Cesium.Cartesian3.fromDegrees(-107,40,300),
            point:{
                color:Cesium.Color.RED,//点位颜色
                pixelSize:10//像素点大小
            },
            label:{
                pixelOffset:new Cesium.Cartesian2(15,-97),//偏移量
                text:"Hello Cesium \n LabelGraphics",
                font:'14pt Source Han Sans CN',//字体样式
                fillColor:Cesium.Color.BLACK,
                backgroundColor:Cesium.Color.RED,//背景颜色
                showBackground:true,//是否显示背景颜色
                style:Cesium.LabelStyle.FILL,
                outlineWidth:2,
                verticalOrigin:Cesium.VerticalOrigin.CENTER,//垂直位置
                horizontalOrigin:Cesium.HorizontalOrigin.LEFT,//水平位置
                // pixelOffset:new Cesium.Cartesian2(10,0),

            }
        })
        this.viewer.trackerEntity=entity
    }
  },
};
</script>