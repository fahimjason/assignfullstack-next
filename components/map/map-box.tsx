import * as React from 'react';
import Map, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
    children?: React.ReactNode
}

export default function MapBox({ children, ...props }: Props) {
    const [viewState, setViewState] = React.useState({
        longitude: -87.71,
        latitude: 37.8,
        zoom: 6
    });

    return (
        <div>
            <Map
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ height: 400 }}
                mapStyle="mapbox://styles/mapbox/dark-v11"
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />

                {children ? children : ''}
            </Map>
        </div>
    );
}