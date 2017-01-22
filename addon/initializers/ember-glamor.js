import { speedy } from 'glamor';


export function initialize(application) {
  const config = application.resolveRegistration('config:environment');
  speedy(config.glamor.speedy);
}


export default {
  name: 'ember-glamor',
  initialize
};
