import { RouteProp } from '@react-navigation/native';

type ParamList = {
  SignInScreen: {
    navigateToFeedStack: () => void;
  };
};

interface ISignInScreen {
  route: RouteProp<ParamList, 'SignInScreen'>;
}

export default ISignInScreen;
