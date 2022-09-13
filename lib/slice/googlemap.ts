import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { useSelector, useDispatch } from 'react-redux'

export type LatLng = {
  lat: number
  lng: number
}

export type GooglemapState = {
  center: LatLng
  zoom: number
  map: any
  infoWindow: any
  markers: any[]
  listeners: any[]
  loading: boolean
  error: boolean
  errorMessage: string
}

export const initialState: GooglemapState = {
  center: {
    lat: 35.6895014,
    lng: 139.6917337
  },
  zoom: 13,
  map: null,
  infoWindow: null,
  markers: [],
  listeners: [],
  loading: false,
  error: false,
  errorMessage: '',
}

export const googlemapSlice = createSlice({
  name: 'googlemap',
  initialState,
  reducers: {
    setCenter: (state, action:PayloadAction<LatLng>) => ({
      ...state,
      center: action.payload
    }),
    setZoom: (state, action:PayloadAction<number>) => ({
      ...state,
      zoom: action.payload
    }),
    setMap: (state, action:PayloadAction<any>) => ({
      ...state,
      map: action.payload
    }),
    setInfoWindow: (state, action:PayloadAction<any>) => ({
      ...state,
      infoWindow: action.payload
    }),
    setMarkers: (state, action:PayloadAction<any[]>) => ({
      ...state,
      markers: action.payload
    }),
    setListeners: (state, action:PayloadAction<any[]>) => ({
      ...state,
      listeners: action.payload
    }),
  }
})

export const getMap = (dispatch:any, state:GooglemapState, center:LatLng, zoom:number)=>{
  const google = window.google;
  let map,mapDiv,infoWindow;
  const isNewMap = !state.map;
  if(isNewMap){
    mapDiv = document.createElement('div');
    map = new google.maps.Map(mapDiv, {center, zoom});
    infoWindow = new google.maps.InfoWindow();
    dispatch(googlemapSlice.actions.setMap(map));
    dispatch(googlemapSlice.actions.setInfoWindow(infoWindow));
  }else{
    // イベントの削除
    if(state.listeners){
      for(const listener of state.listeners){
        google.maps.event.removeListener(listener);
      }
    }
    // google.maps.event.clearInstanceListeners(map);
    // google.maps.event.clearListeners(map, "center_changed");
    // 現在のマーカーを削除
    if(state.markers){
      for(const marker of state.markers){
        marker.setMap(null);
      }
    }
    // InfoWindowを閉じる
    infoWindow = state.infoWindow;
    if(infoWindow){
      infoWindow.close();
    }

    map = state.map;
    map.setCenter(center);
    map.setZoom(zoom);
    mapDiv = map.getDiv();
  }
  return [map, mapDiv, infoWindow, isNewMap]
}
