import { ENUM } from "@app/constants";
import { selectors } from "@app/redux/auth";

import useMemoizedSelector from "./useMemoizedSelector";

const useAuth = () => {
  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);
  const registerResponse = useMemoizedSelector(selectors.getRegisterResponse);
  const authContext = useMemoizedSelector(selectors.getAuthEntryContext);

  let isLoggedIn = false;

  if (
    authContext.oauth === ENUM.OAuth.Google ||
    authContext.oauth === ENUM.OAuth.Facebook ||
    registerResponse.response.isLoggedIn ||
    loginResponse.response.isLoggedIn
  ) {
    isLoggedIn = true;
  }

  return { isLoggedIn };
};

export default useAuth;
