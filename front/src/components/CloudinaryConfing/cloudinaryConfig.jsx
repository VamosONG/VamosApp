import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dzd6hfguw',
    api_key: '164477547715618',
    api_secret: '-znQScDkP3vQ4az32FwR1jH878c'
});


cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }, 
function(error, result) {console.log(result); });