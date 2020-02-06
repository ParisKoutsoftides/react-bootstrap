import React, {createContext,  Component} from 'react';

export const UserContext = createContext();


class UserContextProvider extends Component {

    state = {
        isLoggedIn: false
    }

    toggleLoggedIn = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }

    render() {
        console.log("HUHHHH::::::::")
        return(
            <UserContext.Provider value={{...this.state, toggleLoggedIn: this.toggleLoggedIn}}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}


export default UserContextProvider;