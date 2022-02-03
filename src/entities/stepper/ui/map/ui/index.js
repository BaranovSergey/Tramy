import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import React, { useRef, useEffect, useState } from "react";
import {makeStyles} from "@mui/styles";

const draw = new MapboxDraw(
    {
        displayControlsDefault: false,
        controls: {
            line_string: true,
            trash: true
        },
        styles: [
            // ACTIVE (being drawn)
            // line stroke
            {
                "id": "gl-draw-line",
                "type": "line",
                "filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#3b9ddd",
                    "line-dasharray": [0.2, 2],
                    "line-width": 4,
                    "line-opacity": 0.7
                }
            },
            // vertex point halos
            {
                "id": "gl-draw-polygon-and-line-vertex-halo-active",
                "type": "circle",
                "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                "paint": {
                    "circle-radius": 10,
                    "circle-color": "#FFF"
                }
            },
            // vertex points
            {
                "id": "gl-draw-polygon-and-line-vertex-active",
                "type": "circle",
                "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "#3b9ddd",
                }
            },
        ]
    }
);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2V5MTQ4OCIsImEiOiJja3o3Mmd0Z2YwMDNpMm9ycHNxMTRrZWdqIn0.crpxKib-VbsSIvR4fgyW7g';

const useStyles = makeStyles(() => ({
    root:{
        height: 300
    }
}))

const MapGlCustom = () => {
    const classes = useStyles();
    const [mapState, setMap] = React.useState();
    const mapContainer = useRef(null);
    const map = useRef(null);

    const [lng, setLng] = useState(-74.6809914155087);
    const [lat, setLat] = useState(43.44757643131413);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(draw)
        // map.addControl(draw);
        map.current.on('draw.create', updateRoute);
        map.current.on('draw.update', updateRoute);
        map.current.on('draw.delete', removeRoute);
        setMap(map);
    });

    useEffect(() => {
        console.log('mapState', mapState);
    },[mapState])

    // make a directions request
    function getMatch(e) {
        const url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + e +'?geometries=geojson&steps=true&&access_token=' + mapboxgl.accessToken;
        const req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', url, true);
        req.onload  = function() {
            const jsonResponse = req.response;
            const distance = jsonResponse.routes[0].distance*0.001;
            const duration = jsonResponse.routes[0].duration/60;
            // document.getElementById('calculated-line').innerHTML = 'Distance: ' + distance.toFixed(2) + ' km<br>Duration: ' + duration.toFixed(2) + ' minutes';
            const coords = jsonResponse.routes[0].geometry;
            // add the route to the map
            addRoute(coords);
        };
        req.send();
    }

    // use the coordinates you just drew to make your directions request
    function updateRoute() {
        removeRoute(); // overwrite any existing layers
        const data = draw.getAll();
        const answer = document.getElementById('calculated-line');
        const lastFeature = data.features.length - 1;
        const coords = data.features[lastFeature].geometry.coordinates;
        const newCoords = coords.join(';')

        console.log('newCoords', newCoords);
        getMatch(newCoords);
    }

    // adds the route as a layer on the map
    function addRoute (coords) {
        // check if the route is already loaded
        if (map.current.getSource('route')) {
            map.current.removeLayer('route')
            map.current.removeSource('route')
        } else{
            map.current.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": coords
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#e555b4",
                    "line-width": 8,
                    "line-opacity": 0.8
                }
            });
        };
    }

    // remove the layer if it exists
    function removeRoute () {
        if (map.current.getSource('route')) {
            map.current.removeLayer('route');
            map.current.removeSource('route');
            // document.getElementById('calculated-line').innerHTML = '';
        } else  {
            return;
        }
    }

    // useEffect(() => {
    //     map.on('draw.create', updateRoute);
    //     map.on('draw.update', updateRoute);
    //     map.on('draw.delete', removeRoute);
    // }, [map])


    return (
        <div id={'mapTTT'} style={{width:"500px", height:"300px"}}>
            <div ref={mapContainer} className={classes.root} />
        </div>
    );
};

export default MapGlCustom;