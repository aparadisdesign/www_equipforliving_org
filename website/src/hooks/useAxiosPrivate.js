import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
  
        if (auth?.accessToken) {
            const requestInterceptor = axiosPrivate.interceptors.request.use(
                config => {
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                    return config;
                },
                error => Promise.reject(error)
            );

            const responseInterceptor = axiosPrivate.interceptors.response.use(
                response => response,
                async error => {
                    if (error?.response?.status === 403 && !error.config._isRetry) {
                        error.config._isRetry = true;
                        try {
                            const newAccessToken = await refresh();
                            error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                            return axiosPrivate(error.config);
                        } catch (refreshError) {
                            // Handle refresh token failure
                            console.error("Failed to refresh token:", refreshError);
                            return Promise.reject(refreshError);
                        }
                    }
                    return Promise.reject(error);
                }
            );

            return () => {
                axiosPrivate.interceptors.request.eject(requestInterceptor);
                axiosPrivate.interceptors.response.eject(responseInterceptor);
            };
        }
    }, [auth, refresh]);

    return axiosPrivate;
};

export default useAxiosPrivate;
