import { Source, Layer } from 'react-map-gl';
import type { CircleLayer } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';

const geojson: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [-122.4, 37.8] } }
    ]
};

const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    source: "snotel-sites",
    paint: {
        'circle-radius': 4,
        'circle-color': '#007cbf'
    }
};

export default function MapSource({ geoData }: FeatureCollection) {
    return (
        <div>
            <Source type="geojson" data={geoData}>
                <Layer {...layerStyle} />
            </Source>
        </div>
    );
}