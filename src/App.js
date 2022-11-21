import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';

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
                        детско - юнешевского<br />
                        предпринимательства
                    </p>
                    <button className="button1 btn btn-primary border-3 border-dark">Расскажи нам о своём проекте</button>
                    <button className="button2 btn btn-primary border-0 border-dark">Найди команду в своём регионе</button>
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
                            <p>7-9 декобря</p>
                        </div>
                        <div className="line-right">
                            <h4>Митап в Республике Башкоторстан</h4>
                            <p>Организатор:  Иван Ивановичь Иванов</p>
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
                            <p>Организатор:  Иван Ивановичь Иванов</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="About-text">
                    <div className="line">
                        <div className="line-left">
                            <p>Февраль</p>
                        </div>
                        <div className="line-right">
                            <h4>Российский инвестиционный форум</h4>
                        </div>
                    </div>
                </div>
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
                            Экосистема уполномоченных по защите бизнеса:<br />
                            <span>Через систему уполномоченных мы продвигаем наши инициативы на региональных уровнях.</span>
                        </li>
                        <li>
                            Законодательные инициативы:<br />
                            <span>Законодательная поддержка инициатив развития детско-юношеского предпринимательства в Государственной Думе и Совете Федерации России</span>
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
                    <h4>что бы найти своё сообщество щёлкни на регион на карте</h4>
                </div>
            </Container>
        </div>
    </>
);

export default App;
