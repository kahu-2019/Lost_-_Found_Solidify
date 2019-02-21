import React from 'react'
import {connect} from 'react-redux'

function PostLostTest(props){
return(
props.isAuthenticated? <p>postLostTest logged in</p>:<p>postLostTest logged out</p>
)
}

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(PostLostTest)
