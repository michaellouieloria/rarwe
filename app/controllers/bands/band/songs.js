import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';

export default Controller.extend({
  title: '',
  songCreationStarted: false,
  isAddButtonDisabled: computed('title', function() {
    return isEmpty(this.get('title'));
  }),
  canCreateSong: computed('songCreationStarted', 'model.songs.[]', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
    updateRating: function(params) {
      var song = params.item, rating = params.rating;

      if (song.get('rating') === rating) {
        rating = 0;
      }
      song.set('rating', rating);
      return song.save();
    }
  }
});
