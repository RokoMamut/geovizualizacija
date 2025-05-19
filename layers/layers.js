var wms_layers = [];

var format_moreklipano_0 = new ol.format.GeoJSON();
var features_moreklipano_0 = format_moreklipano_0.readFeatures(json_moreklipano_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moreklipano_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moreklipano_0.addFeatures(features_moreklipano_0);
var lyr_moreklipano_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moreklipano_0, 
                style: style_moreklipano_0,
                popuplayertitle: 'more klipano',
                interactive: true,
                title: '<img src="styles/legend/moreklipano_0.png" /> more klipano'
            });
var format_morenovo_1 = new ol.format.GeoJSON();
var features_morenovo_1 = format_morenovo_1.readFeatures(json_morenovo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_morenovo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morenovo_1.addFeatures(features_morenovo_1);
var lyr_morenovo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morenovo_1, 
                style: style_morenovo_1,
                popuplayertitle: 'more novo',
                interactive: true,
                title: '<img src="styles/legend/morenovo_1.png" /> more novo'
            });
var format_morenovo_2 = new ol.format.GeoJSON();
var features_morenovo_2 = format_morenovo_2.readFeatures(json_morenovo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_morenovo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morenovo_2.addFeatures(features_morenovo_2);
var lyr_morenovo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morenovo_2, 
                style: style_morenovo_2,
                popuplayertitle: 'more novo',
                interactive: true,
                title: '<img src="styles/legend/morenovo_2.png" /> more novo'
            });
var format_morenovo_3 = new ol.format.GeoJSON();
var features_morenovo_3 = format_morenovo_3.readFeatures(json_morenovo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_morenovo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morenovo_3.addFeatures(features_morenovo_3);
var lyr_morenovo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morenovo_3, 
                style: style_morenovo_3,
                popuplayertitle: 'more novo',
                interactive: true,
                title: '<img src="styles/legend/morenovo_3.png" /> more novo'
            });
var lyr_hillklipani_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'hill klipani<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/hillklipani_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1694206.834021, 5481580.661882, 1697551.743573, 5484746.790645]
        })
    });
var lyr_dmtklipani_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'dmt klipani<br />\
    <img src="styles/legend/dmtklipani_5_0.png" /> 0.0000<br />\
    <img src="styles/legend/dmtklipani_5_1.png" /> 12.4215<br />\
    <img src="styles/legend/dmtklipani_5_2.png" /> 13.6636<br />\
    <img src="styles/legend/dmtklipani_5_3.png" /> 14.9058<br />\
    <img src="styles/legend/dmtklipani_5_4.png" /> 16.1479<br />\
    <img src="styles/legend/dmtklipani_5_5.png" /> 17.3901<br />\
    <img src="styles/legend/dmtklipani_5_6.png" /> 18.6322<br />\
    <img src="styles/legend/dmtklipani_5_7.png" /> 19.8743<br />\
    <img src="styles/legend/dmtklipani_5_8.png" /> 21.1165<br />\
    <img src="styles/legend/dmtklipani_5_9.png" /> 22.3586<br />\
    <img src="styles/legend/dmtklipani_5_10.png" /> 23.6008<br />\
    <img src="styles/legend/dmtklipani_5_11.png" /> 24.8429<br />\
    <img src="styles/legend/dmtklipani_5_12.png" /> 26.0851<br />\
    <img src="styles/legend/dmtklipani_5_13.png" /> 27.3272<br />\
    <img src="styles/legend/dmtklipani_5_14.png" /> 28.5694<br />\
    <img src="styles/legend/dmtklipani_5_15.png" /> 29.8115<br />\
    <img src="styles/legend/dmtklipani_5_16.png" /> 31.0537<br />\
    <img src="styles/legend/dmtklipani_5_17.png" /> 32.2958<br />\
    <img src="styles/legend/dmtklipani_5_18.png" /> 33.5380<br />\
    <img src="styles/legend/dmtklipani_5_19.png" /> 34.7801<br />\
    <img src="styles/legend/dmtklipani_5_20.png" /> 36.0222<br />\
    <img src="styles/legend/dmtklipani_5_21.png" /> 37.2644<br />\
    <img src="styles/legend/dmtklipani_5_22.png" /> 38.5065<br />\
    <img src="styles/legend/dmtklipani_5_23.png" /> 39.7487<br />\
    <img src="styles/legend/dmtklipani_5_24.png" /> 40.9908<br />\
    <img src="styles/legend/dmtklipani_5_25.png" /> 42.2330<br />\
    <img src="styles/legend/dmtklipani_5_26.png" /> 43.4751<br />\
    <img src="styles/legend/dmtklipani_5_27.png" /> 44.7173<br />\
    <img src="styles/legend/dmtklipani_5_28.png" /> 45.9594<br />\
    <img src="styles/legend/dmtklipani_5_29.png" /> 47.2016<br />\
    <img src="styles/legend/dmtklipani_5_30.png" /> 48.4437<br />\
    <img src="styles/legend/dmtklipani_5_31.png" /> 49.6859<br />\
    <img src="styles/legend/dmtklipani_5_32.png" /> 50.9280<br />\
    <img src="styles/legend/dmtklipani_5_33.png" /> 52.1702<br />\
    <img src="styles/legend/dmtklipani_5_34.png" /> 53.4123<br />\
    <img src="styles/legend/dmtklipani_5_35.png" /> 54.6544<br />\
    <img src="styles/legend/dmtklipani_5_36.png" /> 55.8966<br />\
    <img src="styles/legend/dmtklipani_5_37.png" /> 57.1387<br />\
    <img src="styles/legend/dmtklipani_5_38.png" /> 58.3809<br />\
    <img src="styles/legend/dmtklipani_5_39.png" /> 59.6230<br />\
    <img src="styles/legend/dmtklipani_5_40.png" /> 60.8652<br />\
    <img src="styles/legend/dmtklipani_5_41.png" /> 62.1073<br />\
    <img src="styles/legend/dmtklipani_5_42.png" /> 63.3495<br />\
    <img src="styles/legend/dmtklipani_5_43.png" /> 64.5916<br />\
    <img src="styles/legend/dmtklipani_5_44.png" /> 65.8338<br />\
    <img src="styles/legend/dmtklipani_5_45.png" /> 67.0759<br />\
    <img src="styles/legend/dmtklipani_5_46.png" /> 68.3181<br />\
    <img src="styles/legend/dmtklipani_5_47.png" /> 69.5602<br />\
    <img src="styles/legend/dmtklipani_5_48.png" /> 70.8023<br />\
    <img src="styles/legend/dmtklipani_5_49.png" /> 72.0445<br />\
    <img src="styles/legend/dmtklipani_5_50.png" /> 73.2866<br />\
    <img src="styles/legend/dmtklipani_5_51.png" /> 74.5288<br />\
    <img src="styles/legend/dmtklipani_5_52.png" /> 75.7709<br />\
    <img src="styles/legend/dmtklipani_5_53.png" /> 77.0131<br />\
    <img src="styles/legend/dmtklipani_5_54.png" /> 78.2552<br />\
    <img src="styles/legend/dmtklipani_5_55.png" /> 79.4974<br />\
    <img src="styles/legend/dmtklipani_5_56.png" /> 80.7395<br />\
    <img src="styles/legend/dmtklipani_5_57.png" /> 81.9817<br />\
    <img src="styles/legend/dmtklipani_5_58.png" /> 83.2238<br />\
    <img src="styles/legend/dmtklipani_5_59.png" /> 84.4660<br />\
    <img src="styles/legend/dmtklipani_5_60.png" /> 85.7081<br />\
    <img src="styles/legend/dmtklipani_5_61.png" /> 86.9503<br />\
    <img src="styles/legend/dmtklipani_5_62.png" /> 88.1924<br />\
    <img src="styles/legend/dmtklipani_5_63.png" /> 89.4345<br />\
    <img src="styles/legend/dmtklipani_5_64.png" /> 90.6767<br />\
    <img src="styles/legend/dmtklipani_5_65.png" /> 91.9188<br />\
    <img src="styles/legend/dmtklipani_5_66.png" /> 93.1610<br />\
    <img src="styles/legend/dmtklipani_5_67.png" /> 94.4031<br />\
    <img src="styles/legend/dmtklipani_5_68.png" /> 95.6453<br />\
    <img src="styles/legend/dmtklipani_5_69.png" /> 96.8874<br />\
    <img src="styles/legend/dmtklipani_5_70.png" /> 98.1296<br />\
    <img src="styles/legend/dmtklipani_5_71.png" /> 99.3717<br />\
    <img src="styles/legend/dmtklipani_5_72.png" /> 100.6139<br />\
    <img src="styles/legend/dmtklipani_5_73.png" /> 101.8560<br />\
    <img src="styles/legend/dmtklipani_5_74.png" /> 103.0982<br />\
    <img src="styles/legend/dmtklipani_5_75.png" /> 104.3403<br />\
    <img src="styles/legend/dmtklipani_5_76.png" /> 105.5824<br />\
    <img src="styles/legend/dmtklipani_5_77.png" /> 106.8246<br />\
    <img src="styles/legend/dmtklipani_5_78.png" /> 108.0667<br />\
    <img src="styles/legend/dmtklipani_5_79.png" /> 109.3089<br />\
    <img src="styles/legend/dmtklipani_5_80.png" /> 110.5510<br />\
    <img src="styles/legend/dmtklipani_5_81.png" /> 111.7932<br />\
    <img src="styles/legend/dmtklipani_5_82.png" /> 113.0353<br />\
    <img src="styles/legend/dmtklipani_5_83.png" /> 114.2775<br />\
    <img src="styles/legend/dmtklipani_5_84.png" /> 115.5196<br />\
    <img src="styles/legend/dmtklipani_5_85.png" /> 116.7618<br />\
    <img src="styles/legend/dmtklipani_5_86.png" /> 118.0039<br />\
    <img src="styles/legend/dmtklipani_5_87.png" /> 119.2461<br />\
    <img src="styles/legend/dmtklipani_5_88.png" /> 120.4882<br />\
    <img src="styles/legend/dmtklipani_5_89.png" /> 121.7304<br />\
    <img src="styles/legend/dmtklipani_5_90.png" /> 122.9725<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/dmtklipani_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1694206.833948, 5481580.661880, 1697551.743592, 5484746.790656]
        })
    });
