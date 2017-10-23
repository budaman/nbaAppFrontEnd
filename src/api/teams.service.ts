import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {
//takesikaimas
    teams = [
      {
     "teamId": 1610612737,
     "abbreviation": "ATL",
     "teamName": "Atlanta Hawks",
     "simpleName": "Hawks",
     "location": "Atlanta",
     "picUrl" : "atl",
     "roadResults" : {
       "roadPoints" : {"win" : 0, "loose" : 0},
       "homePoints" : {"win" :0, "loose" : 0},
       "totalPoints" : {"win" :0, "loose" : 0},
       "diffPoint" : {"win" :0, "loose" : 0}
     },
     "homeResut" : {
       "roadPoints" : {"win" : 0, "loose" : 0},
       "homePoints" : {"win" :0, "loose" : 0},
       "totalPoints" : {"win" :0, "loose" : 0},
       "diffPoint" : {"win" :0, "loose" : 0}
     }
   },
   {
     "teamId": 1610612738,
     "abbreviation": "BOS",
     "teamName": "Boston Celtics",
     "simpleName": "Celtics",
     "location": "Boston",
     "picUrl" : "bos",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612751,
     "abbreviation": "BKN",
     "teamName": "Brooklyn Nets",
     "simpleName": "Nets",
     "location": "Brooklyn",
     "picUrl" : "bkn",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612766,
     "abbreviation": "CHA",
     "teamName": "Charlotte Hornets",
     "simpleName": "Hornets",
     "location": "Charlotte",
     "picUrl" : "cha",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612741,
     "abbreviation": "CHI",
     "teamName": "Chicago Bulls",
     "simpleName": "Bulls",
     "location": "Chicago",
     "picUrl" : "chi",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612739,
     "abbreviation": "CLE",
     "teamName": "Cleveland Cavaliers",
     "simpleName": "Cavaliers",
     "location": "Cleveland",
     "picUrl" : "cle",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612742,
     "abbreviation": "DAL",
     "teamName": "Dallas Mavericks",
     "simpleName": "Mavericks",
     "location": "Dallas",
     "picUrl" : "dal",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612743,
     "abbreviation": "DEN",
     "teamName": "Denver Nuggets",
     "simpleName": "Nuggets",
     "location": "Denver",
     "picUrl" : "den",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612765,
     "abbreviation": "DET",
     "teamName": "Detroit Pistons",
     "simpleName": "Pistons",
     "location": "Detroit",
     "picUrl" : "det",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612744,
     "abbreviation": "GSW",
     "teamName": "Golden State Warriors",
     "simpleName": "Warriors",
     "location": "Golden State",
     "picUrl" : "gsw",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
       "teamId": 1610612745,
       "abbreviation": "HOU",
       "teamName": "Houston Rockets",
       "simpleName": "Rockets",
       "location": "Houston",
       "picUrl" : "hou",
       "road" : {"win" : 0, "loose" : 0},
       "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612754,
     "abbreviation": "IND",
     "teamName": "Indiana Pacers",
     "simpleName": "Pacers",
     "location": "Indiana",
     "picUrl" : "ind",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612746,
     "abbreviation": "LAC",
     "teamName": "Los Angeles Clippers",
     "simpleName": "Clippers",
     "location": "Los Angeles",
     "picUrl" : "lac",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612747,
     "abbreviation": "LAL",
     "teamName": "Los Angeles Lakers",
     "simpleName": "Lakers",
     "location": "Los Angeles",
     "picUrl" : "lal",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612763,
     "abbreviation": "MEM",
     "teamName": "Memphis Grizzlies",
     "simpleName": "Grizzlies",
     "location": "Memphis",
     "picUrl" : "mem",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612748,
     "abbreviation": "MIA",
     "teamName": "Miami Heat",
     "simpleName": "Heat",
     "location": "Miami",
     "picUrl" : "mia",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612749,
     "abbreviation": "MIL",
     "teamName": "Milwaukee Bucks",
     "simpleName": "Bucks",
     "location": "Milwaukee",
     "picUrl" : "mil",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612750,
     "abbreviation": "MIN",
     "teamName": "Minnesota Timberwolves",
     "simpleName": "Timberwolves",
     "location": "Minnesota",
     "picUrl" : "min",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612740,
     "abbreviation": "NOP",
     "teamName": "New Orleans Pelicans",
     "simpleName": "Pelicans",
     "location": "New Orleans",
     "picUrl" : "nop",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612752,
     "abbreviation": "NYK",
     "teamName": "New York Knicks",
     "simpleName": "Knicks",
     "location": "New York",
     "picUrl" : "nyk",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612760,
     "abbreviation": "OKC",
     "teamName": "Oklahoma City Thunder",
     "simpleName": "Thunder",
     "location": "Oklahoma City",
     "picUrl" : "okc",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612753,
     "abbreviation": "ORL",
     "teamName": "Orlando Magic",
     "simpleName": "Magic",
     "location": "Orlando",
     "picUrl" : "orl",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612755,
     "abbreviation": "PHI",
     "teamName": "Philadelphia 76ers",
     "simpleName": "76ers",
     "location": "Philadelphia",
     "picUrl" : "phi",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612756,
     "abbreviation": "PHX",
     "teamName": "Phoenix Suns",
     "simpleName": "Suns",
     "location": "Phoenix",
     "picUrl" : "phx",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612757,
     "abbreviation": "POR",
     "teamName": "Portland Trail Blazers",
     "simpleName": "Trail Blazers",
     "location": "Portland",
     "picUrl" : "por",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612758,
     "abbreviation": "SAC",
     "teamName": "Sacramento Kings",
     "simpleName": "Kings",
     "location": "Sacramento",
     "picUrl" : "sac",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612759,
     "abbreviation": "SAS",
     "teamName": "San Antonio Spurs",
     "simpleName": "Spurs",
     "location": "San Antonio",
     "picUrl" : "sas",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612761,
     "abbreviation": "TOR",
     "teamName": "Toronto Raptors",
     "simpleName": "Raptors",
     "location": "Toronto",
     "picUrl" : "tor",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612762,
     "abbreviation": "UTA",
     "teamName": "Utah Jazz",
     "simpleName": "Jazz",
     "location": "Utah",
     "picUrl" : "uta",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   },
   {
     "teamId": 1610612764,
     "abbreviation": "WAS",
     "teamName": "Washington Wizards",
     "simpleName": "Wizards",
     "location": "Washington",
     "picUrl" : "was",
     "road" : {"win" : 0, "loose" : 0},
     "home" : {"win" : 0, "loose" : 0}
   }
    ]
  constructor() { }

}
