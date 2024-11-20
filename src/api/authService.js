import axiosInstance from "./axios";

const AuthService = {
    googleAuth: async (token) => {
        const response = await axiosInstance.post('/auth/google-auth', { token });
        console.log("user fe: ", response.data)
        return response.data;
    }
    
};

export default AuthService;