var format_zgrade_klip_novo_6 = new ol.format.GeoJSON();
var features_zgrade_klip_novo_6 = format_zgrade_klip_novo_6.readFeatures(json_zgrade_klip_novo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zgrade_klip_novo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zgrade_klip_novo_6.addFeatures(features_zgrade_klip_novo_6);
var lyr_zgrade_klip_novo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zgrade_klip_novo_6, 
                style: style_zgrade_klip_novo_6,
                popuplayertitle: 'zgrade_klip_novo',
                interactive: true,
                title: '<img src="styles/legend/zgrade_klip_novo_6.png" /> zgrade_klip_novo'
            });
var format_ceste_7 = new ol.format.GeoJSON();
var features_ceste_7 = format_ceste_7.readFeatures(json_ceste_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ceste_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ceste_7.addFeatures(features_ceste_7);
var lyr_ceste_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ceste_7, 
                style: style_ceste_7,
                popuplayertitle: 'ceste',
                interactive: true,
                title: '<img src="styles/legend/ceste_7.png" /> ceste'
            });
var format_kafici_8 = new ol.format.GeoJSON();
var features_kafici_8 = format_kafici_8.readFeatures(json_kafici_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kafici_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kafici_8.addFeatures(features_kafici_8);
var lyr_kafici_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kafici_8,
maxResolution:2.8004466152261966,
 
                style: style_kafici_8,
                popuplayertitle: 'kafici',
                interactive: true,
                title: '<img src="styles/legend/kafici_8.png" /> kafici'
            });
var format_restorani_9 = new ol.format.GeoJSON();
var features_restorani_9 = format_restorani_9.readFeatures(json_restorani_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restorani_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restorani_9.addFeatures(features_restorani_9);
var lyr_restorani_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restorani_9,
maxResolution:2.8004466152261966,
 
                style: style_restorani_9,
                popuplayertitle: 'restorani',
                interactive: true,
                title: '<img src="styles/legend/restorani_9.png" /> restorani'
            });
var format_plae_10 = new ol.format.GeoJSON();
var features_plae_10 = format_plae_10.readFeatures(json_plae_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plae_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plae_10.addFeatures(features_plae_10);
var lyr_plae_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plae_10, 
                style: style_plae_10,
                popuplayertitle: 'plaže',
                interactive: true,
                title: '<img src="styles/legend/plae_10.png" /> plaže'
            });
