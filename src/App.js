import Header from './components/header';
import Footer from './components/footer';
import Section from './components/section';
// import Exchangebody from './components/exchangeBody';
import './components/Header.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container1">
          <h1 className="header">currency converter</h1>
          <Section />
          {/* <Exchangebody /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
