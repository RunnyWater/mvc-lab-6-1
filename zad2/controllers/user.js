const User = require('../models/User');

exports.getSetUserSession = (req, res) => {
    const users = User.getAll();
    res.render('set-user-session', { title: 'Set User Session', users });
};

exports.setUserSession = (req, res) => {
    req.session.userId = req.body.userId;
    res.redirect('/');
};
