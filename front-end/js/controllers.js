angular
  .module("lightsaberApp")
  .controller("MainController", MainController)
  .controller("EpisodeController", EpisodeController);

EpisodeController.$inject = ['Episode']
function EpisodeController(Episode) {
  var self = this;

  this.episode = {}

  var Episode = Episode;

  this.episodes = Episode.query();

  this.selectEpisode = function(episode) {
    self.selectedEpisode = Episode.get({id: episode._id});
  };

  this.addEpisode = function() {
    if (self.episode._id) {
      Episode.update(self.episode, function(){
        self.episode = {};
      });
    } else {
      Episode.save(self.episode, function(episode) {
        self.episodes.push(episode);
        self.episode = {}
      });
    }
  };

  this.deleteEpisode = function(episode){
    Episode.delete({id: episode._id});
    var index = self.episodes.indexOf(episode);
    self.episodes.splice(index, 1);
  }

  // Fill the form to edit a Character
  this.editEpisode = function(episode){
    self.episode = episode;
  }
}

MainController.$inject = ['Character']
function MainController(Character){
  var self = this;
  // Blank new character for form
  this.character = {}
  // Obtain our resource class
  var Character = Character;
  // Fetch all todos
  this.characters = Character.query();

  // Fetch the clicked character
  this.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({id: character._id});
  };

  // Save as a Constructor
  // this.addCharacter = function() {
  //   var character = new Character(self.character);
  //   character.$save(function(){
  //     self.characters.push(character);
  //     self.character = {};
  //   });
  // };

  // Create/Update a Character (Class Method)
  this.addCharacter = function() {
    if (self.character._id) {
      Character.update(self.character, function(){
        self.character = {};
      });
    } else {
      Character.save(self.character, function(character) {
        self.characters.push(character);
        self.character = {}
      });
    }
  };

  //s Delete a Character
  this.deleteCharacter = function(character){
    Character.delete({id: character._id});
    var index = self.characters.indexOf(character);
    self.characters.splice(index, 1);
  }

  // Fill the form to edit a Character
  this.editCharacter = function(character){
    self.character = character;
  }
}