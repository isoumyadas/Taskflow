import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteEndpoint)
  .setProject(conf.appwriteProjectId);
const account = new Account(client);

const createAccount = async ({ email, password, username }) => {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (userAccount) {
      return userLogin({ email, password });
    } else {
      return userAccount;
    }
  } catch (error) {
    throw new Error(
      `Appwrite auth:: createAccount :: error => ${error.message}`
    );
  }
};

const userLogin = async ({ email, password }) => {
  try {
    console.log("juh");
    const loggedIn = await account.createEmailPasswordSession(email, password);
    console.log("LoogedIn:: ", loggedIn);
    return loggedIn;
  } catch (error) {
    throw new Error(`Appwrite auth:: userLogin :: error => ${error.message}`);
  }
};

const getCurrentUser = async () => {
  try {
    const userData = await account.get();
    return userData;
  } catch (error) {
    throw new Error(
      `Appwrite auth:: getCurrentUser :: error => ${error.message}`
    );
  }
};

const logout = async () => {
  try {
    return await account.deleteSessions();
  } catch (error) {
    throw new Error(`Appwrite auth:: userLogout :: error => ${error.message}`);
  }
};

const authService = { createAccount, userLogin, logout, getCurrentUser };
export default authService;
