import { StyleSheet } from 'react-native';
import Routes from './src/routes/Routes';
import { CartProvider } from './src/screens/CartContext';


export default function App() {

  return (
    <CartProvider>
      <Routes/>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
