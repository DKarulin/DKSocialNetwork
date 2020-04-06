import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div className='mt-4 ml-4 mb-4'>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className='row'>
                    <div className='col-4'>
                        {props.profile.aboutMe}
                    </div>
                    <div className='col-4'>
                        {props.profile.contacts.facebook}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo