const conf = {

    appwriteUrl : String( import.meta.env.VITE_APPWRITE_ENDPOINT),

    appwriteProjectId : String( import.meta.env.VITE_PROJECT_ID) ,

    appwriteDataBaseId : String( import.meta.env.VITE_APPWRITE_DATABASE_ID) , 

    appwriteCollectionId : String( import.meta.env.VITE_APPWRITE_COLLECTION_ID) , 

    appwriteBucketId: String( import.meta.env.VITE_APPWRITE_BUCKET_ID) , 
}


export default conf