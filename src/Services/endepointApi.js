import axios from 'axios';

const API = axios.create({ baseURL: 'http://ec2-100-25-136-128.compute-1.amazonaws.com/api/' });

export const getAssetTypeDataList = async (assetType) => {
    try {
      const response = await API.post('/query/search', {
        query: {
          selector: {
            '@assetType': assetType,
          },
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  };

  export const getAssetByID = async (assetID) => {
    try {
      const response = await API.post('/query/search', {
        query: {
          selector: {
            '@key': assetID,
          },
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  };
  
  export const createAsset = async (assetType, assetValues) => {
    try {
      const response = await API.post('/invoke/createAsset', {
        asset: [
          {
            '@assetType': assetType,
            ...assetValues,
          },
        ],
      });
      return response;

    } catch (error) {
      console.error(error);
      return error.response;
    }
  };
  
  export const updateAsset = async (assetType, assetNewValues) => {
    try {
      const response = await API.put('/invoke/updateAsset', {
        update: {
          '@assetType': assetType,
          ...assetNewValues,
        },
      });
      return response;

    } catch (error) {
      console.error(error);
      return error.response;
    }
  };

  export const searchAsset = async (assetType, searchParams) => {
    try {
      const response = await API.post('/query/search', {
        query: {
          selector: {
            '@assetType': assetType,
            ...searchParams,
          },
        },
      });
      return response;

    } catch (error) {
      console.error(error);
      return error.response;
    }
  };
  
  export const deleteAssetByID = async (assetID) => {
    try {
      const response = await API.delete('/invoke/deleteAsset/', {
        data: {
          key: {
            '@key': assetID,
          },
        },
      });
      return response;

    } catch (error) {
      console.error(error);
      return error.response;
    }
  };
