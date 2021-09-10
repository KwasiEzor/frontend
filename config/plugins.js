module.exports = ({ env }) => ({
  email: {
    provider: "sengrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "kwasiezor.dev@gmail.com",
      defaultReplyTo: "kwasiezor.dev@gmail.com",
    },
  },
});
