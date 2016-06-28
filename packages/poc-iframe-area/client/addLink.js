Meteor.startup(function() {
	if (RocketChat.settings.get('Webmail_Enabled')) {
		RocketChat.roomTypes.add(null, 0, {
			template: 'iframeLink',
			icon: 'icon-link'
		});
	}
});