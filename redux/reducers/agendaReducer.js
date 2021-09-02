import {
  ALL_AGENDAS_FAIL,
  ALL_AGENDAS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/agendaConstant";

// All agendas reducer

export const allAgendaReducer = (state = { agendas: [] }, action) => {
  switch (action.type) {
    case ALL_AGENDAS_SUCCESS:
      return {
        ...state,
        agendas: action.payload,
      };
    case ALL_AGENDAS_SUCCESS:
      return {
        ...state,
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
