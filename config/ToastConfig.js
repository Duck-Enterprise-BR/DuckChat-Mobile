import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Colors from '../colors/Colors';

const ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ 
        borderLeftColor: Colors.orange,
        backgroundColor: Colors.gray2,
        width: '95%'
    }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: Colors.black
      }}
      text2Style={{
        fontSize: 10,
        fontWeight: '400',
        color: Colors.black
      }}
    />
  )
};

export default ToastConfig;
