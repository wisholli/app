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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const userProfileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getUserStatus(id) {
    return instance.get(`profile/status/` + id);
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  updateUserPhoto(newPhotoFile) {
    const formData = new FormData();
    formData.append("image", newPhotoFile);
    return instance.put("profile/photo", formData, {
      headers: { "Content-Type": "multipart/from-data" },
    });
  },
  saveEditProfileData(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  auth() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
