import AppContainer from './AppContainer';

export default async function AppBar() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();

  return (
    <AppContainer data={data} />
  );
}