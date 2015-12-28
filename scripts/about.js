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

// Get API data from GitHub & add to newly constructed team object.
about.createTeamMember = function() {
  about.memberNames.map(function(member, index){
    $.ajax({
      url: '/github/users/' + member,
      type: 'GET',
      success: function(memberData, message, xhr) {
        var member = new TeamMember(memberData);
        about.team.push(member);//keep an array of objects just in case
        aboutView.loadTemplate(member);
      }
    });
  });
};
