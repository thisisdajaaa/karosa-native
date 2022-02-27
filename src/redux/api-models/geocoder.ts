export type LocationType = "APPROXIMATE" | "ROOFTOP" | string;

export type LatLng = {
  lat: number;
  lng: number;
};

export type PlusCode = {
  compound_code: string;
  global_code: string;
};

export type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type Bounds = {
  bounds: {
    northeast: LatLng;
    southwest: LatLng;
  };
};

export type ViewPort = {
  northeast: LatLng;
  southwest: LatLng;
};

export type Geometry = {
  bounds: Bounds;
  location: LatLng;
  location_type: LocationType;
  viewport: ViewPort;
};

export type Result = {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
  plus_code: PlusCode;
};

export type Request = {
  latlng: string;
  key: string;
};

export type Response = {
  plus_code: PlusCode;
  results: Result[];
  status: "OK" | string;
};
