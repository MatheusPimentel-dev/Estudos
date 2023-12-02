const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({ message: "Tudo certo com o método GET dessa raiz" });
});

router.post('/', (req, res) => {
    return res.send({ message: "Tudo certo com o método Post dessa raiz" });
});

module.exports = router;