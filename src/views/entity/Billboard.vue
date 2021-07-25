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
import billIma from './img/billboard.jpg'
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
                position: Cesium.Cartesian3.fromDegrees(30, 119,1000),
                point: {
                    color: Cesium.Color.PINK,//颜色
                    pixelSize: 10,//像素大小
                     heightReference:Cesium.HeightReference.NONE,//相对于地形的位置。RELATIVE_TO_GROUND固定在地形上
                },
                billboard:{
                    image:billIma,//用于广告牌的Image，URI或Canvas的属性
                    show:true,//是否展示
                    scale:1,//放大倍数
                    // sizeInMeters:true,//获取或设置布尔属性,指定此广告牌的大小是否以米为单位
                    // pixelOffset:new Cesium.Cartesian2(100,200),//像素偏移  基于平面
                    // eyeOffset:new Cesium.Cartesian3(0,100000,0),//视野偏移  基于三维场景 有Z值
                    // horizontalOrigin:Cesium.HorizontalOrigin.RIGHT,//相对对象的原点的水平位置
                    // verticalOrigin:Cesium.VerticalOrigin.TOP,//相对于对象的原点的垂直位置
                    heightReference:Cesium.HeightReference.RELATIVE_TO_GROUND,//NONE：位置绝对、CLAMP_TO_GROUND：位置固定在地形上。RELATIVE_TO_GROUND：位置高度是指地形上方的高度。
                    color:Cesium.Color.YELLOW.withAlpha(0.5),//图像颜色和透明度
                    // rotation:Cesium.Math.PI_OVER_TWO,//旋转角度
                    // alignedAxis:Cesium.Cartesian3.UNIT_X,
                    width:100,//广告牌宽度覆盖之前，默认地像素值
                    height:100,//广告牌高度，覆盖之前的默认的像素值
                    // scaleByDistance:new Cesium.NearFarScalar(1.5e2,2.5,8.0e6,0),//该属性根据距摄像机的距离来指定广告牌的比例
                    // translucencyByDistance:new Cesium.NearFarScalar(1.5e2,1.0,8.0e6,0),//根据距离摄像头的距离来指定广告牌的透明度
                    pixelOffsetScaleByDistance:new Cesium.NearFarScalar(1.5e2, 0.0, 8.0e6, 10000.0),
                    // distanceDisplayCondition:new Cesium.DistanceDisplayCondition(100000,2000000),//根据相机与广告牌远近确定可见性
                    // disableDepthTestDistance:Number.POSITIVE_INFINITY,//获取或设置与相机的距离，在深度处禁用深度测试，例如，以防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时为无穷大，永远不会应用深度测试。

                }
            });
            // viewer.trackedEntity=entity

            //   this.cloneEntity(entity,viewer)//复制
            //   this.mergeEntity(entity)//合并

        },
         /**
             * 复制
             */
        cloneEntity(entity,viewer){
            let clone = entity.billboard.clone()//克隆
            let cloneEntity=new Cesium.Entity()
            cloneEntity.position=Cesium.Cartesian3.fromDegrees(-90,40.5)
            cloneEntity.billboard=clone
            viewer.entities.add(cloneEntity)

        },
         /**
             * 合并
             */
        mergeEntity(entity){
            //将entity中的billboard属性合并给创建为空的BillboardGraphics
            let billboardGrapgics=new Cesium.BillboardGraphics()
            billboardGrapgics.merge(entity.billboard)
            console.log(billboardGrapgics);

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
