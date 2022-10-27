import React from 'react';
import { PressableProps } from 'react-native';

interface IButton extends PressableProps {
  label: string;
  children?: React.ReactNode;
}

export default IButton;
