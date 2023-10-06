import {router} from "expres";


const router = Router();

router.get('/products', (req , res )=>{
    res.send('products')
})



export default router;