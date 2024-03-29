import update from 'immutability-helper';
import extendUpdate from '../../helpers/extendUpdate';
import ActionsTypes from '../../constants/ActionsTypes';
import initialState from '../initialState';

extendUpdate(update);

const app = {
  [ActionsTypes.SETUP_APP]: state => update(state, {
    app: {
      isSetup: { $set: true },
    },
  }),
};

export default app;
