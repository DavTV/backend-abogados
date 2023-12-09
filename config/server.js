module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["YEu3P3NQW07cA2yFZc/27g==","w6b2jfkAjEKjIkjeBDaPBw==","P/351K7UPCBd+ixftxqQ/w=="]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
