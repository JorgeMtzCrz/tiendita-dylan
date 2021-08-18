const cloudinary = require('cloudinary')

exports.upload = async(req,res) =>{
    const uploads = (file, folder) =>{
        return new Promise(resolve =>{
            cloudinary.uploader.upload(file, (result)=>{
                resolve({
                    url: result.url,
                    id: result.public_id
                },{
                    resource_type: 'auto',
                    folder: folder
                }
                
                )
            })
        })
    }

    const uploader = async(path) => await uploads(path, 'docs')

    if(req.method==='POST'){
        const urls = []
        const files = req.files
        for(const file of files){
            const {path} = file
            const newPath = await uploader(path)
            urls.push({newPath, name: file.originalname})
        }
        res.status(200).json({
            message: 'Imagenes subidas correctamente',
            data: urls
        })
    }
    else{
        res.status(405).json({
            err: `${req.method} method not allowed`
        })
    }
}