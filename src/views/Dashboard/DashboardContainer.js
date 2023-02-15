import { connect } from "react-redux";
import Dashboard from "views/Dashboard";
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
  
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;