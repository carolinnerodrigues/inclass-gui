import React from 'react'
// import PropTypes from 'prop-types'

import './Panel.scss'

const Panel = (props) => {
    return (
        <div className="panel">
            {
                props.title ? 
                <div className="panel-header">
                    <div className="panel-header-title">{props.title}</div>
                    {props.subTitle ? <div className="panel-header-subtitle">{props.subTitle}</div>:""}
                    {props.actions ? 
                        <div className="panel-actions">
                            {
                                props.actions.map((action, index) => {
                                    return(
                                        // <Button key={index} {...action} />
                                        <div></div>
                                    )
                                })
                            }
                            
                        </div>:null
                    }
                </div>:""
            }
            <div className="panel-body">{props.children}</div>
        </div>
    );
}

export default Panel;