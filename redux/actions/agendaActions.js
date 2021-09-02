import {
  ALL_AGENDAS_SUCCESS,
  ALL_AGENDAS_FAIL,
  CLEAR_ERRORS,
} from "../constants/agendaConstant";
import { GET_ALL_AGENDAS } from "../../graphql/queries";
// Get all agendas

export const getAgendas = () => (dispatch) => {
  try {
    const { data } = GET_ALL_AGENDAS;
    dispatch({
      type: ALL_AGENDAS_SUCCESS,
      payload: data.agendas,
    });
  } catch (error) {
    dispatch({
      type: ALL_AGENDAS_FAIL,
      payload: error.errors[0].message,
    });
  }
};
