import { StatusBar } from 'react-native';
import HomeScreen from './src/home/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar
        translucent //Khi true,thanh trạng thái trở nên trong suốt và nội dung bên dưới có thể hiển thị phía sau nó
        barStyle={'light-content'}
        backgroundColor="transparent" //Kết hợp với translucent để tạo hiệu ứng thanh trạng thái trôi nổi,nhìn thấy được nội dung phía dưới.
      />
      <HomeScreen />
    </>
  );
};

export default App;
