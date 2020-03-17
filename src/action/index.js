import { getAllUsers } from "./admin";
import { addPost, deletePost, getPost, getPosts, setNewImage, updatePost } from "./post";
import { closeLoading, showLoading } from "./spinner";
import { deleteAvatar, deleteMe, getAvatar, getMe, login, logout, logoutAll, signup, updateAvatar, updateMe } from "./user";

export { login, logout, showLoading, closeLoading, addPost, deletePost, getPost, updatePost, deleteAvatar, deleteMe, getAvatar, getMe, logoutAll, signup, updateAvatar, updateMe, getPosts, setNewImage, getAllUsers };

