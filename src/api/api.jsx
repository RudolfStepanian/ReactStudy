import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7f4f9106-7dd1-4a68-b772-e90710c36a32"
    }
});

export const userAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (id) => {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/` + id)
            .then(response => response.data)
    },
    unFollow: (id) => {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + id)
            .then(response => response.data)
    }
};