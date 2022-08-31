import { connect } from "react-redux";
import Roles from "./Roles";
import { getRoles,mergeRoles,setMergeRoles } from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        roles: state.gamesReducer ? state.gamesReducer.fetchRoles : [],
        mergeRoleResponse : state.gamesReducer ? state.gamesReducer.mergeRoles : {}
    }
}

const mapDispatchToProps = {
    getRoles,
    mergeRoles,
    setMergeRoles
}

const RolesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Roles);

export default RolesContainer;