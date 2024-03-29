import NetInfo from "@react-native-community/netinfo";
import { isNil } from "lodash";
import { Alert, BackHandler } from "react-native";

export const formatPhoneNumber = (phoneNumber: string) => {
  const sectionOne =
    phoneNumber.substring(0, 4).substring(0, 1) === "0"
      ? phoneNumber.substring(0, 4).replace("0", "(+63) ")
      : "";
  const sectionTwo = phoneNumber.substring(4, 7);
  const sectionThree = phoneNumber.substring(7, 11);

  return [sectionOne, sectionTwo, sectionThree].join(" ");
};

export const generateRandomUsername = (length: number) => {
  let result = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result.toLowerCase();
};

export const internetCheck = () =>
  // eslint-disable-next-line import/no-named-as-default-member
  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      Alert.alert(
        "No internet connection",
        "Make sure that WI-FI or mobile data is turned on, then try again",
        [
          {
            text: "cancel",
            onPress: () => BackHandler.exitApp(),
            style: "cancel",
          },
          { text: "ok", onPress: () => internetCheck() },
        ],
        { cancelable: false }
      );
    }
  });

export const currencyFormatter = (amount: string, currency: string) => {
  return `${currency} ${amount.replace(
    /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
    "$1,"
  )}`;
};

export const formatDatePayload = (date: string | null) => {
  if (isNil(date)) return;

  return date.split("/").join("-");
};

export const replaceAll = (obj: { [key: string]: string }, text: string) => {
  return Object.entries(obj).reduce((accumulator, currentValue) => {
    const find = `{${currentValue[0]}}`;
    const regExp = new RegExp(find, "g");

    return accumulator.replace(regExp, accumulator[1]);
  }, text);
};
