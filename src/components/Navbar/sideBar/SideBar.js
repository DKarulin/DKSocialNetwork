import React, {Component} from "react";
import classes from './SideBar.module.css';

class SideBar extends React.Component {

    render() {
        return (
            <div>
                <div className='mt-5'>
                    <div>
                        <h4>Friends</h4>
                    </div>
                    <div className={classes.abra}>
                        <div className='row'>
                            {this.props.users.map(u => <div>
                                <div className='col-6'>
                                    <img src={u.img}/>
                                </div>
                                <div className='col-6 mt-2'>
                                    {u.name}
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default SideBar