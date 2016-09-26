var Patient = require('../models/patient')
module.exports = function(router) {
    router.post('/patient', function(req, res) {
        var patient = new Patient();
        patient.name = req.body.name;
        patient.phone = req.body.phone;
        patient.email = req.body.email;

        patient.save(function(err) {
            if (err)
                throw err;
            res.json(data);
        });

    });
}