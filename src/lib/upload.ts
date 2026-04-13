import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "taskspot-documents",
      allowed_formats: ["jpg", "jpeg", "png", "pdf"],
      resource_type: "auto",       //  handles both images AND pdfs
      use_filename: true,          //  keeps original filename
      unique_filename: true,       //  avoids overwrites
    };
  },
});

export const upload = multer({ storage });