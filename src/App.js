import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';

// slider
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        url: 'logos/lc.jpg',
        caption: 'Международный фонд \n"Живая классика"',
      },
      {
        url: 'logos/fsop.jpeg',
        caption: 'Физкультурно спортивное общество России',
      },
      {
        url: 'logos/osstro.png',
        caption: 'Агенство Osstro',
      },
      {
        url: 'logos/fsi.jpg',
        caption: 'Фонд социальных инвестиций',
      },
]


const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }
];



const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    responsive: responsiveSettings
};


const App = () => (
    <>
        <Navbar bg="wight" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/header_logo.png" width="30" height="30" className="d-inline-block align-top header-img" alt="" />{' '}
                    <span className='Navbar-title'>ЛИГА ЮНИОР</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                    <Nav className="me-auto justify-content-end d-flex">
                        <Nav.Link href="#home">Положение</Nav.Link>
                        <Nav.Link href="#link">Мероприятия</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container className="Header">
            <header className="App-header">
                <div className="right-side-phone">
                    <img src="/main_logo.png" className="App-logo" alt="logo" />
                </div>
                <div className="left-side">
                    <h1 className="App-title">Лига Юниор</h1>
                    <p>
                        Всероссийское движение<br />
                        детско - юношеского<br />
                        предпринимательства
                    </p>
                    <button className="btn_text button1 btn btn-primary border-3 border-dark">Расскажи нам о своём проекте</button>
                    <button className="btn_text button2 btn btn-primary border-0 border-dark">Найди команду в своём регионе</button>
                </div>
                <div className="right-side">
                    <img src="/main_logo.png" className="App-logo" alt="logo" />
                </div>
            </header>
        </Container>
        <div className='gradient_background'>
        <Container className="About">
            <div className="">
                <div className="About-title">
                    <h1>КТО МЫ?</h1>
                </div>
                <div className="About-text">
                    <p>
                        Лига Юниор – сообщество юных лидеров, которые способны воплощать в жизнь идеи и дух предпринимательства, 
                        объединять, вдохновлять, мотивировать других в погоне за новыми свершениями. От их неиссякаемой энергии, 
                        творческой вовлеченности и огромного желания зависит наше общее будущее. От внедрения и развития их идей 
                        и проектов – экономический прогресс России.
                    </p>
                </div>
            </div>
                
        </Container>
        </div>
        
        <div className="white">
            <Container className="About">
                <div className="About-title">
                    <h1>МЕРОПРИЯТИЯ</h1>
                </div>
                <div className="About-text">
                    <div className="line">
                        <div className="line-left">
                            <p>22-26 ноября</p>
                        </div>
                        <div className="line-right">
                            <h4>Молодёжный форум “БУДУЩЕЕ”</h4>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="About-text">
                    <div className="line">
                        <div className="line-left">
                            <p>1-3 декабря</p>
                        </div>
                        <div className="line-right">
                            <h4>Конгресс молодых учёных</h4>
                            <p>Федеральная территория "Сириус"</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="About-text">
                    <div className="line">
                        <div className="line-left">
                            <p>7-9 декабря</p>
                        </div>
                        <div className="line-right">
                            <h4>Митап в Республике Башкоторстан</h4>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="About-text">
                    <div className="line">
                        <div className="line-left">
                            <p>27 декабря</p>
                        </div>
                        <div className="line-right">
                            <h4>Лига Юниор.Таджикистан</h4>
                        </div>
                    </div>
                </div>
                <hr />
                
                <div className="About-text">
                    <div className="line">
                        <div className="line-left">
                            <p>Январь</p>
                        </div>
                        <div className="line-right">
                            <h4>Митап в г.Нижний-Новгород</h4>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        </div>
        <div className="gradient_background">
            <Container className="About">
                <div className="About-title">
                    <h1>КАК ПРИНЯТЬ УЧАСТИЕ?</h1>
                </div>
                <div className="About-text">
                    <div className="row">
                        <div className="col">
                            <img src="/1.png" className="num" alt="" />
                            <h4>Регистрируйся на сайте</h4>
                        </div>
                        <div className="col">
                            <img src="/2.png" className="num" alt="" />
                            <h4>Знакомься с форматами<br />Изучи проекты, мероприятия и найди команду в своём регионе!</h4>
                        </div>
                        <div className="col">
                            <img src="/3.png" className="num" alt="" />
                            <h4>Следи за активностями...<br />Выбирай наиболее интересные и принимай участие!</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className="white">
            <Container className="About">
                <div className="About-title">
                    <h1>ЦЕЛЬ -</h1>
                </div>
                <div className="About-text">
                    <h3> развитие детско-юношеского предпринимательства.</h3>
                    <p>
                        Мы создаем эффективную экосистему детско-юношеского предпринимательства, не только создавая условия для поддержки, 
                        развития и масштабирования проектов, но и сопровождаем наставников, разрабатываем методологии развития, выходим с 
                        законодательными инициативами о развитии детско-юношеского предпринимательства.
                    </p>
                    <h3>Именно такая всесторонняя работа может принести результат.</h3>
                </div>
            </Container>
        </div>
        <div className="white">
            <Container className="About">
                <div className="About-title">
                    <h1>Задачи</h1>
                </div>
                <div className="About-uls">
                    <ul>
                        <li>
                            <div className="About-uls-image">
                                    Экосистема уполномоченных по защите бизнеса:<br />
                                    <span>Через систему уполномоченных мы продвигаем наши инициативы на региональных уровнях.</span>
                            </div>
                        </li>
                        <li>
                            Законодательные инициативы:<br />
                            <span>Законодательная поддержка инициатив развития детско-юношеского предпринимательства в Государственной Думе и Совете Федерации России.</span>
                        </li>
                        <li>
                            Развитие регионов:<br />
                            <span>Региональные отделения по поддержке и развитию студий (примерное название малого структурного подразделения) детско-юношеского предпринимательства создают потенциал развития региона.</span>
                        </li>
                        <li>
                            Продвижение:<br />
                            <span>Продвижение проектов через профессиональны сообщества и ассоциации, торгово-промышленные палаты, центры «Мой бизнес». Участие проектов юных предпринимателей в ключевых деловых событиях: ПМЭФ, МЭФ, ВЭФ, РИФ и т.д.</span>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
        <div className="white">
            <Container className="About">
                <div className="About-title">
                    <h3>найди сообщество в своём регионе</h3>
                </div>
                <div className="About-text">
                    <img src="/map.png" alt='' />
                    <h4>чтобы найти своё сообщество щёлкни на карту</h4>
                </div>
            </Container>
        </div>

        <div className="slider center">
            <Container className='slider_container center'>
                <div className='white About-title'>
                    <h1>Соучредители</h1>
                </div>
                
            <div className="slide-container">
                <Slide {...properties}>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}> 
                        <div className="slide-card row">
                            <div className="slide-card-image">
                                <img className='slide-card-image' src={slideImage.url} alt='' />
                            </div>
                            <div className='slide-card-text'>
                                <h3>{slideImage.caption}</h3>
                            </div>
                        </div>
                    </div>
                ))} 
                </Slide>
            </div>
            </Container>
        </div>
    
    <div className='footer'>
        <Container className='footer-container'>
            <div className='footer_row'>
            <div className='footer-logo'>
                <img className='footer-logo' src="/footer_logo.svg" alt='' />
            </div>

            <div className='footer-urls right_side'>
                <ul>
                    <li><a href=''>СМИ о нас</a></li>
                    <li><a href=''>Новости</a></li>
                    <li><a href=''>Политика конфиденциальности</a></li>
                </ul>
            </div>

            <div className='footer-contact'>
                <ul>
                    <li><a href=''>+7 (925) 227-04-14</a></li>
                    <li><a href=''>main@osstro.ru</a></li>
                </ul>
            </div>

            </div>
            

        </Container>
    </div>
    </>
);

export default App;
