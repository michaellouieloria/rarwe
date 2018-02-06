import EmberObject from '@ember/object';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:bands/band/songs', 'Unit | Controller | bands/band/songs', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('canCreateSong', function(assert) {
  assert.expect(3);
  var controller = this.subject();
  var band = EmberObject.create();
  controller.set('model', band);
  controller.set('songCreationStarted', false);
  assert.ok(!controller.get('canCreateSong'), "Can't create song if process has not started and no songs yet ");
  controller.set('songCreationStarted', true);
  assert.ok(controller.get('canCreateSong'), 'Can create song if process has started ');
  controller.set('songCreationStarted', false);
  var songs = [
    EmberObject.create({
      id: 1,
      title: 'Elephants',
      rating: 5
    }),
  ];
  band.set('songs', songs);
  assert.ok(controller.get('canCreateSong'), 'Can create song if process has not started but there are already songs ');
});
