import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</button>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgrss(true)
                                        usersAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgrss(false)
                                        })

                                }}> UnFollow</button>

                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgrss(true)
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': 'c623a281-08f1-416b-9bb1-6291c89630d7'
                                    //     }
                                    // })
                                        usersAPI.follow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgrss(false)
                                        })
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users