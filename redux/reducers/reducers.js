import { combineReducers } from "redux";
import { allAgendaReducer } from "./agendaReducer";
const reducer = combineReducers({
  agendas: allAgendaReducer,
});

export default reducer;
