import React from 'react';
import ProfileTabContentBoughtAsset from "./ProfileTabContentBoughtAsset";
import ProfileTabContentListedAsset from "./ProfileTabContentListedAsset";

const ProfileTabWrapper = (props) => {
    switch (props.tabIndex) {
        case 1:
            return <ProfileTabContentBoughtAsset/>
        case 2:
            return <ProfileTabContentListedAsset/>
    }
}

export default ProfileTabWrapper;