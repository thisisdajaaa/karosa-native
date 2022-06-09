import React, { JSXElementConstructor } from "react";
import { View } from "react-native";
import {
  render,
  RenderOptions,
  fireEvent,
  act,
} from "@testing-library/react-native";
import { Formik, FormikValues } from "formik";

export { fireEvent, act };

// for getting findByType e.g. wrapper.findByType(Icon) see implementation in Avatar Component
export const renderWithWrapper = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any, string | JSXElementConstructor<any>>,
  wrapperTestID?: string,
  _themeProp: unknown = {},
  renderOptions?: RenderOptions
) => {
  const options: RenderOptions = {
    ...(!wrapperTestID && {
      wrapper: (props) => <View {...props} testID="wrapper" />,
    }),
    ...renderOptions,
  };

  const renderApi = render(children, options);
  const wrapper = renderApi.queryByTestId(wrapperTestID || "wrapper");
  return { wrapper, ...renderApi };
};

export const renderWithFormikWrapper = <T extends FormikValues>(
  initialValues: T,
  children: React.ReactElement<any, string | JSXElementConstructor<any>>
) => {
  return renderWithWrapper(
    <Formik
      initialValues={initialValues}
      onSubmit={() => console.log("submit")}
      component={() => children}
    />
  );
};
