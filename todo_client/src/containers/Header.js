import React from 'react';

class Header extends React.Component{

    switchMode = () => {
        const { mode, changeMode } = this.props;

        changeMode(mode === 'editing' ? 'default' : 'editing');
    }

    render(){
        const { mode } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="mode-block">
                    <button type="button" className="btn btn-outline-success" onClick={this.switchMode}>Switch mode:</button>
                    <div className="alert alert-primary" role="alert">
                        { mode }
                    </div>
                </div>
                
            </nav>
        )
    }
}

export default Header;