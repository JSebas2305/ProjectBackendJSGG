const {Series} = require('../models/series')


class ApiController  { 
    
    testApi   (req, res)  {
        res.send('Hell00!')
    }
    async getApi   (req, res)  {
        const list = await Series.find();
        console.log(list)
        res.status(200).json(list)
    }
    async postApi  (req, res)  {
        try {
            const newSerie = new Series(req.body)
            await newSerie.save()
            console.log(newSerie)
            res.status(201).json(newSerie)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
    
    putApi  (req, res)  {
        res.status(201).send('Esto es una api put')
    }
    patchApi  (req, res)  {
        res.status(404).send('Esto es una api patch')
        }
    deleteApi  (req, res)  {
        res.status(200).send('Esto es una api delete')
        }
}



module.exports = new ApiController