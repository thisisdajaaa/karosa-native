/**
 *
 * AddressMain
 * @format
 *
 */

 import AddressMainTemplate from "@app/components/templates/AddressMainTemplate";
 import { actions } from "@app/redux/address";
 import { UserLocation } from "@app/redux/address/models";
 
 import React, { FC, useCallback, useEffect } from "react";
 import { useDispatch } from "react-redux";
 import type { PropsType } from "./types";
 import * as Location from "expo-location";
 const AddressMain: FC<PropsType> = (props) => {
   const {} = props;
   const dispatch = useDispatch();
 
   const action = {
     setUserLocation: useCallback(
       (values: UserLocation) => dispatch(actions.setUserLocation(values)),
       [dispatch]
     ),
   };
 
   useEffect(() => {
     handlelocation();
   });
 
   const handlelocation = () => {
     Location.installWebGeolocationPolyfill();
     navigator.geolocation.getCurrentPosition((pos) => {
       action.setUserLocation({
         latitude: pos.coords.latitude,
         longitude: pos.coords.longitude,
       });
     });
   };
 
   return <AddressMainTemplate />;
 };
 
 export default AddressMain;