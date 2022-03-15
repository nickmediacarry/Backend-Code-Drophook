module.exports = {
    HOST: "drohook-vendor-portal.cjpdvg68qqay.us-east-2.rds.amazonaws.com",
    USER: "postgres",
    PASSWORD: "MediaCarry#123!",
    DB: "dropbook-vendor-portal",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };