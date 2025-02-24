import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
    const coordinates = [41.365627, 69.333929];
    return (
        <YMaps>
            <Map
                defaultState={{ center: coordinates, zoom: 16 }}
                width="100%"
                height="100%"
                overflow= 'hidden'
            >
                <Placemark geometry={coordinates} />
            </Map>
        </YMaps>
    );
};

export default YandexMap;
