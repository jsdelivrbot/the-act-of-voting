var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"ContinueIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "continue" )
	},
	"NoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "no" )
	},
	"ProcessOfVotingIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "process of voting" )
	},
	"CountingVotesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "counting votes" )
	},
	"ElectoralCollegeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "electoral college" )
	},
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yes" )
	},
}