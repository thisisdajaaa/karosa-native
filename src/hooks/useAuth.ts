import { selectors } from "@app/redux/auth";

import useMemoizedSelector from "./useMemoizedSelector";

const useAuth = () => {
  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);
  const registerResponse = useMemoizedSelector(
    selectors.getRegisterByPhoneResponse
  );

  const isLoggedIn = registerResponse.response.isLoggedIn
    ? registerResponse.response.isLoggedIn
    : loginResponse.response.isLoggedIn;

  return { isLoggedIn };
};

export default useAuth;
