// pages/api/upload.js
import { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const multerAny: any = multer()
    const uploadMiddleware = multerAny.single('file')
    await new Promise((resolve, reject) => {
      uploadMiddleware(req, res, (error) => {
        if (error) {
          return reject(error)
        }
        resolve(null)
      })
    })

    // ここで画像をストレージに保存し、そのURLを取得します。
    // この例では、画像はローカルの'uploads/'ディレクトリに保存され、
    // URLは'/uploads/{ファイル名}'とします。
    const imageUrl = `/uploads/${req.file.filename}`

    res.status(200).json({ url: imageUrl })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}