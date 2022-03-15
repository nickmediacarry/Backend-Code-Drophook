module.exports = app => {
    const vendor_requests = require("../controllers/vendorrequest.controller.js");
    var router = require("express").Router();
    // Create a new vendor request
    router.post("/", vendor_requests.create);
    // Retrieve all Vendor requests
    router.get("/", vendor_requests.findAll);
    // Delete a vendor request  with id
    router.delete("/:id", vendor_requests.delete);
    app.use('/api/vendor_requests', router);
  };