const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bitidentity', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const IdentitySchema = new mongoose.Schema({
  id: String,
  identity: String,
  createdAt: { type: Date, default: Date.now }
});

const Identity = mongoose.model('Identity', IdentitySchema);

exports.recordIdentity = async (identityData) => {
  const identity = new Identity(identityData);
  await identity.save();
};

exports.getReports = async () => {
  return await Identity.find();
};
