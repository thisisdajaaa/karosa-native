/**
 *
 * @format
 *
 */

import { GooglePlacesAutocompleteProps } from "react-native-google-places-autocomplete";

// export type GoogleAutoCompleteProps ={
//   placeholder?: string;
//   apiKey: string;
//   fetchDetails?: boolean;
//   GooglePlacesSearchQueryRank: string;

// }

export type PropsType = {
  latitude: number;
  longitude: number;
  googleAutoCompleteProps?: GooglePlacesAutocompleteProps;
};
