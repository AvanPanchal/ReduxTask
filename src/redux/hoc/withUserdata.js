import { connect } from 'react-redux';
import { userdataDetails } from '../actions/userdataAction';

const mapDispatchToProps = dispatch => ({
    userdataDetails: (initialstate) => (
        dispatch(userdataDetails(initialstate)))


})

const mapstatetoprops = (initialstate) => {
    return {
        value: initialstate,
    }
}

export default connect(mapstatetoprops, mapDispatchToProps);