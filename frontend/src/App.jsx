import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useUserStore from "./store/userStore";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";

function App() {
  const restoreUser = useUserStore((state) => state.restoreUser);
  const restoreToken = useAuthStore((state) => state.restoreToken);

  useEffect(() => {
    restoreUser();
    restoreToken();
  }, [restoreUser, restoreToken]);

  return (
    <div>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-right"/>
    </div>
  )
}

export default App;
