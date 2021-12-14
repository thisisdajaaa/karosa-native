/**
 *
 * AddressNew
 * @format
 *
 */

import React, { FC, useCallback, useEffect, useState } from "react";

// import AddressNewConfig from "./config";
import type { AddressNewProps, PropsType } from "./types";
// import AddressNewStyles from "./styles";
import { useDispatch } from "react-redux";
import AddressNewTemplate from "@app/components/templates/AddressNewTemplate";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/address";
import { NewAddressForm } from "@app/redux/address/models";
import routes from "@app/navigators/routes";
import { ListInputPropsType } from "@app/components/templates/AddressNewTemplate/types";
import { COMMON } from "@app/constants";
import * as yup from "yup";

const AddressNew: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const inputProps: ListInputPropsType[] = [
    {
      variation: COMMON.VARIATION.THREE,
      label: "Label",
      name: "label",
      numofLines: 1,
      placeholder: "e.g. Home / Office",
    },
    {
      variation: COMMON.VARIATION.THREE,
      name: "contactName",
      label: "Contact Name",
      placeholder: "Set Name",
      numofLines: 2,
    },
    {
      variation: COMMON.VARIATION.THREE,
      name: "contactNumber",
      label: "Contact Number",
      numofLines: 2,
      placeholder: "Set Contact",
      keyboardType: "number-pad",
    },
    {
      variation: COMMON.VARIATION.ONE,
      name: "addressDetails",
      label: "Address Details",
      placeholder: "e.g. Floor, Unit, Room Number",
      numofLines: 4,
      maxLen: 50,
    },
    {
      variation: COMMON.VARIATION.ONE,
      name: "noteRider",
      label: "Note to rider",
      placeholder: "e.g. Landmark, Buidling",
      numofLines: 4,
      maxLen: 10,
    },
  ];

  const action = {
    setNewAddressForm: useCallback(
      (values: NewAddressForm) => dispatch(actions.setNewAddress(values)),
      [dispatch]
    ),
  };

  const { params } = useRoute<RouteProp<AddressNewProps, "AddressLocation">>();

  const handleSubmit = (values: NewAddressForm) => {
    action.setNewAddressForm({
      contactName: values.contactName,
      contactNumber: Number(values.contactNumber),
      label: values.label,
      addressDetails: values.addressDetails,
      noteRider: values.noteRider,
      coords: {
        latitude: params.latitude,
        longitude: params.longitude,
      },
    });

    navigate(routes.ACCOUNTS_ADDRESS);
  };
  const newAddressForm = useMemoizedSelector(selectors.getNewAddressForm);

  const addressNewSchema = yup.object({
    contactName: yup.string().required("Contact Name is a required field"),
    contactNumber: yup.number().required("Contact Number is required field"),
    label: yup.string().required("Label is a required field"),
    addressDetails: yup
      .string()
      .required("Address Details is a required field"),
  });

  const formikBag = useFormik({
    initialValues: newAddressForm,
    onSubmit: handleSubmit,
    validationSchema: addressNewSchema,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <AddressNewTemplate details={params.details} inputProps={inputProps} />
    </FormikContext.Provider>
  );
};

export default AddressNew;
