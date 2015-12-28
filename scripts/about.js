var about = {};

about.memberNames = ['MJFoster', 'setheid', 'palindromed', 'jessethach'];  // Array of team member GitHub Logins.

about.team = [];  // Array of team member objects.

function TeamMember(memberData) {        // Constructor to create a team member
  this.memberName = memberData.name;
  this.memberBio = memberData.bio;
  this.memberPic = memberData.avatar_url;
  this.memberHireable = memberData.hireable;
  this.memberProfile = memberData.html_url;
};

// add new member data to newly constructed team object.
about.createTeam = function(ctx, next) {
  if (about.team.length === 0) {
    async.map(about.memberNames, about.getMember, function(err, results){
      console.log('new team created');
      about.team = results;
      next();
    });
  } else {
    console.log('using old team');
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
