Package.describe({
  summary: "Plugin to define a honeypot captcha template to protect your forms from spambots"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files([
    'honeypot.js',
    'honeypot.css',
    'honeypot.html'
  ], 'client');
  api.export('Honeypot');
});