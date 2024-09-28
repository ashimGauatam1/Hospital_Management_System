
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_SCRT 
});

const uploadOnCloud=async(filepath)=>{
    try {
        if(!filepath){
            return null
        }
        const response=await cloudinary.uploader.upload(filepath,{
            resource_type:'auto'
        })
        fs.unlinkSync(filepath)
        return response;
    } catch (error) {
        fs.unlinkSync(filepath)
        console.log(error);
    }
}

export default uploadOnCloud;