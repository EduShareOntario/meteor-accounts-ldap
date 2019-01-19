Package.describe({
  'summary': 'Meteor account login via LDAP using activedirectory.js (coffeescript2)',
  'version': '0.2.0',
  'git' : 'https://github.com/EduShareOntario/meteor-accounts-ldap.git',
  'name' : 'edushareontario:meteor-accounts-ldap'
});

Npm.depends({'activedirectory' : '0.7.0'});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.4.4.5");
  api.use(['coffeescript@2.2.1_1'], 'server');
  api.use(['accounts-base@1.4.2'], ['client', 'server']);
  api.imply('accounts-base@1.4.2', ['client', 'server']);
  api.use(['templating@1.2.15','jquery@1.11.11'], 'client');
  api.add_files([
    'ldap_client.html',
    'ldap_client.js'], 'client');
  api.add_files('ldap_server.coffee', 'server');
});
