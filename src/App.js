import './App.css';
import ReactPlayer from 'react-player';
import {Card} from 'antd';
import myImg from './assets/2.JPG'
import myImg1 from './assets/test.png'
import myVideo from './assets/yandex.mp4'

const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <div className='CardWrapper'>
        <Card
            
            style={{ width: '100%' }}
            cover={<img alt="example" src={myImg} />}
          >
            <Meta title="Это я в 11 классе, " description="Тогда я ещё не знал кем хочу быть и как сложится моя жизнь." />
        </Card>
      </div>
      <div className='CardWrapper'>
        <Card
            
            style={{ width: '100%' }}
            cover={<img alt="example" src={myImg1} />}
          >
            <Meta title="Это я в 11 классе, " description="Тогда я ещё не знал кем хочу быть и как сложится моя жизнь." />
        </Card>
      </div>
      

      <p>fdhfjdhfjhdjhfjdfhdjfhdjfh</p>
      <div className='PlayerWrapper'>
        <ReactPlayer 
          url={myVideo}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
      
      <a href='https://codepen.io/pen/'>Попробуй в песочнице</a>
    </div>
  );
}

export default App;
