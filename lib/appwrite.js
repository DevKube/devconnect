import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.dv.dc",
    projectId: "662e1543000318c5e007",
    databaseId: "662e172e001486dc6f2f",
    userCollectionId: "662e174c00159e0b9292",
    postCollectionId: "662e179d001480b9ab28",
    stoarageId: "662e2199000bb36bc94f",
  };

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User

export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );  

            return newUser;
    } catch (error) {
        console.error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        console.error(error);
    }
}
