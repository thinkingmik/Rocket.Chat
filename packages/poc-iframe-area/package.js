Package.describe({
	name: 'poc-iframe-area',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.use('templating');
	api.use('session');
	api.use('less');
	api.use('rocketchat:lib');
	api.use('kadira:flow-router', 'client');

	api.addFiles('route.js', 'client');
	api.addFiles('addLink.js', 'client');
	api.addFiles('styles.less', 'client');
	api.addFiles('iframeLink.html', 'client');
	api.addFiles('iframeArea.html', 'client');
});

