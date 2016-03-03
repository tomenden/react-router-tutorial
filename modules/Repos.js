import React from 'react';
import NavLink from './NavLink';
import {browserHistory} from 'react-router';

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSubmit(event){
        event.preventDefault();
        const userName = this.refs.userName.value;
        const repo = this.refs.repo.value;
        const path = `/repos/${userName}/${repo}`;
        console.log(this.context.router);
        this.context.router.push(path);
    },
    render(){
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input ref="userName" type="text" placeholder="userName"/> / {' '}
                            <input ref="repo" type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});