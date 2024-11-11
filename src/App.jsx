import './App.css'
import { useEffect } from "react";
import AppRoutes from "./AppRoutes.jsx";
import Header from "./components/Header/Header.jsx";
import Loading from "./components/Loading/Loading.jsx";
import { useLoading } from "./hooks/useLoading.jsx";
import setLoadingInterceptor from "./interceptors/loadingInterceptor.js";

function App() {

  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, [])


  return (
    <>
      <Header />
      <Loading />
      <AppRoutes />
    </>
  );
}

export default App
