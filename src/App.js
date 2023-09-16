import './App.css';
import ReactPlayer from 'react-player';
import {Card} from 'antd';
import myImg from './assets/11grade.JPG'
import myImg1 from './assets/now.png'
import myVideo from './assets/flexbox.mp4'

const { Meta } = Card;

const customStyle = {
  fontFamily:'Poppins, sans-serif',
  width: '100%'
}



function App() {
  return (
    <div className="App">
      <div className='CardWrapper'>
        <Card
            style={customStyle}
            cover={<img alt="example" src={myImg} />}
          >
            <Meta title="Это я в 11 классе " description="Тогда я ещё не знал, кем хочу стать, и как сложится моя жизнь. Именно в то время я делал свои первые шаги в веб-разработке. Мне ещё предстояло принять главное решение: пойти учиться на программиста." />
        </Card>
      </div>
      <div className='CardWrapper'>
        <Card
            style={customStyle}
            cover={<img alt="example" src={myImg1} />}
          >
            <Meta title="Снова я ;)" description="И вот позади годы учёбы. Первая работа в it-компании, затем смена сферы деятельности, чтобы понять, чем действительно хочу заниматься. Сейчас я разработчик в крупной it-компании." />
        </Card>
      </div>
      
      <div className='comment-box'>
        <p> Благодаря программированию я получил возможность для творческой самореализациии. 
          Программирование позволяет воплотить идеи в жизнь, что вдохновляет.   
        </p>
      </div>
     
      <div className='PlayerWrapper'>
        <ReactPlayer 
          url={myVideo}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
      
      <div className='code-link'>
        <a href='https://codepen.io/mguizsnx-the-bashful/pen/eYbGmvO' target='_blank'>Попробуй в песочнице</a>
      </div>
      

    </div>
  );
}

export default App;
