import {
  ALL_AGENDAS_SUCCESS,
  ALL_AGENDAS_FAIL,
  CLEAR_ERRORS,
} from "../constants/agendaConstant";

// all agenda reducer

export const allAgendaReducer = (state = { agendas: [] }, action) => {
  switch (action.type) {
    case ALL_AGENDAS_SUCCESS:
      return {
        agendas: action.payload.data,
      };

    case ALL_AGENDAS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
