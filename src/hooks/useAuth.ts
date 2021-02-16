import { equals } from "ramda";
import { selectors } from "@app/redux/auth";
import { initAuthState } from "@app/redux/auth/data";

import useMemoizedSelector from "./useMemoizedSelector";

const useAuth = () => {
  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  const isLoggedIn =
    !loginResponse.isLoading &&
    !equals(loginResponse.response, initAuthState.loginResponse.response);

  return { isLoggedIn };
};

export default useAuth;
