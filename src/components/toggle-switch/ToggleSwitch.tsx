import React from 'react';
import {Switch} from 'react-native';
import {Action} from '../../styles/colors';
interface Props {
  onChange: (value: boolean) => void;
  isEnabled: boolean;
}

const ToggleSwitch = ({onChange, isEnabled}: Props) => {
  return (
    <Switch
      onValueChange={onChange}
      value={isEnabled}
      trackColor={{true: Action}}
    />
  );
};

export default ToggleSwitch;
