const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  const { message } = req.body;
  try {
    const feedback = new Feedback({ user: req.user.id, message });
    await feedback.save();
    res.status(201).send(feedback);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user');
    res.send(feedbacks);
  } catch (err) {
    res.status(400).send(err);
  }
};
