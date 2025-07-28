const conf = {
  appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_FIREBASE_API_KEY),
  appwriteDatabaseId: String(import.meta.env.VITE_FIREBASE_API_KEY),
  appwriteCollectionId: String(import.meta.env.VITE_FIREBASE_API_KEY),
};

export default conf;
