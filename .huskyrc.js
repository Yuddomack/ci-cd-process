module.exports = {
  hooks: {
    "pre-commit": "npm run lint && npm run test",
    "pre-push": "./huskyhooks/pre-push.sh",
  },
};
