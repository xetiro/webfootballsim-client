class League {
    constructor(name, maxNumberOfTeams) {
        this.name = name;
        this.maxNumberOfTeams = maxNumberOfTeams;

        this.allTeams = new Map();
    }

    setTeams(teams) { this.allTeams = teams; }

    getTeam(id) { return this.allTeams.get(id); }
}

class Team {
    constructor(name, league) {
        this.name = name;
        this.league = league;
    }
}