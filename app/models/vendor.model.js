module.exports = (sequelize, Sequelize) => {
    const Vendor = sequelize.define("vendor", {
      company_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      current_products: {
        type: Sequelize.STRING
      },
      ship_for_us: {
        type: Sequelize.STRING
      },
      avg_processing_time: {
        type: Sequelize.STRING
      },
      avg_shipping_time_us: {
        type: Sequelize.STRING
      },
      avg_shipping_time_in: {
        type: Sequelize.STRING
      },
      countries_offer: {
        type: Sequelize.STRING
      },
      niche: {
        type: Sequelize.STRING
      },
      company_website: {
        type: Sequelize.STRING
      },
      company_address: {
        type: Sequelize.STRING
      },
      city_name: {
        type: Sequelize.STRING
      },
      company_state: {
        type: Sequelize.STRING
      },
      company_zip: {
        type: Sequelize.STRING
      },
      business_profile: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      pinterest: {
        type: Sequelize.STRING
      },
      youtube: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.BOOLEAN
      },
      updated_at: {
        type: Sequelize.BOOLEAN
      }
    });
    return Vendor;
  };