import React, { useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import { getAssetTypeDataList } from '../../Services/endepointApi';

function Home() {

  const getAlbumList = async () => {
    await getAssetTypeDataList('album')
      .then((response) => console.log(response.data.result));
  };

  useEffect(() => {
    getAlbumList();
  }, []);

  return (
    <Container>
      <NavBar />  
    </Container>
  );
};

export default Home;
