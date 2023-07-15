// import { Source, Layer } from 'react-map-gl';
// import type { CircleLayer } from 'react-map-gl';
// import type { FeatureCollection } from 'geojson';



// const layerStyle: CircleLayer = {
//     id: 'point',
//     type: 'circle',
//     source: "snotel-sites",
//     paint: {
//         'circle-radius': 4,
//         'circle-color': '#007cbf'
//     }
// };

// export default function MapSource({ geoData }: FeatureCollection) {
//     return (
//         <div>
//             <Source type="geojson" data={geoData}>
//                 <Layer {...layerStyle} />
//             </Source>
//         </div>
//     );
// }

import { Source, Layer } from 'react-map-gl';
import { CircleLayer } from 'react-map-gl';
import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

interface MapSourceProps {
    geoData: FeatureCollection<Geometry, GeoJsonProperties>;
}

const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    source: 'snotel-sites',
    paint: {
        'circle-radius': 4,
        'circle-color': '#007cbf',
    },
};

export default function MapSource({ geoData }: MapSourceProps) {
    return (
        <div>
            <Source type="geojson" data={geoData}>
                <Layer {...layerStyle} />
            </Source>
        </div>
    );
}