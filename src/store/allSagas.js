import { takeEverySaga as messagesSaga } from '../Messages/sagas.js';

const allSagas = [].concat(
  messagesSaga
  // others ...
);

export default allSagas;
