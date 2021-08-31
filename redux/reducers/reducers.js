import { combineReducers } from "redux";
import { allAgendaReducer } from "./agendaReducer";
const reducer = combineReducers({
  allAgendas: allAgendaReducer,
});
export default reducer;
