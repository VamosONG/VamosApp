import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dzd6hfguw',
    api_key: '164477547715618',
    api_secret: '-znQScDkP3vQ4az32FwR1jH878c'
});

export async function POST(req, res) {
    const data = await req.formData();
    const image = data.get('file');

    if (!image) {
        return res.status(400).json({ message: 'No se subió la imagen' });
    }

    try {
        const response = await cloudinary.uploader.upload(image.path);
        return res.json({
            message: 'Imagen subida a Cloudinary',
            url: response.secure_url
        });
    } catch (error) {
        console.error('Error al subir imagen a Cloudinary:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}
