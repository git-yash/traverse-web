import * as React from 'react';
import './CustomMap.css';
import mapboxgl from "mapbox-gl";
import {useEffect, useRef} from "react";

const CustomMap = (props: { accessToken: string, styleID: string }) => {
    mapboxgl.accessToken = props.accessToken;

    const mapContainer = useRef(null);
    const map = useRef<mapboxgl.Map | null>(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                map.current = new mapboxgl.Map({
                    container: mapContainer.current!,
                    style: props.styleID,
                    center: [longitude, latitude],
                    zoom: 12,
                });
            },
            (error) => {
                map.current = new mapboxgl.Map({
                    container: mapContainer.current!,
                    style: props.styleID,
                    center: [-122.25948, 37.87221],
                    zoom: 12,
                });
            }
        );

        return () => {
            map.current?.remove();
        };
    }, [props.styleID]);

    return <div ref={mapContainer} style={{height: '100vh'}}/>;
}

export default CustomMap;
