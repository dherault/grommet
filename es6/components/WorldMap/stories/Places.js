function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Box, CheckBox, Grommet, Text, WorldMap } from 'grommet';
import { grommet } from 'grommet/themes';

var placeProps = function placeProps(name, color, showDrop) {
  return _extends({
    name: name,
    color: color
  }, showDrop ? {
    content: /*#__PURE__*/React.createElement(Box, {
      pad: {
        horizontal: 'small',
        vertical: 'xsmall'
      }
    }, /*#__PURE__*/React.createElement(Text, null, name)),
    dropProps: {
      align: {
        left: 'right'
      },
      background: {
        color: color,
        opacity: 'strong'
      },
      elevation: 'medium',
      margin: {
        left: 'small'
      },
      round: 'xsmall'
    }
  } : {});
};

export var Places = function Places() {
  var _React$useState = React.useState(true),
      showDrops = _React$useState[0],
      setShowDrops = _React$useState[1];

  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    label: "show",
    checked: showDrops,
    onChange: function onChange() {
      return setShowDrops(!showDrops);
    }
  }), /*#__PURE__*/React.createElement(WorldMap, {
    places: [_extends({
      location: [-33.8830555556, 151.216666667]
    }, placeProps('Sydney', 'graph-1', showDrops)), _extends({
      location: [78.22, 15.65]
    }, placeProps('Svalbard', 'graph-3', showDrops)), _extends({
      location: [64.503889, -165.399444]
    }, placeProps('Nome', 'graph-1', showDrops)), _extends({
      location: [51.507222, -0.1275]
    }, placeProps('London', 'graph-2', showDrops)), _extends({
      location: [-54.801944, -68.303056]
    }, placeProps('Ushuaia', 'graph-3', showDrops)), _extends({
      location: [-0.002222, -78.455833]
    }, placeProps('Quito', 'graph-1', showDrops))]
  })));
};
export default {
  title: 'Visualizations/WorldMap/Places'
};