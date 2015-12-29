var about = {};

about.memberBios = {
  'MJFoster': 'I contributed to the Solar Payoff project because I know how frustrating home improvement decisions can be to homeowners.  Developing Solar Payoff was the 1st step in expanding its capabilities to incorporate other home improvement in the future, so I was in!  I enjoy coding because I like helping organizations\/businesses operate and communicate better, and making a difference in the world always feels good.  For fun, I enjoy spending time with my family, riding my horses, and playing golf ... not necessarily in that order!   ;)',
  'setheid': 'I\’m originally an audio engineer and musician. Coding is a perfect blend of logic and creativity, much like music. I enjoy spending time with my family, having music listening parties, playing Dota2, tasting new beers (and old beers) with friends, and eating out. I\’m working on Solar Payoff because I liked the concept and wanted to learn more about solar panels.',
  'palindromed': 'I chose the Solar Payoff because I was interested in learning about solar energy. My favorite thing about programming is writing code that actually does something. If I\'m not writing code I\'m probably hiking, watching football, or playing board games.',
  'jessethach': 'I chose Solar Payoff because I like to shine. I\'m a front-end guy, so I like to make things look pretty and interactive. I enjoy playing soccer and crushing noobs on PS4.'
};

about.team = [];  // Array of team member objects.


function TeamMember(memberData) {        // Constructor to create a team member
  this.memberName = memberData.name;
  console.log(memberData);
  // this.memberBio = memberData.bio;
  this.memberBio = about.memberBios[memberData.login];  // Add bio data, from about.memberBios object, to this instance of TeamMember.
  this.memberPic = memberData.avatar_url;
  this.memberHireable = memberData.hireable;
  this.memberProfile = memberData.html_url;
};

// add new member data to newly constructed team object.
about.createTeam = function(ctx, next) {
  if (about.team.length === 0) {
    // 'Object.keys' native JS method, returns an array of keys from it's object.
    // I.e, run about.getMember() on every object 'key' of about.memberBios
    async.map(Object.keys(about.memberBios), about.getMember, function(err, results){
      about.team = results;
      console.log('Team array initial load: ', about.team);
      next();
    });
  } else {
    console.log('Team array already loaded');
    next();
  }
};

// Get API data from GitHub for a member
about.getMember = function(member, callback) {
  $.ajax({
    url: '/github/users/' + member,
    type: 'GET',
    success: function(memberData, message, xhr) {
      var newMember = new TeamMember(memberData);
      callback(null, newMember);
    }
  });
};
