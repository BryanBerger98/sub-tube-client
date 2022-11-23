import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2({
	clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
	clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
	redirectUri: process.env.GOOGLE_AUTH_REDIRECT_DOMAIN
});

const url = oauth2Client.generateAuthUrl({
	scope: [
		'https://www.googleapis.com/auth/youtube'
	]
})

export {
	url
}