import { takeEverySaga as messagesSaga } from '../Messages/sagas/messages';
import { takeLatestSaga as messagesDetailsSaga } from '../Messages/sagas/messageDetails';

const allSagas = [].concat(
  messagesSaga,
  messagesDetailsSaga
  // others ...
);

export default allSagas;
