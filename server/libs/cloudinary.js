import { v2 as cloudinary } from 'cloudinary'

// Passing parameters of cloudinary
cloudinary.config({
  cloud_name: 'da2ifhkp4',
  api_key: '683538667357461',
  api_secret: 'Oray1vsAGYIt_vpXdiP19VqsoOk',
})
export const uploadImage = async (filePath) => await cloudinary.uploader.upload(filePath, {
  folder: 'posts',
})

export const deleteImage = async (id) => await cloudinary.uploader.destroy(id)
