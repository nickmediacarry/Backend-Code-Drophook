const db = require("../models");
const VendorRequest = db.vendor_requests;
const Op = db.Sequelize.Op;

// create and insert data into vendor request table

exports.create = (req, res) => {
    // Validate request
    if (!req.body.company_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a vendor
    const vendor_requests = {
      company_name : req.body.company_name,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      current_products: req.body.current_products,
      ship_for_us: req.body.ship_for_us,
      avg_processing_time: req.body.avg_processing_time,
      avg_shipping_time_us: req.body.avg_shipping_time_us,
      avg_shipping_time_in: req.body.avg_shipping_time_in,
      countries_offer: req.body.countries_offer,
      niche: req.body.niche,
      company_website: req.body.company_website,
      company_address: req.body.company_address,
      city_name: req.body.city_name,
      company_state: req.body.company_state,
      company_zip: req.body.company_zip,
      business_profile: req.body.business_profile,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      pinterest: req.body.pinterest,
      youtube: req.body.youtube,
      role: req.body.role,
      status: req.body.status,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at
    };
    // Save vendor requests in the database
    VendorRequest.create(vendor_requests)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the vendor request."
        });
      });
  };

  // get all vendor requests
  exports.findAll = (req, res) => {
    const status = req.query.status;
    var condition = status ? { status: { [Op.iLike]: `%${status}%` } } : null;
    VendorRequest.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vendor request."
        });
      });
  };

  // delete all vendor after approval
  exports.delete = (req, res) => {
    const id = req.params.id;
    VendorRequest.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "vendor request was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete vendor request with id=${id}. Maybe vendor request was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };