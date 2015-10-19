import React, { Component, PropTypes } from 'react';
import MenuItem from '../menu/item';

class Item extends Component {

  static displayName = 'Sidenav.Item';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    onTouchTap: PropTypes.func,
    selected: PropTypes.bool,
    showIcon: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultPropTypes = {
    style: {}
  };

  render() {
    const {
      primaryColor,
      typographyColor
    } = this.context.componentStyle;
    const {
      children,
      icon,
      onTouchTap,
      selected,
      showIcon,
      style
    } = this.props;

    return (
      <MenuItem
        icon={icon}
        onTouchTap={onTouchTap}
        selected={false}
        showIcon={showIcon}
        style={Object.assign({
          padding: '8px 40px 8px 24px',
          color: selected ? primaryColor : typographyColor
        }, style)}>
        {children}
      </MenuItem>
    );
  }
}

export default Item;