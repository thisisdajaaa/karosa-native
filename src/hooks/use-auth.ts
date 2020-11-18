import { equals } from "ramda";
import { selectors } from "@app/redux/auth";
import { initAuthState } from "@app/redux/auth/data";

import { useMemoizedSelector } from "./use-memoized-selector";

export const useAuth = () => {
  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  const isLoggedIn =
    !loginResponse.isLoading &&
    !equals(loginResponse.response, initAuthState.loginResponse.response);

  return { isLoggedIn };
};
