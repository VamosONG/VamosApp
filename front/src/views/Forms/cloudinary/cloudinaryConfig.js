import { v2 as cloudinary } from 'cloudinary';
import { API_KEY, API_SECRET, CLOUD_NAME } from './cloudiSecret';

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

export async function POST(req, res) {
    const data = await req.formData();
    const image = data.get('file');

    if (!image) {
        return res.status(400).json({ message: 'No se subió la imagen' });
    }
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    // const response = await new Promise((resolve, reject) => {
    //     cloudinary.uploader.upload_stream({}, (err, result) => {
    //         if (err) {
    //             reject(err)
    //         }
    //         resolve(result)
    //     }).end(buffer)
    // })
    try {
        const response = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            }).end(buffer)
        })
        return response
    } catch (error) {
        console.error('Error al subir imagen a Cloudinary:', error);
        return res.status(500).json({ message: 'Error interno del serv|idor' });
    }
}
