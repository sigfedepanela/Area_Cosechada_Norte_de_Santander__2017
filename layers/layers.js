var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_NortedeSantander_1 = new ol.format.GeoJSON();
var features_NortedeSantander_1 = format_NortedeSantander_1.readFeatures(json_NortedeSantander_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NortedeSantander_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NortedeSantander_1.addFeatures(features_NortedeSantander_1);var lyr_NortedeSantander_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NortedeSantander_1, 
                style: style_NortedeSantander_1,
                title: '<img src="styles/legend/NortedeSantander_1.png" /> Norte de Santander'
            });var format_reaCosechadaHaNortedeSantander2017_2 = new ol.format.GeoJSON();
var features_reaCosechadaHaNortedeSantander2017_2 = format_reaCosechadaHaNortedeSantander2017_2.readFeatures(json_reaCosechadaHaNortedeSantander2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCosechadaHaNortedeSantander2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaCosechadaHaNortedeSantander2017_2.addFeatures(features_reaCosechadaHaNortedeSantander2017_2);var lyr_reaCosechadaHaNortedeSantander2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaCosechadaHaNortedeSantander2017_2, 
                style: style_reaCosechadaHaNortedeSantander2017_2,
    title: 'Área Cosechada (Ha) -Norte de Santander -2017<br />\
    <img src="styles/legend/reaCosechadaHaNortedeSantander2017_2_0.png" />  0 - 100 <br />\
    <img src="styles/legend/reaCosechadaHaNortedeSantander2017_2_1.png" />  100 - 200 <br />\
    <img src="styles/legend/reaCosechadaHaNortedeSantander2017_2_2.png" />  200 - 300 <br />\
    <img src="styles/legend/reaCosechadaHaNortedeSantander2017_2_3.png" />  300 - 1000 <br />\
    <img src="styles/legend/reaCosechadaHaNortedeSantander2017_2_4.png" />  1000 - 2100 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_NortedeSantander_1.setVisible(true);lyr_reaCosechadaHaNortedeSantander2017_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_NortedeSantander_1,lyr_reaCosechadaHaNortedeSantander2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_NortedeSantander_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_reaCosechadaHaNortedeSantander2017_2.set('fieldAliases', {'DEPT': 'DEPT', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'MUNICIPIO': 'MUNICIPIO', 'R.(Ton/Ha)': 'R.(Ton/Ha)', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_NortedeSantander_1.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_reaCosechadaHaNortedeSantander2017_2.set('fieldImages', {'DEPT': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_NortedeSantander_1.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_reaCosechadaHaNortedeSantander2017_2.set('fieldLabels', {'DEPT': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'MUNICIPIO': 'inline label', 'R.(Ton/Ha)': 'inline label', });
lyr_reaCosechadaHaNortedeSantander2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});