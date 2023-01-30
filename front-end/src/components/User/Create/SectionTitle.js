import React from 'react';

const SectionTitle = (props) => {
    return(
        <React.Fragment>
            {/*section title*/}
            <div className="col-12">
                <div className="section__title section__title--left section__title--page">
                    <h1>{`Add a new launchpad (step ${props.step}/5)`}</h1>
                </div>
            </div>
            {/*end section title*/}
        </React.Fragment>
    )
}

export default SectionTitle;