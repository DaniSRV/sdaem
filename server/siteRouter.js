import { Router } from "express";
const router = new Router();
import path from 'path'

router.get('/', (req, res) => {
	res.sendFile('/client/index.html', { root: path.dirname('../client') })
})
router.get('/ui', (req, res) => {
	res.sendFile('/client/ui.html', { root: path.dirname('../client') })
})
export default router