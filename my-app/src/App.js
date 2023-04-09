import './App.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

function App() {
  return (
    <>
      <div className='header'>
          <HeaderLeft/>
          <HeaderRight/>
      </div>
      <div className='footer'>
        <FooterLeft/>
        <FooterRight/>
      </div>
    </>
);
}

export default App;
