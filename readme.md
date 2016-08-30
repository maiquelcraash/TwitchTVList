- Ferramenta para  visualizar streams do TwitchTV

- Tarefa do Free Code Camp
https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api

- Aplicação exemplo:
https://codepen.io/FreeCodeCamp/full/Myvqmo/

- Documentação da API do Twitch
https://github.com/justintv/Twitch-API#json-p

- Pegar algumas streams que estão bombando
https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamsfeatured

- Pegar as streams do FreeCodeCamp
https://api.twitch.tv/kraken/streams/freecodecamp

- Pegar mais algumas dos usuários:
["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

- Mostrar tabela, com os featured, depois os users online e depois os offline e desativados

- Mostrar Miniatura, Nome do canal, Nome do usuário, descricão do que está assistindo e número de visualizadores

- Exemplo do JSON:

{
	"_links":
	{
		"self": "https://api.twitch.tv/kraken/streams/featured?limit=1&offset=0", 
		"next": "https://api.twitch.tv/kraken/streams/featured?limit=1&offset=1"
	},
	"featured":
	[{
		"text": "<p><a href=\"/highspirits\">Highspirits is attempting the improbable</a>, trying to defeat all nine Dragon Quest/Dragon Warrior games back-to-back over 3 days!  This marathon is the culmination of nearly 2 years of practice and speedruns.  Come watch as he struggles and fights to succeed where no one else has before!  Such passion, such zeal, such GUSTO!</p>\n\n<p><a href=\"partner-speedrunning,%20speedrun\"></a></p>\n",
		"title": "Dragon Quest 1-9",
		"sponsored": false,
		"priority": 5,
		"scheduled": true,
		"image": "https://s.jtvnw.net/jtv_user_pictures/hosted_images/highspirits_fp_august2016.png",
		"stream": {
			"_id": 23033364672,
			"game": "Dragon Quest IV: Chapters of the Chosen",
			"viewers": 1816,
			"video_height": 720,
			"average_fps": 30.0366300366,
			"delay": 0,
			"created_at": "2016-08-29T13:47:07Z",
			"is_playlist": false,
			"preview": {
				"small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_highspirits-80x45.jpg",
				"medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_highspirits-320x180.jpg",
				"large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_highspirits-640x360.jpg",
				"template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_highspirits-{width}x{height}.jpg"
			},
			"_links": {"self": "https://api.twitch.tv/kraken/streams/highspirits"},
			"channel": {
				"mature": false,
				"status": "DQ 1-9: Dragon Warrior 4 any% (NES) - !dq1-9",
				"broadcaster_language": "en",
				"display_name": "Highspirits",
				"game": "Dragon Quest IV: Chapters of the Chosen",
				"language": "en",
				"_id": 41760147,
				"name": "highspirits",
				"created_at": "2013-03-27T08:09:47Z",
				"updated_at": "2016-08-30T11:33:33Z",
				"delay": null,
				"logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/highspirits-profile_image-bc16bb4bb0d7dbfa-300x300.jpeg",
				"banner": null,
				"video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/highspirits-channel_offline_image-4a8c16345c4227cb-1920x1080.png",
				"background": null,
				"profile_banner": null,
				"profile_banner_background_color": null,
				"partner": true,
				"url": "https://www.twitch.tv/highspirits",
				"views": 624078,
				"followers": 5298,
				"_links": {
					"self": "https://api.twitch.tv/kraken/channels/highspirits",
					"follows": "https://api.twitch.tv/kraken/channels/highspirits/follows",
					"commercial": "https://api.twitch.tv/kraken/channels/highspirits/commercial",
					"stream_key": "https://api.twitch.tv/kraken/channels/highspirits/stream_key",
					"chat": "https://api.twitch.tv/kraken/chat/highspirits",
					"subscriptions": "https://api.twitch.tv/kraken/channels/highspirits/subscriptions",
					"editors": "https://api.twitch.tv/kraken/channels/highspirits/editors",
					"teams": "https://api.twitch.tv/kraken/channels/highspirits/teams",
					"videos": "https://api.twitch.tv/kraken/channels/highspirits/videos"
				}
			}
		}
	}]
}