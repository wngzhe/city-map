// var geeMetadata = new Cesium.GoogleEarthEnterpriseMetadata('http://www.earthenterprise.org/3d');
// var gee = new Cesium.GoogleEarthEnterpriseImageryProvider({
//     metadata: geeMetadata
// });

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZGE5MmI2Yy1jZmVmLTQyZGUtYjk4Ni02ODBiYWFiZDZkOGYiLCJpZCI6MjU3MDQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODY0MjQyMDR9.dx-BAVwhWMWfgJb49x2XZEVP-EjFxMvihn8Lca6EXYU";
var viewer = new Cesium.Viewer("cesium", {
  animation: false,
  fullscreenButton: false,
  homeButton: false,
  infoBox: false,
  timeline: false,
  selectionIndicator: false,
  // imageryProvider: new Cesium.UrlTemplateImageryProvider({
  //     url: "https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
  // }),
  // imageryProvider:gee,
  // imageryProvider: new Cesium.OpenStreetMapImageryProvider({
  //     url: 'https://a.tile.openstreetmap.org/'
  // }),
  // vrButton:true,
  baseLayerPicker: true,
  navigationHelpButton: true,
  navigationInstructionsInitiallyVisible: false,
  shouldAnimate: true,
  geocoder: false,
  sceneModePicker: false,
  terrainProvider: Cesium.createWorldTerrain({
    // requestWaterMask: true,
    // requestVertexNormals: true
  }),
  // terrainProvider: new Cesium.CesiumTerrainProvider({
  //     url: Cesium.IonResource.fromAssetId(3956),
  //     requestVertexNormals: true
  // }),
});

viewer.extend(Cesium.Cesium.viewerCesiumInspectorMixin);
viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);
// console.log(viewer)
// viewer.camera.flyTo()
// viewer.camera.setView({
//     destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 30000),
//     orientation: {
//         heading: Cesium.Math.toRadians(0.0), // east, default value is 0.0 (north)
//         pitch: Cesium.Math.toRadians(-45),    // default value (looking down)
//         roll: 0.0                             // default value
//     }
// })
viewer.camera.setView({
  destination: new Cesium.Cartesian3(
    1334085.549866987,
    -4659559.275680639,
    4138150.531476112
  ),
  orientation: {
    heading: 0.33397931832136774, // east, default value is 0.0 (north)
    pitch: -0.6825392556180025, // default value (looking down)
    roll: 0.0, // default value
  },
});
// var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: "https://assets.cesium.com/75343/tileset.json?v=1" }))
var city = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(75343) })
);
// viewer.flyTo()

city.style = new Cesium.Cesium3DTileStyle({
  color: {
    conditions: [
      ["${Height} >= 100", 'color("purple", 0.5)'],
      ["${Height} >= 50", 'color("red")'],
      ["true", 'color("blue")'],
    ],
  },
  show: "${Height} > 0",
  meta: {
    description: '"Building id ${id} has height ${Height}."',
  },
});

// var s = 1
// setInterval(() => {
//     if (s === 1) {
//         city.style = new Cesium.Cesium3DTileStyle({
//             color: {
//                 conditions: [
//                     ['${Height} >= 100', 'color("purple", 0.5)'],
//                     ['${Height} >= 50', 'color("red",0.8)'],
//                     ['true', 'color("blue",1)']
//                 ]
//             },
//             show: '${Height} > 0',
//             meta: {
//                 description: '"Building id ${id} has height ${Height}."'
//             }
//         });
//     } else if (s === 2) {
//         city.style = new Cesium.Cesium3DTileStyle({
//             color: {
//                 conditions: [
//                     ['${Height} >= 100', 'color("purple", 0.8)'],
//                     ['${Height} >= 50', 'color("red",0.5)'],
//                     ['true', 'color("blue",1)']
//                 ]
//             },
//             show: '${Height} > 0',
//             meta: {
//                 description: '"Building id ${id} has height ${Height}."'
//             }
//         });
//     } else {
//         city.style = new Cesium.Cesium3DTileStyle({
//             color: {
//                 conditions: [
//                     ['${Height} >= 100', 'color("purple", 0.8)'],
//                     ['${Height} >= 50', 'color("red", 1)'],
//                     ['true', 'color("blue")']
//                 ]
//             },
//             show: '${Height} > 0',
//             meta: {
//                 description: '"Building id ${id} has height ${Height}."'
//             }
//         });
//     }
//     s += 1
//     if (s > 3) {
//         s = 1
//     }

// }, 1000);
setTimeout(function () {
  document.getElementsByClassName("cesium-viewer-bottom")[0].innerHTML = "";
}, 0);

console.log(viewer.camera);
