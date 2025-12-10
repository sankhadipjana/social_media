import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINART_CLOUD_NAME,
    api_key: process.env.CLOUDINART_API_KEY,
    api_secret: process.env.CLOUDINART_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });
});

const uplodeonCloudinart = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //uplode the fle on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file hasbeen uploded successfully
    console.log("file i suploded", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the file from local storage
    return null;
  }
};

export { uplodeonCloudinart };

/*const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
           */
