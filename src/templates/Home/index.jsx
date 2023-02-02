/* eslint-disable no-unused-vars */
import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import * as Styled from './styles';

import { mockBase } from '../Base/mock';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[slug]=olha-so-a-minha-pagina&populate[sections][populate]=*&populate[menu][populate]=*',
        );
        const json = await data.json();
        // [attributes] por que 'attributes' ali é Objeto e la precisa de uma array de objetos o mapData
        // [0] por que o map retorna um array d objeto
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };
    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
}

export default Home;
