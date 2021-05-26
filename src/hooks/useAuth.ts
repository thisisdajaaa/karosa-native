import { selectors } from "@app/redux/auth";

import useMemoizedSelector from "./useMemoizedSelector";

const useAuth = () => {
  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  const isLoggedIn = loginResponse.response.isLoggedIn;

  return { isLoggedIn };
};

export default useAuth;
