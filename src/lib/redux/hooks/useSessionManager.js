import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setSession, setStatus } from "../features/sessionSlice";

const useSessionManager = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "loading") {
      dispatch(setStatus("loading"));
    } else if (status === "authenticated") {
      dispatch(setSession(session));
    } else {
      dispatch(setSession(null));
    }
  }, [session, status, dispatch]);
};

export default useSessionManager;
