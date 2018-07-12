module.exports = {
  create: function(req, res) {
    const email = req.body;
    sails.hooks.email.send(
      "sendEmail",
      {
        from: email.from,
        message: email.text
      },
      {
        to: email.to,
        subject: "Contact Us Email"
      },
      function(err) {
        const sender = email.from;
        console.log(err || "Mail Sent!", { sender: sender });
      }
    );
  }
};
