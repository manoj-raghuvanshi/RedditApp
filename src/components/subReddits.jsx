import React from 'react';

import { SideBar } from './SideBar';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { fetchSubReddit } from '../actions';

const SubReddits = (props) => {
    console.log(props)
    const {subRedditNames, subReddits, selectedReddit} = props;

    return (
        <div>
            <SideBar subRedits={subRedditNames} handleNameClick={props.handleNameClick}/>
            <div className="container">
            <div className="row">
            {selectedReddit}
            {selectedReddit ?
            <div className="">
                {subReddits && 
                    subReddits.children && 
                    subReddits.children.map((elem, key) => <PostCard key={key} subReddit={elem}/>)}
                </div>: <div>select on any reddit</div>}
            </div>
            </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    subRedditNames: state.subRedditNamesReducer.subRedditNames,
    subReddits: state.subRedditsReducer.subReddits,
    selectedReddit: state.subRedditsReducer.selected
})

const mapDispatchToProps = (dispath) => ({
    handleNameClick: (name) => dispath(fetchSubReddit(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubReddits);
