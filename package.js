Package.describe({
  name: "em0ney:honeypot",
  git: "https://github.com/em0ney/meteor-honeypot",
  version: "0.1.0",
  summary: "Plugin to define a honeypot captcha template to protect your forms from spambots"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('templating', 'client');
  api.add_files([
    'honeypot.js',
    'honeypot.css',
    'honeypot.html'
  ], 'client');
  api.export('Honeypot');
});