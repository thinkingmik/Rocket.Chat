Meteor.startup(function() {
	RocketChat.settings.addGroup('Webmail', function() {
		this.add('Webmail_Enabled', true, {
			type: 'boolean',
			i18nLabel: 'Enabled',
			public: true
		});
	});
});
