import Constants from "expo-constants";
import { Platform } from "react-native";

const localhost = Platform.OS === "ios" ? "localhost:8080" : "10.0.2.2:8080";

const ENV = {
  dev: {
    envName: "DEVELOPMENT",
    apiUrl: localhost,
    amplitudeApiKey: null,
  },
  staging: {
    envName: "STAGING",
    apiUrl: "[your.staging.api.here]",
    amplitudeApiKey: "[Enter your key here]",
    // Add other keys you want here
  },
  prod: {
    envName: "PRODUCTION",
    apiUrl: "[your.production.api.here]",
    amplitudeApiKey: "[Enter your key here]",
    // Add other keys you want here
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (
    env === null ||
    env === undefined ||
    env === "" ||
    env.indexOf("dev") !== -1
  )
    return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
};

const selectedENV = getEnvVars();

export default selectedENV;
