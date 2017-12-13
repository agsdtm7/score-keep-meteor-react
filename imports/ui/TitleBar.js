import React from 'react';

export default class TitleBar extends React.Component {
  // See lecture 34 and 35 Conditional rendering with jsx
  renderSubtitle(){
    if(this.props.subtitle){
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    }
  }
  render(){
    return(
      <div className="title-bar">
        <div className ="wrapper">
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

TitleBar.defaultProps = {
  //title: 'Default title'
  //subtitle: 'Default subtitle'
}
