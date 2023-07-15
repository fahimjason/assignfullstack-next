import Head from 'next/head'
import MapBox from '../components/map/map-box';
import Header from '../components/ui/header';
import Navigation from '../components/ui/navigation';
import MapSource from '../components/map/map-source';
import useRequest from '@/hooks/use-request';
import { useEffect, useState } from 'react';
import SelectedField from '@/components/information/selected-field';

export default function Home() {
  const { doRequest } = useRequest({
    url: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson',
    method: 'get',
  });

  const [data, setData] = useState({});

  const getData = async () => {
    const data = await doRequest()
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Map App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <main>
        <MapBox>
          <MapSource geoData={data} />
        </MapBox>
      </main>
      <SelectedField />
    </>
  )
}