var format_fastfood_11 = new ol.format.GeoJSON();
var features_fastfood_11 = format_fastfood_11.readFeatures(json_fastfood_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fastfood_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fastfood_11.addFeatures(features_fastfood_11);
var lyr_fastfood_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fastfood_11,
maxResolution:2.8004466152261966,
 
                style: style_fastfood_11,
                popuplayertitle: 'fast food',
                interactive: true,
                title: '<img src="styles/legend/fastfood_11.png" /> fast food'
            });
var format_hoteli_12 = new ol.format.GeoJSON();
var features_hoteli_12 = format_hoteli_12.readFeatures(json_hoteli_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteli_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteli_12.addFeatures(features_hoteli_12);
var lyr_hoteli_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteli_12,
maxResolution:5.600893230452393,
 
                style: style_hoteli_12,
                popuplayertitle: 'hoteli',
                interactive: true,
                title: '<img src="styles/legend/hoteli_12.png" /> hoteli'
            });
var format_autobusnikolodvor_13 = new ol.format.GeoJSON();
var features_autobusnikolodvor_13 = format_autobusnikolodvor_13.readFeatures(json_autobusnikolodvor_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_autobusnikolodvor_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_autobusnikolodvor_13.addFeatures(features_autobusnikolodvor_13);
var lyr_autobusnikolodvor_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_autobusnikolodvor_13,
maxResolution:5.600893230452393,
 
                style: style_autobusnikolodvor_13,
                popuplayertitle: 'autobusni kolodvor',
                interactive: true,
                title: '<img src="styles/legend/autobusnikolodvor_13.png" /> autobusni kolodvor'
            });
var format_apartmani_14 = new ol.format.GeoJSON();
var features_apartmani_14 = format_apartmani_14.readFeatures(json_apartmani_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apartmani_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apartmani_14.addFeatures(features_apartmani_14);
var lyr_apartmani_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apartmani_14,
maxResolution:7.00111653806549,
 
                style: style_apartmani_14,
                popuplayertitle: 'apartmani',
                interactive: true,
                title: '<img src="styles/legend/apartmani_14.png" /> apartmani'
            });
var format_trgovine_15 = new ol.format.GeoJSON();
var features_trgovine_15 = format_trgovine_15.readFeatures(json_trgovine_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trgovine_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trgovine_15.addFeatures(features_trgovine_15);
var lyr_trgovine_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trgovine_15,
maxResolution:2.8004466152261966,
 
                style: style_trgovine_15,
                popuplayertitle: 'trgovine',
                interactive: true,
                title: '<img src="styles/legend/trgovine_15.png" /> trgovine'
            });
var format_pomorskaluka_16 = new ol.format.GeoJSON();
var features_pomorskaluka_16 = format_pomorskaluka_16.readFeatures(json_pomorskaluka_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pomorskaluka_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pomorskaluka_16.addFeatures(features_pomorskaluka_16);
var lyr_pomorskaluka_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pomorskaluka_16, 
                style: style_pomorskaluka_16,
                popuplayertitle: 'pomorska luka ',
                interactive: true,
                title: '<img src="styles/legend/pomorskaluka_16.png" /> pomorska luka '
            });
var format_taxistajalita_17 = new ol.format.GeoJSON();
var features_taxistajalita_17 = format_taxistajalita_17.readFeatures(json_taxistajalita_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taxistajalita_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taxistajalita_17.addFeatures(features_taxistajalita_17);
var lyr_taxistajalita_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taxistajalita_17,
maxResolution:2.8004466152261966,
 
                style: style_taxistajalita_17,
                popuplayertitle: 'taxi stajališta',
                interactive: true,
                title: '<img src="styles/legend/taxistajalita_17.png" /> taxi stajališta'
            });

