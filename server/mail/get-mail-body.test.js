const { getConfirmationMessageFromReact } = require('./get-mail-body');

const message = getConfirmationMessageFromReact({
  language: 'vi',
  name: 'Tester',
  comment: 'Test comment',
  interests: [
    'presentation',
    'information',
    'volunteer',
    'other'
  ]
});

console.log(message);
