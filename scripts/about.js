var about = {};

var memberNames = ['MJFoster', 'setheid', 'palindromed', 'jessethach'];  // Array of team member GitHub Logins.

var team = [];  // Array of team member objects.

function TeamMember(memberData) {        // Constructor to create a team member
  this.memberName = memberData.name;
  this.memberBio = memberData.bio;
  this.memberPic = memberData.avatar_url;
  this.memberHireable = memberData.hireable;
  this.memberProfile = memberData.html_url;
};

// Get API data from GitHub & add to newly constructed team object.
about.createTeamMember = function(memberNames) {
  memberNames.forEach(function(member, index){
    $.ajax({
      url: '/github/users/' + member,
      type: 'GET',
      success: function(memberData, message, xhr) {
        team[index] = new TeamMember(memberData);
      }
    });
  });
};

// Initiates CREATION & LOADING of 'team' array!
about.createTeamMember(memberNames);
