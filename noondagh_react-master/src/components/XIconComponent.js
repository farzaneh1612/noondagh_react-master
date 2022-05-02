import React from 'react';
import {responsiveSize} from '../functions/styleFuncs';
import ZocialI from 'react-native-vector-icons/Zocial';
import EntypoI from 'react-native-vector-icons/Entypo';
import FeatherI from 'react-native-vector-icons/Feather';
import FontistoI from 'react-native-vector-icons/Fontisto';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import FoundationI from 'react-native-vector-icons/Foundation';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5ProI from 'react-native-vector-icons/FontAwesome5Pro';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = (props) => {
  const {type} = props;
  const icon =
    type === 'zocial' ? (
      <ZocialI {...props} />
    ) : type === 'entypo' ? (
      <EntypoI {...props} />
    ) : type === 'feather' ? (
      <FeatherI {...props} />
    ) : type === 'font-is-to' ? (
      <FontistoI {...props} />
    ) : type === 'ion' ? (
      <IoniconsI {...props} />
    ) : type === 'oct' ? (
      <OcticonsI {...props} />
    ) : type === 'ant-design' ? (
      <AntDesignI {...props} />
    ) : type === 'evil' ? (
      <EvilIconsI {...props} />
    ) : type === 'foundation' ? (
      <FoundationI {...props} />
    ) : type === 'awesome' ? (
      <FontAwesomeI {...props} />
    ) : type === 'awesome-5' ? (
      <FontAwesome5I {...props} />
    ) : type === 'awesome-5-pro' ? (
      <FontAwesome5ProI {...props} />
    ) : type === 'material' ? (
      <MaterialIconsI {...props} />
    ) : type === 'simple-line' ? (
      <SimpleLineIconsI {...props} />
    ) : (
      <MaterialCommunityIconsI {...props} />
    );

  return icon;
};
export default function XIconComponent(props) {
  const styles = {
    icon: {
      transform: props.flip ? [{scaleX: -1}] : [{scaleX: 1}],
    },
  };
  return (
    <Icons
      {...props}
      size={responsiveSize(props.size || 25, false, props.responsiveFactor)}
      style={[styles.icon, props.style]}
    />
  );
}
