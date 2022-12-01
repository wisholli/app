import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "580f2e3b-568f-445f-bd45-be19ff491946",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const userProfileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getUserStatus(id) {return instance.get(`profile/status/` + id).then((response) => {
    return response.data;
  });},
  updateUserStatus(status) {return instance.put(`profile/status`, {status: status}).then((response) => {
    return response.data;
  });}
}

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
} 
