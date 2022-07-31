import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { getAssetTypeDataList } from '../Services/endepointApi';

function AppProvider({ children }) {
  const [addSubmitted, setAddSubmitted] = useState([]);
  const [allPilots, setAllPilots] = useState([]);
  const [allEvent, setAllEvent] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [listTeam, setListTeam] = useState([]);
  const [reloadPage ,setReloadPage] = useState(false);

  const getTeamList = async () => {
    await getAssetTypeDataList("driver").then((response) =>
      setAllPilots(response.data.result)
    );
    await getAssetTypeDataList("event").then((response) =>
      setAllEvent(response.data.result)
    );
    await getAssetTypeDataList("car").then((response) =>
      setAllCars(response.data.result)
    );
    await getAssetTypeDataList("team").then((response) =>
      setListTeam(response.data.result)
    );
  };

  console.log(listTeam);

  useEffect(() => {
    getTeamList();
    setReloadPage(false);
  }, [reloadPage]);
  return (
    <AppContext.Provider
      value={ {
        addSubmitted,
        setAddSubmitted,
        allPilots,
        setAllPilots,
        allEvent,
        setAllEvent,
        allCars,
        setAllCars,
        listTeam,
        setListTeam,
        reloadPage,
        setReloadPage
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
