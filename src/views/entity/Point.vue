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
                UrlTemplateImageryProvider: new Cesium.WebMapTileServiceImageryProvider({
                    url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=d6a72a78a43a2c17294b72ab26354cd6",
                    layer: "tdtImgBasicLayer",
                    style: "default",
                    format: "image/jpeg",
                    tileMatrixSetID: "GoogleMapsCompatible",
                    show: false,
                }),
            });
            let entity = viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(30, 119),
                point: {
                    color: Cesium.Color.PINK,//颜色
                    pixelSize: 10,//像素大小
                    outlineColor:Cesium.Color.YELLOWGREEY,//边框颜色
                    outlineWidth:2,//边框大小
                    heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,//NONE：位置绝对、CLAMP_TO_GROUND：位置固定在地形上。RELATIVE_TO_GROUND：位置高度是指地形上方的高度。
                },
            });
            viewer.trackedEntity=entity
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
