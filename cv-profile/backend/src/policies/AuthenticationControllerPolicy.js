const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      switch (error.message.split(" ")[0].slice(1, -1)) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address",
          });
          break;
        case "password":
          res.status(400).send({
            error: ` The password provideed failed to match the follwoing rules as followed:
                        <br>
                          1. It must contain ONLY the following characters: lower case, Upper case, number
                        <br>
                          2. It must be at least 8 characters in length and not greater than 32
                        `,
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registeration information",
          });
      }
    } else {
      next();
    }
  },
};