lyr_moreklipano_0.setVisible(true);lyr_morenovo_1.setVisible(true);lyr_morenovo_2.setVisible(true);lyr_morenovo_3.setVisible(true);lyr_hillklipani_4.setVisible(true);lyr_dmtklipani_5.setVisible(true);lyr_zgrade_klip_novo_6.setVisible(true);lyr_ceste_7.setVisible(true);lyr_kafici_8.setVisible(true);lyr_restorani_9.setVisible(true);lyr_plae_10.setVisible(true);lyr_fastfood_11.setVisible(true);lyr_hoteli_12.setVisible(true);lyr_autobusnikolodvor_13.setVisible(true);lyr_apartmani_14.setVisible(true);lyr_trgovine_15.setVisible(true);lyr_pomorskaluka_16.setVisible(true);lyr_taxistajalita_17.setVisible(true);
var layersList = [lyr_moreklipano_0,lyr_morenovo_1,lyr_morenovo_2,lyr_morenovo_3,lyr_hillklipani_4,lyr_dmtklipani_5,lyr_zgrade_klip_novo_6,lyr_ceste_7,lyr_kafici_8,lyr_restorani_9,lyr_plae_10,lyr_fastfood_11,lyr_hoteli_12,lyr_autobusnikolodvor_13,lyr_apartmani_14,lyr_trgovine_15,lyr_pomorskaluka_16,lyr_taxistajalita_17];
lyr_moreklipano_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_morenovo_1.set('fieldAliases', {'id': 'id', });
lyr_morenovo_2.set('fieldAliases', {'id': 'id', });
lyr_morenovo_3.set('fieldAliases', {'id': 'id', });
lyr_zgrade_klip_novo_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'disused_ra': 'disused_ra', 'stroller': 'stroller', 'constructi': 'constructi', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'seamark_bu': 'seamark_bu', 'brewery': 'brewery', 'addr_unit': 'addr_unit', 'content': 'content', 'service_ve': 'service_ve', 'service__1': 'service__1', 'service__2': 'service__2', 'service__3': 'service__3', 'service__4': 'service__4', 'service__5': 'service__5', 'service__6': 'service__6', 'service__7': 'service__7', 'service__8': 'service__8', 'service__9': 'service__9', 'service_10': 'service_10', 'service_11': 'service_11', 'service_12': 'service_12', 'service_13': 'service_13', 'service_14': 'service_14', 'service_15': 'service_15', 'service_16': 'service_16', 'not_brand_': 'not_brand_', 'takeaway': 'takeaway', 'location': 'location', 'ruins': 'ruins', 'snacks': 'snacks', 'service': 'service', 'dedicated_': 'dedicated_', 'alt_name': 'alt_name', 'product': 'product', 'craft': 'craft', 'addr_place': 'addr_place', 'wholesale': 'wholesale', 'old_name': 'old_name', 'builder_wi': 'builder_wi', 'wikimedia_': 'wikimedia_', 'colour': 'colour', 'disused_sh': 'disused_sh', 'notable_te': 'notable_te', 'breakfast': 'breakfast', 'name_ro': 'name_ro', 'name_pt': 'name_pt', 'townhall_t': 'townhall_t', 'social_fac': 'social_fac', 'social_f_1': 'social_f_1', 'power': 'power', 'recycling_': 'recycling_', 'payment_ut': 'payment_ut', 'payment_dk': 'payment_dk', 'fuel_octan': 'fuel_octan', 'contact_fa': 'contact_fa', 'name_hu': 'name_hu', 'museum': 'museum', 'service_bi': 'service_bi', 'ref': 'ref', 'loc_name': 'loc_name', 'military': 'military', 'material': 'material', 'bunker_typ': 'bunker_typ', 'number_of_': 'number_of_', 'architect_': 'architect_', 'architect': 'architect', 'toilets_wh': 'toilets_wh', 'architec_1': 'architec_1', 'check_date': 'check_date', 'government': 'government', 'name_it': 'name_it', 'url': 'url', 'tower_type': 'tower_type', 'name_uk': 'name_uk', 'name_sh': 'name_sh', 'name_pl': 'name_pl', 'name_nl': 'name_nl', 'name_fr': 'name_fr', 'name_es': 'name_es', 'name_en': 'name_en', 'name_de': 'name_de', 'name_cs': 'name_cs', 'name_ar': 'name_ar', 'disused_re': 'disused_re', 'disused_de': 'disused_de', 'branch': 'branch', 'contact__1': 'contact__1', 'contact_we': 'contact_we', 'contact_ph': 'contact_ph', 'contact_em': 'contact_em', 'name_hr': 'name_hr', 'service_17': 'service_17', 'aeroway': 'aeroway', 'toilets': 'toilets', 'changing_t': 'changing_t', 'healthcare': 'healthcare', 'fee': 'fee', 'charge': 'charge', 'isced_leve': 'isced_leve', 'dance_teac': 'dance_teac', 'smoking': 'smoking', 'parking_co': 'parking_co', 'descriptio': 'descriptio', 'facebook': 'facebook', 'contact_in': 'contact_in', 'vicarage': 'vicarage', 'office': 'office', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'fax': 'fax', 'roof_colou': 'roof_colou', 'layer': 'layer', 'disused_am': 'disused_am', 'abandoned': 'abandoned', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'check_da_1': 'check_da_1', 'height': 'height', 'email': 'email', 'service_ti': 'service_ti', 'parish': 'parish', 'diocese': 'diocese', 'church_typ': 'church_typ', 'outdoor_se': 'outdoor_se', 'cuisine': 'cuisine', 'covered': 'covered', 'internet_a': 'internet_a', 'rooms': 'rooms', 'tourism': 'tourism', 'stars': 'stars', 'addr_subur': 'addr_subur', 'religion': 'religion', 'denominati': 'denominati', 'start_date': 'start_date', 'ref_hr_uzk': 'ref_hr_uzk', 'heritage_o': 'heritage_o', 'heritage': 'heritage', 'fuel_lpg': 'fuel_lpg', 'ref_HR_e-m': 'ref_HR_e-m', 'ref_vatin': 'ref_vatin', 'fuel_oct_1': 'fuel_oct_1', 'compressed': 'compressed', 'uic_ref': 'uic_ref', 'parking': 'parking', 'access': 'access', 'wheelchair': 'wheelchair', 'waterway': 'waterway', 'shop': 'shop', 'seamark_ty': 'seamark_ty', 'seamark_sm': 'seamark_sm', 'phone': 'phone', 'payment_vi': 'payment_vi', 'payment__1': 'payment__1', 'payment_ma': 'payment_ma', 'payment__2': 'payment__2', 'payment_di': 'payment_di', 'payment__3': 'payment__3', 'payment_ca': 'payment_ca', 'payment_am': 'payment_am', 'operator': 'operator', 'fuel_oct_2': 'fuel_oct_2', 'fuel_diese': 'fuel_diese', 'brand': 'brand', 'addr_count': 'addr_count', 'man_made': 'man_made', 'public_tra': 'public_tra', 'wikipedia': 'wikipedia', 'sport': 'sport', 'roof_level': 'roof_level', 'opening_ho': 'opening_ho', 'leisure': 'leisure', 'building_m': 'building_m', 'wikidata': 'wikidata', 'historic': 'historic', 'castle_typ': 'castle_typ', 'roof_shape': 'roof_shape', 'roof_mater': 'roof_mater', 'image': 'image', 'building_c': 'building_c', 'building_l': 'building_l', 'internet_1': 'internet_1', 'amenity': 'amenity', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'website': 'website', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'type': 'type', });
lyr_ceste_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'bicycle': 'bicycle', 'junction': 'junction', 'service': 'service', 'highway': 'highway', 'parking_ri': 'parking_ri', 'oneway_bic': 'oneway_bic', 'source_cyc': 'source_cyc', 'cycleway_w': 'cycleway_w', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'parking_la': 'parking_la', 'parking__1': 'parking__1', 'narrow': 'narrow', 'surface_no': 'surface_no', 'embankment': 'embankment', 'source_max': 'source_max', 'wheelchair': 'wheelchair', 'ramp': 'ramp', 'cutting': 'cutting', 'maxspeed_t': 'maxspeed_t', 'maxspeed_1': 'maxspeed_1', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'destinat_2': 'destinat_2', 'destinat_3': 'destinat_3', 'destinat_4': 'destinat_4', 'destinat_5': 'destinat_5', 'covered': 'covered', 'area': 'area', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'check_date': 'check_date', 'psv': 'psv', 'placement_': 'placement_', 'inline_ska': 'inline_ska', 'maxspeed_p': 'maxspeed_p', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'footway_su': 'footway_su', 'footway': 'footway', 'cycleway_s': 'cycleway_s', 'destinat_6': 'destinat_6', 'traffic_ca': 'traffic_ca', 'cycleway_l': 'cycleway_l', 'maxheight_': 'maxheight_', 'change_lan': 'change_lan', 'change_l_1': 'change_l_1', 'destinat_7': 'destinat_7', 'destinat_8': 'destinat_8', 'destinat_9': 'destinat_9', 'segregated': 'segregated', 'motorhome': 'motorhome', 'indoor': 'indoor', 'sidewalk_b': 'sidewalk_b', 'tourist_bu': 'tourist_bu', 'maxspeed_a': 'maxspeed_a', 'old_name_i': 'old_name_i', 'destinat10': 'destinat10', 'cycleway_1': 'cycleway_1', 'parking__2': 'parking__2', 'sidewalk_r': 'sidewalk_r', 'source_wid': 'source_wid', 'placemen_1': 'placemen_1', 'hgv': 'hgv', 'tracktype': 'tracktype', 'width': 'width', 'cycleway': 'cycleway', 'sidewalk_1': 'sidewalk_1', 'maxweight': 'maxweight', 'destinat11': 'destinat11', 'parking__3': 'parking__3', 'parking__4': 'parking__4', 'cycleway_r': 'cycleway_r', 'access': 'access', 'hgv_articu': 'hgv_articu', 'bus': 'bus', 'tunnel': 'tunnel', 'maxheight': 'maxheight', 'short_name': 'short_name', 'length': 'length', 'maxweight_': 'maxweight_', 'turn_lanes': 'turn_lanes', 'parking__5': 'parking__5', 'toll': 'toll', 'surface_gr': 'surface_gr', 'noexit': 'noexit', 'source_m_1': 'source_m_1', 'source_old': 'source_old', 'destinat12': 'destinat12', 'maxspeed_f': 'maxspeed_f', 'maxspeed_b': 'maxspeed_b', 'incline': 'incline', 'reg_name': 'reg_name', 'overtaking': 'overtaking', 'change_l_2': 'change_l_2', 'maxwidth': 'maxwidth', 'lanes_forw': 'lanes_forw', 'maxspeed_2': 'maxspeed_2', 'dog': 'dog', 'source_nam': 'source_nam', 'layer': 'layer', 'bridge': 'bridge', 'placement': 'placement', 'motorroad': 'motorroad', 'alt_name': 'alt_name', 'vehicle': 'vehicle', 'emergency': 'emergency', 'cycleway_b': 'cycleway_b', 'turn_lan_1': 'turn_lan_1', 'turn_lan_2': 'turn_lan_2', 'old_ref': 'old_ref', 'source_one': 'source_one', 'sidewalk': 'sidewalk', 'lane_marki': 'lane_marki', 'sidewalk_2': 'sidewalk_2', 'sidewalk_l': 'sidewalk_l', 'sidewalk_3': 'sidewalk_3', 'parking__6': 'parking__6', 'motor_vehi': 'motor_vehi', 'lit': 'lit', 'horse': 'horse', 'foot': 'foot', 'smoothness': 'smoothness', 'noname': 'noname', 'destinat13': 'destinat13', 'oneway': 'oneway', 'surface': 'surface', 'source_m_2': 'source_m_2', 'ref': 'ref', 'old_name': 'old_name', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes_back': 'lanes_back', 'lanes': 'lanes', });
lyr_kafici_8.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_restorani_9.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', 'ime': 'ime', });
lyr_plae_10.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_fastfood_11.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_hoteli_12.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_autobusnikolodvor_13.set('fieldAliases', {'id': 'id', });
lyr_apartmani_14.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_trgovine_15.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_pomorskaluka_16.set('fieldAliases', {'id': 'id', 'naziv': 'naziv', });
lyr_taxistajalita_17.set('fieldAliases', {'id': 'id', });
lyr_moreklipano_0.set('fieldImages', {'fid': '', 'id': '', });
lyr_morenovo_1.set('fieldImages', {'id': '', });
lyr_morenovo_2.set('fieldImages', {'id': '', });
lyr_morenovo_3.set('fieldImages', {'id': 'TextEdit', });
lyr_zgrade_klip_novo_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'disused_ra': 'TextEdit', 'stroller': 'TextEdit', 'constructi': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'seamark_bu': 'TextEdit', 'brewery': 'TextEdit', 'addr_unit': 'TextEdit', 'content': 'TextEdit', 'service_ve': 'TextEdit', 'service__1': 'TextEdit', 'service__2': 'TextEdit', 'service__3': 'TextEdit', 'service__4': 'TextEdit', 'service__5': 'TextEdit', 'service__6': 'TextEdit', 'service__7': 'TextEdit', 'service__8': 'TextEdit', 'service__9': 'TextEdit', 'service_10': 'TextEdit', 'service_11': 'TextEdit', 'service_12': 'TextEdit', 'service_13': 'TextEdit', 'service_14': 'TextEdit', 'service_15': 'TextEdit', 'service_16': 'TextEdit', 'not_brand_': 'TextEdit', 'takeaway': 'TextEdit', 'location': 'TextEdit', 'ruins': 'TextEdit', 'snacks': 'TextEdit', 'service': 'TextEdit', 'dedicated_': 'TextEdit', 'alt_name': 'TextEdit', 'product': 'TextEdit', 'craft': 'TextEdit', 'addr_place': 'TextEdit', 'wholesale': 'TextEdit', 'old_name': 'TextEdit', 'builder_wi': 'TextEdit', 'wikimedia_': 'TextEdit', 'colour': 'TextEdit', 'disused_sh': 'TextEdit', 'notable_te': 'TextEdit', 'breakfast': 'TextEdit', 'name_ro': 'TextEdit', 'name_pt': 'TextEdit', 'townhall_t': 'TextEdit', 'social_fac': 'TextEdit', 'social_f_1': 'TextEdit', 'power': 'TextEdit', 'recycling_': 'TextEdit', 'payment_ut': 'TextEdit', 'payment_dk': 'TextEdit', 'fuel_octan': 'TextEdit', 'contact_fa': 'TextEdit', 'name_hu': 'TextEdit', 'museum': 'TextEdit', 'service_bi': 'TextEdit', 'ref': 'TextEdit', 'loc_name': 'TextEdit', 'military': 'TextEdit', 'material': 'TextEdit', 'bunker_typ': 'TextEdit', 'number_of_': 'TextEdit', 'architect_': 'TextEdit', 'architect': 'TextEdit', 'toilets_wh': 'TextEdit', 'architec_1': 'TextEdit', 'check_date': 'TextEdit', 'government': 'TextEdit', 'name_it': 'TextEdit', 'url': 'TextEdit', 'tower_type': 'TextEdit', 'name_uk': 'TextEdit', 'name_sh': 'TextEdit', 'name_pl': 'TextEdit', 'name_nl': 'TextEdit', 'name_fr': 'TextEdit', 'name_es': 'TextEdit', 'name_en': 'TextEdit', 'name_de': 'TextEdit', 'name_cs': 'TextEdit', 'name_ar': 'TextEdit', 'disused_re': 'TextEdit', 'disused_de': 'TextEdit', 'branch': 'TextEdit', 'contact__1': 'TextEdit', 'contact_we': 'TextEdit', 'contact_ph': 'TextEdit', 'contact_em': 'TextEdit', 'name_hr': 'TextEdit', 'service_17': 'TextEdit', 'aeroway': 'TextEdit', 'toilets': 'TextEdit', 'changing_t': 'TextEdit', 'healthcare': 'TextEdit', 'fee': 'TextEdit', 'charge': 'TextEdit', 'isced_leve': 'TextEdit', 'dance_teac': 'TextEdit', 'smoking': 'TextEdit', 'parking_co': 'TextEdit', 'descriptio': 'TextEdit', 'facebook': 'TextEdit', 'contact_in': 'TextEdit', 'vicarage': 'TextEdit', 'office': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'fax': 'TextEdit', 'roof_colou': 'TextEdit', 'layer': 'TextEdit', 'disused_am': 'TextEdit', 'abandoned': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'check_da_1': 'TextEdit', 'height': 'TextEdit', 'email': 'TextEdit', 'service_ti': 'TextEdit', 'parish': 'TextEdit', 'diocese': 'TextEdit', 'church_typ': 'TextEdit', 'outdoor_se': 'TextEdit', 'cuisine': 'TextEdit', 'covered': 'TextEdit', 'internet_a': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'stars': 'TextEdit', 'addr_subur': 'TextEdit', 'religion': 'TextEdit', 'denominati': 'TextEdit', 'start_date': 'TextEdit', 'ref_hr_uzk': 'TextEdit', 'heritage_o': 'TextEdit', 'heritage': 'TextEdit', 'fuel_lpg': 'TextEdit', 'ref_HR_e-m': 'TextEdit', 'ref_vatin': 'TextEdit', 'fuel_oct_1': 'TextEdit', 'compressed': 'TextEdit', 'uic_ref': 'TextEdit', 'parking': 'TextEdit', 'access': 'TextEdit', 'wheelchair': 'TextEdit', 'waterway': 'TextEdit', 'shop': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_sm': 'TextEdit', 'phone': 'TextEdit', 'payment_vi': 'TextEdit', 'payment__1': 'TextEdit', 'payment_ma': 'TextEdit', 'payment__2': 'TextEdit', 'payment_di': 'TextEdit', 'payment__3': 'TextEdit', 'payment_ca': 'TextEdit', 'payment_am': 'TextEdit', 'operator': 'TextEdit', 'fuel_oct_2': 'TextEdit', 'fuel_diese': 'TextEdit', 'brand': 'TextEdit', 'addr_count': 'TextEdit', 'man_made': 'TextEdit', 'public_tra': 'TextEdit', 'wikipedia': 'TextEdit', 'sport': 'TextEdit', 'roof_level': 'TextEdit', 'opening_ho': 'TextEdit', 'leisure': 'TextEdit', 'building_m': 'TextEdit', 'wikidata': 'TextEdit', 'historic': 'TextEdit', 'castle_typ': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_mater': 'TextEdit', 'image': 'TextEdit', 'building_c': 'TextEdit', 'building_l': 'TextEdit', 'internet_1': 'TextEdit', 'amenity': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'website': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'type': 'TextEdit', });
lyr_ceste_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'bicycle': 'TextEdit', 'junction': 'TextEdit', 'service': 'TextEdit', 'highway': 'TextEdit', 'parking_ri': 'TextEdit', 'oneway_bic': 'TextEdit', 'source_cyc': 'TextEdit', 'cycleway_w': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'parking_la': 'TextEdit', 'parking__1': 'TextEdit', 'narrow': 'TextEdit', 'surface_no': 'TextEdit', 'embankment': 'TextEdit', 'source_max': 'TextEdit', 'wheelchair': 'TextEdit', 'ramp': 'TextEdit', 'cutting': 'TextEdit', 'maxspeed_t': 'TextEdit', 'maxspeed_1': 'TextEdit', 'destinatio': 'TextEdit', 'destinat_1': 'TextEdit', 'destinat_2': 'TextEdit', 'destinat_3': 'TextEdit', 'destinat_4': 'TextEdit', 'destinat_5': 'TextEdit', 'covered': 'TextEdit', 'area': 'TextEdit', 'crossing_m': 'TextEdit', 'crossing': 'TextEdit', 'check_date': 'TextEdit', 'psv': 'TextEdit', 'placement_': 'TextEdit', 'inline_ska': 'TextEdit', 'maxspeed_p': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'footway_su': 'TextEdit', 'footway': 'TextEdit', 'cycleway_s': 'TextEdit', 'destinat_6': 'TextEdit', 'traffic_ca': 'TextEdit', 'cycleway_l': 'TextEdit', 'maxheight_': 'TextEdit', 'change_lan': 'TextEdit', 'change_l_1': 'TextEdit', 'destinat_7': 'TextEdit', 'destinat_8': 'TextEdit', 'destinat_9': 'TextEdit', 'segregated': 'TextEdit', 'motorhome': 'TextEdit', 'indoor': 'TextEdit', 'sidewalk_b': 'TextEdit', 'tourist_bu': 'TextEdit', 'maxspeed_a': 'TextEdit', 'old_name_i': 'TextEdit', 'destinat10': 'TextEdit', 'cycleway_1': 'TextEdit', 'parking__2': 'TextEdit', 'sidewalk_r': 'TextEdit', 'source_wid': 'TextEdit', 'placemen_1': 'TextEdit', 'hgv': 'TextEdit', 'tracktype': 'TextEdit', 'width': 'TextEdit', 'cycleway': 'TextEdit', 'sidewalk_1': 'TextEdit', 'maxweight': 'TextEdit', 'destinat11': 'TextEdit', 'parking__3': 'TextEdit', 'parking__4': 'TextEdit', 'cycleway_r': 'TextEdit', 'access': 'TextEdit', 'hgv_articu': 'TextEdit', 'bus': 'TextEdit', 'tunnel': 'TextEdit', 'maxheight': 'TextEdit', 'short_name': 'TextEdit', 'length': 'TextEdit', 'maxweight_': 'TextEdit', 'turn_lanes': 'TextEdit', 'parking__5': 'TextEdit', 'toll': 'TextEdit', 'surface_gr': 'TextEdit', 'noexit': 'TextEdit', 'source_m_1': 'TextEdit', 'source_old': 'TextEdit', 'destinat12': 'TextEdit', 'maxspeed_f': 'TextEdit', 'maxspeed_b': 'TextEdit', 'incline': 'TextEdit', 'reg_name': 'TextEdit', 'overtaking': 'TextEdit', 'change_l_2': 'TextEdit', 'maxwidth': 'TextEdit', 'lanes_forw': 'TextEdit', 'maxspeed_2': 'TextEdit', 'dog': 'TextEdit', 'source_nam': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'placement': 'TextEdit', 'motorroad': 'TextEdit', 'alt_name': 'TextEdit', 'vehicle': 'TextEdit', 'emergency': 'TextEdit', 'cycleway_b': 'TextEdit', 'turn_lan_1': 'TextEdit', 'turn_lan_2': 'TextEdit', 'old_ref': 'TextEdit', 'source_one': 'TextEdit', 'sidewalk': 'TextEdit', 'lane_marki': 'TextEdit', 'sidewalk_2': 'TextEdit', 'sidewalk_l': 'TextEdit', 'sidewalk_3': 'TextEdit', 'parking__6': 'TextEdit', 'motor_vehi': 'TextEdit', 'lit': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'smoothness': 'TextEdit', 'noname': 'TextEdit', 'destinat13': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'source_m_2': 'TextEdit', 'ref': 'TextEdit', 'old_name': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes_back': 'TextEdit', 'lanes': 'TextEdit', });
lyr_kafici_8.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_restorani_9.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', 'ime': 'TextEdit', });
lyr_plae_10.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_fastfood_11.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_hoteli_12.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_autobusnikolodvor_13.set('fieldImages', {'id': 'TextEdit', });
lyr_apartmani_14.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_trgovine_15.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_pomorskaluka_16.set('fieldImages', {'id': 'TextEdit', 'naziv': 'TextEdit', });
lyr_taxistajalita_17.set('fieldImages', {'id': 'TextEdit', });
lyr_moreklipano_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_morenovo_1.set('fieldLabels', {'id': 'no label', });
lyr_morenovo_2.set('fieldLabels', {'id': 'no label', });
lyr_morenovo_3.set('fieldLabels', {'id': 'no label', });
lyr_zgrade_klip_novo_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'disused_ra': 'no label', 'stroller': 'no label', 'constructi': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'seamark_bu': 'no label', 'brewery': 'no label', 'addr_unit': 'no label', 'content': 'no label', 'service_ve': 'no label', 'service__1': 'no label', 'service__2': 'no label', 'service__3': 'no label', 'service__4': 'no label', 'service__5': 'no label', 'service__6': 'no label', 'service__7': 'no label', 'service__8': 'no label', 'service__9': 'no label', 'service_10': 'no label', 'service_11': 'no label', 'service_12': 'no label', 'service_13': 'no label', 'service_14': 'no label', 'service_15': 'no label', 'service_16': 'no label', 'not_brand_': 'no label', 'takeaway': 'no label', 'location': 'no label', 'ruins': 'no label', 'snacks': 'no label', 'service': 'no label', 'dedicated_': 'no label', 'alt_name': 'no label', 'product': 'no label', 'craft': 'no label', 'addr_place': 'no label', 'wholesale': 'no label', 'old_name': 'no label', 'builder_wi': 'no label', 'wikimedia_': 'no label', 'colour': 'no label', 'disused_sh': 'no label', 'notable_te': 'no label', 'breakfast': 'no label', 'name_ro': 'no label', 'name_pt': 'no label', 'townhall_t': 'no label', 'social_fac': 'no label', 'social_f_1': 'no label', 'power': 'no label', 'recycling_': 'no label', 'payment_ut': 'no label', 'payment_dk': 'no label', 'fuel_octan': 'no label', 'contact_fa': 'no label', 'name_hu': 'no label', 'museum': 'no label', 'service_bi': 'no label', 'ref': 'no label', 'loc_name': 'no label', 'military': 'no label', 'material': 'no label', 'bunker_typ': 'no label', 'number_of_': 'no label', 'architect_': 'no label', 'architect': 'no label', 'toilets_wh': 'no label', 'architec_1': 'no label', 'check_date': 'no label', 'government': 'no label', 'name_it': 'no label', 'url': 'no label', 'tower_type': 'no label', 'name_uk': 'no label', 'name_sh': 'no label', 'name_pl': 'no label', 'name_nl': 'no label', 'name_fr': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name_cs': 'no label', 'name_ar': 'no label', 'disused_re': 'no label', 'disused_de': 'no label', 'branch': 'no label', 'contact__1': 'no label', 'contact_we': 'no label', 'contact_ph': 'no label', 'contact_em': 'no label', 'name_hr': 'no label', 'service_17': 'no label', 'aeroway': 'no label', 'toilets': 'no label', 'changing_t': 'no label', 'healthcare': 'no label', 'fee': 'no label', 'charge': 'no label', 'isced_leve': 'no label', 'dance_teac': 'no label', 'smoking': 'no label', 'parking_co': 'no label', 'descriptio': 'no label', 'facebook': 'no label', 'contact_in': 'no label', 'vicarage': 'no label', 'office': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'fax': 'no label', 'roof_colou': 'no label', 'layer': 'no label', 'disused_am': 'no label', 'abandoned': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'check_da_1': 'no label', 'height': 'no label', 'email': 'no label', 'service_ti': 'no label', 'parish': 'no label', 'diocese': 'no label', 'church_typ': 'no label', 'outdoor_se': 'no label', 'cuisine': 'no label', 'covered': 'no label', 'internet_a': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'stars': 'no label', 'addr_subur': 'no label', 'religion': 'no label', 'denominati': 'no label', 'start_date': 'no label', 'ref_hr_uzk': 'no label', 'heritage_o': 'no label', 'heritage': 'no label', 'fuel_lpg': 'no label', 'ref_HR_e-m': 'no label', 'ref_vatin': 'no label', 'fuel_oct_1': 'no label', 'compressed': 'no label', 'uic_ref': 'no label', 'parking': 'no label', 'access': 'no label', 'wheelchair': 'no label', 'waterway': 'no label', 'shop': 'no label', 'seamark_ty': 'no label', 'seamark_sm': 'no label', 'phone': 'no label', 'payment_vi': 'no label', 'payment__1': 'no label', 'payment_ma': 'no label', 'payment__2': 'no label', 'payment_di': 'no label', 'payment__3': 'no label', 'payment_ca': 'no label', 'payment_am': 'no label', 'operator': 'no label', 'fuel_oct_2': 'no label', 'fuel_diese': 'no label', 'brand': 'no label', 'addr_count': 'no label', 'man_made': 'no label', 'public_tra': 'no label', 'wikipedia': 'no label', 'sport': 'no label', 'roof_level': 'no label', 'opening_ho': 'no label', 'leisure': 'no label', 'building_m': 'no label', 'wikidata': 'no label', 'historic': 'no label', 'castle_typ': 'no label', 'roof_shape': 'no label', 'roof_mater': 'no label', 'image': 'no label', 'building_c': 'no label', 'building_l': 'no label', 'internet_1': 'no label', 'amenity': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'website': 'no label', 'name': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'type': 'no label', });
lyr_ceste_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'bicycle': 'no label', 'junction': 'no label', 'service': 'no label', 'highway': 'no label', 'parking_ri': 'no label', 'oneway_bic': 'no label', 'source_cyc': 'no label', 'cycleway_w': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'parking_la': 'no label', 'parking__1': 'no label', 'narrow': 'no label', 'surface_no': 'no label', 'embankment': 'no label', 'source_max': 'no label', 'wheelchair': 'no label', 'ramp': 'no label', 'cutting': 'no label', 'maxspeed_t': 'no label', 'maxspeed_1': 'no label', 'destinatio': 'no label', 'destinat_1': 'no label', 'destinat_2': 'no label', 'destinat_3': 'no label', 'destinat_4': 'no label', 'destinat_5': 'no label', 'covered': 'no label', 'area': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'check_date': 'no label', 'psv': 'no label', 'placement_': 'no label', 'inline_ska': 'no label', 'maxspeed_p': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'footway_su': 'no label', 'footway': 'no label', 'cycleway_s': 'no label', 'destinat_6': 'no label', 'traffic_ca': 'no label', 'cycleway_l': 'no label', 'maxheight_': 'no label', 'change_lan': 'no label', 'change_l_1': 'no label', 'destinat_7': 'no label', 'destinat_8': 'no label', 'destinat_9': 'no label', 'segregated': 'no label', 'motorhome': 'no label', 'indoor': 'no label', 'sidewalk_b': 'no label', 'tourist_bu': 'no label', 'maxspeed_a': 'no label', 'old_name_i': 'no label', 'destinat10': 'no label', 'cycleway_1': 'no label', 'parking__2': 'no label', 'sidewalk_r': 'no label', 'source_wid': 'no label', 'placemen_1': 'no label', 'hgv': 'no label', 'tracktype': 'no label', 'width': 'no label', 'cycleway': 'no label', 'sidewalk_1': 'no label', 'maxweight': 'no label', 'destinat11': 'no label', 'parking__3': 'no label', 'parking__4': 'no label', 'cycleway_r': 'no label', 'access': 'no label', 'hgv_articu': 'no label', 'bus': 'no label', 'tunnel': 'no label', 'maxheight': 'no label', 'short_name': 'no label', 'length': 'no label', 'maxweight_': 'no label', 'turn_lanes': 'no label', 'parking__5': 'no label', 'toll': 'no label', 'surface_gr': 'no label', 'noexit': 'no label', 'source_m_1': 'no label', 'source_old': 'no label', 'destinat12': 'no label', 'maxspeed_f': 'no label', 'maxspeed_b': 'no label', 'incline': 'no label', 'reg_name': 'no label', 'overtaking': 'no label', 'change_l_2': 'no label', 'maxwidth': 'no label', 'lanes_forw': 'no label', 'maxspeed_2': 'no label', 'dog': 'no label', 'source_nam': 'no label', 'layer': 'no label', 'bridge': 'no label', 'placement': 'no label', 'motorroad': 'no label', 'alt_name': 'no label', 'vehicle': 'no label', 'emergency': 'no label', 'cycleway_b': 'no label', 'turn_lan_1': 'no label', 'turn_lan_2': 'no label', 'old_ref': 'no label', 'source_one': 'no label', 'sidewalk': 'no label', 'lane_marki': 'no label', 'sidewalk_2': 'no label', 'sidewalk_l': 'no label', 'sidewalk_3': 'no label', 'parking__6': 'no label', 'motor_vehi': 'no label', 'lit': 'no label', 'horse': 'no label', 'foot': 'no label', 'smoothness': 'no label', 'noname': 'no label', 'destinat13': 'no label', 'oneway': 'no label', 'surface': 'no label', 'source_m_2': 'no label', 'ref': 'no label', 'old_name': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes_back': 'no label', 'lanes': 'no label', });
lyr_kafici_8.set('fieldLabels', {'id': 'no label', 'naziv': 'inline label - always visible', });
lyr_restorani_9.set('fieldLabels', {'id': 'no label', 'naziv': 'no label', 'ime': 'inline label - always visible', });
lyr_plae_10.set('fieldLabels', {'id': 'inline label - always visible', 'naziv': 'no label', });
lyr_fastfood_11.set('fieldLabels', {'id': 'no label', 'naziv': 'inline label - always visible', });
lyr_hoteli_12.set('fieldLabels', {'id': 'no label', 'naziv': 'inline label - always visible', });
lyr_autobusnikolodvor_13.set('fieldLabels', {'id': 'no label', });
lyr_apartmani_14.set('fieldLabels', {'id': 'no label', 'naziv': 'inline label - always visible', });
lyr_trgovine_15.set('fieldLabels', {'id': 'no label', 'naziv': 'inline label - always visible', });
lyr_pomorskaluka_16.set('fieldLabels', {'id': 'no label', 'naziv': 'inline label - always visible', });
lyr_taxistajalita_17.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_taxistajalita_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});