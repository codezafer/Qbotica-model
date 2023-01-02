import requisitionReducer from "./features/requisitionReducer";
import createRequisitionReducer from "./features/createRequisitionReducer";


const rootReducer = {
    jobs : requisitionReducer,
    post : createRequisitionReducer,
}

export default rootReducer;

