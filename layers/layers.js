ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8531214.174516, 963237.451863, 8555491.612917, 986927.811385]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Varkkala_1 = new ol.format.GeoJSON();
var features_Varkkala_1 = format_Varkkala_1.readFeatures(json_Varkkala_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Varkkala_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Varkkala_1.addFeatures(features_Varkkala_1);
var lyr_Varkkala_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Varkkala_1, 
                style: style_Varkkala_1,
                popuplayertitle: "Varkkala",
                interactive: false,
                title: '<img src="styles/legend/Varkkala_1.png" /> Varkkala'
            });
var format_DRAINAGE_2 = new ol.format.GeoJSON();
var features_DRAINAGE_2 = format_DRAINAGE_2.readFeatures(json_DRAINAGE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_2.addFeatures(features_DRAINAGE_2);
var lyr_DRAINAGE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_2, 
                style: style_DRAINAGE_2,
                popuplayertitle: "DRAINAGE",
                interactive: false,
    title: 'DRAINAGE<br />\
    <img src="styles/legend/DRAINAGE_2_0.png" /> 0<br />\
    <img src="styles/legend/DRAINAGE_2_1.png" /> 1<br />\
    <img src="styles/legend/DRAINAGE_2_2.png" /> 2<br />\
    <img src="styles/legend/DRAINAGE_2_3.png" /> 3<br />\
    <img src="styles/legend/DRAINAGE_2_4.png" /> 4<br />\
    <img src="styles/legend/DRAINAGE_2_5.png" /> <br />'
        });
var format_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_3 = format_GEOMORPHOLOGY_3.readFeatures(json_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_3.addFeatures(features_GEOMORPHOLOGY_3);
var lyr_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_3, 
                style: style_GEOMORPHOLOGY_3,
                popuplayertitle: "GEOMORPHOLOGY",
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_1.png" /> Pediplain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_2.png" /> Plateau<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_3.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_4.png" /> <br />'
        });
var format_Junctions_4 = new ol.format.GeoJSON();
var features_Junctions_4 = format_Junctions_4.readFeatures(json_Junctions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junctions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junctions_4.addFeatures(features_Junctions_4);
var lyr_Junctions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junctions_4, 
                style: style_Junctions_4,
                popuplayertitle: "Junctions",
                interactive: true,
                title: '<img src="styles/legend/Junctions_4.png" /> Junctions'
            });
var format_railways_5 = new ol.format.GeoJSON();
var features_railways_5 = format_railways_5.readFeatures(json_railways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_5.addFeatures(features_railways_5);
var lyr_railways_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railways_5, 
                style: style_railways_5,
                popuplayertitle: "railways",
                interactive: false,
                title: '<img src="styles/legend/railways_5.png" /> railways'
            });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                popuplayertitle: "Road",
                interactive: false,
                title: '<img src="styles/legend/Road_6.png" /> Road'
            });
var format_site_7 = new ol.format.GeoJSON();
var features_site_7 = format_site_7.readFeatures(json_site_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_site_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_7.addFeatures(features_site_7);
var lyr_site_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_site_7, 
                style: style_site_7,
                popuplayertitle: "site",
                interactive: true,
                title: '<img src="styles/legend/site_7.png" /> site'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Varkkala_1.setVisible(true);lyr_DRAINAGE_2.setVisible(true);lyr_GEOMORPHOLOGY_3.setVisible(true);lyr_Junctions_4.setVisible(true);lyr_railways_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_site_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Varkkala_1,lyr_DRAINAGE_2,lyr_GEOMORPHOLOGY_3,lyr_Junctions_4,lyr_railways_5,lyr_Road_6,lyr_site_7];
lyr_Varkkala_1.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'type': 'type', });
lyr_DRAINAGE_2.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_GEOMORPHOLOGY_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Junctions_4.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_railways_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Road_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_site_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'image': 'image', 'data21_lat': 'data21_lat', 'data21_long': 'data21_long', });
lyr_Varkkala_1.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_DRAINAGE_2.set('fieldImages', {'ORDER1': 'Range', });
lyr_GEOMORPHOLOGY_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Junctions_4.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_railways_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Road_6.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_site_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'image': 'ExternalResource', 'data21_lat': 'TextEdit', 'data21_long': 'TextEdit', });
lyr_Varkkala_1.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_DRAINAGE_2.set('fieldLabels', {'ORDER1': 'no label', });
lyr_GEOMORPHOLOGY_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Junctions_4.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'inline label - always visible', 'District': 'no label', 'Name': 'no label', });
lyr_railways_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Road_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_site_7.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'image': 'inline label - always visible', 'data21_lat': 'no label', 'data21_long': 'no label', });
lyr_site_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});