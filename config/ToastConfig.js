import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Colors from '../Colors/Colors';

const ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ 
        borderLeftColor: Colors.violet2,
        backgroundColor: Colors.violet3,
        width: '95%'
    }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: Colors.violet
      }}
      text2Style={{
        fontSize: 10,
        fontWeight: '400',
        color: Colors.violet4
      }}
    />
  )
};

export default ToastConfig;
