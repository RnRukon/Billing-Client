import { RouterProvider } from "react-router-dom";
import './App.css';
import { routers } from "./Routers/Routers";
import { ToastContainer } from 'react-toastify';
import { setAccessTokenAndUser } from "./Redux/Featurse/Users/UserSlice/UserSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAccessTokenAndUser());
  }, [dispatch])



  return (
    <div className=" bg-slate-700">
      <RouterProvider router={routers} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
