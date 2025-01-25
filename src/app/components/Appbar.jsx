import { notFound } from 'next/navigation';
import AppContainer from './AppContainer';

export default async function AppBar() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
      notFound()
    }
    const data = await response.json();
    return (
      <AppContainer data={data} />
    );
  } catch (err) {
    console.error("We have an error while getting categories from api")
    notFound()
  }

}