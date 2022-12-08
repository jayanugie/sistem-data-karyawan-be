const router = require('express').Router();

const pegawai = require('./controllers/pegawai');

router.get('/pegawai', pegawai.getPegawai);
router.post('/pegawai', pegawai.createPegawai);
router.delete('/pegawai/delete/:id', pegawai.deletePegawai);
router.put('/pegawai/update/:id', pegawai.updatePegawai);

module.exports = router;