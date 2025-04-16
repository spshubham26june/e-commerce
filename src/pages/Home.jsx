import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <div style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
