'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Study Buddy'});
};
 
exports.login = (req, res)=>{
  res.render('home/login', {title: 'Study Buddy Login'});
};
