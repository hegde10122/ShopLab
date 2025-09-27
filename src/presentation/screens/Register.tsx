
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/StackNavigator";


type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register: React.FC<Props> = ({ navigation }) => {

  return (
    <SafeAreaView>
       
    </SafeAreaView>
  );
};
export default Register;
