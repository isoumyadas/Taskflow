import conf from "../conf/conf";
import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteEndpoint)
  .setProject(conf.appwriteProjectId);

const databases = new Databases(client);

const createTask = async ({ title, subTitle, dueDate, status }) => {
  try {
    const createdTask = await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      ID.unique(),
      {
        title,
        subTitle,
        dueDate,
        status,
      }
    );

    console.log("CreatedTask:: ", createdTask);

    return createdTask;
  } catch (error) {
    `Appwrite taskConfig:: createTask :: error => ${error.message}`;
  }
};

const updateTask = async (taskId, { title, subTitle, dueDate, status }) => {
  try {
    const updatedTask = await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      taskId,
      {
        title,
        subTitle,
        dueDate,
        status,
      }
    );

    console.log("UpdatedTask:: ", updatedTask);

    return updatedTask;
  } catch (error) {
    `Appwrite taskConfig:: updateTask :: error => ${error.message}`;
  }
};

const deleteTask = async (taskId) => {
  try {
    await databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      taskId
    );

    return true;
  } catch (error) {
    `Appwrite taskConfig:: deleteTask :: error => ${error.message}`;
  }
};

const getAllTasks = async () => {
  try {
    return await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId
    );
  } catch (error) {
    `Appwrite taskConfig:: getAllTasks :: error => ${error.message}`;
  }
};

const taskService = { createTask, updateTask, deleteTask, getAllTasks };

export default taskService;
