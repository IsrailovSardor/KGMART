// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Book from "../../Components/Book/Book";
// import { getBook } from "../../redux/action";
// const Home = () => {
//   // advantage
//   const dispatch = useDispatch();
//   const book = useSelector((state) => {
//     const { productsReducer } = state;
//     return productsReducer.book;
//   });
//   useEffect(() => {
//     dispatch(getBook());
//   }, []);
//   return (
//     <div>
//       {/* <Link className="text-2xl font-medium text-none text-red-500 mr-4" to="/alphabet">Алфовиту</Link>
//       <Link className="text-2xl font-medium text-none text-red-500 mr-4" to="/author">Автору</Link>
//       <Link className="text-2xl font-medium text-none text-red-500 mr-4" to="/category">Категории</Link> */}
//     <p  className="text-2xl font-medium text-none text-black-500 my-4">ВСE КНИГИ</p>
//        <div className="flex">
//        {book.map((best) => (
//             <Book product={best} key={best.id}/>
//           ))}
//        </div>
//     </div>
//   );
// };

// export default Home;

import "./Home.scss";
import React from "react";
import logo from "../../img/Union.png";
import sear from "../../img/sear.png";
import love from "../../img/love.png";
import lov from "../../img/lov.png";
import mes from "../../img/mes.png";
import shop from "../../img/shop.png";
import user from "../../img/user.png";
import menu from "../../img/menu.png";
import vec from "../../img/vec.png";
import card from "../../img/card.png";
import mail from "../../img/mail.png";
import bus from "../../img/bus.png";
import p from "../../img/p.png";
import loc from "../../img/loc.png";
import left from "../../img/left.png";
import right from "../../img/right.png";
import lo from "../../img/lo.png";
import dow from "../../img/dow.png";
import start from "../../img/start.png";
import star from "../../img/star.png";
import users from "../../img/users.png";
import like from "../../img/like.png";
import dislike from "../../img/dislike.png";
import wa from "../../img/wa.png";
import fac from "../../img/fac.png";
import ins from "../../img/ins.png";
import ok from "../../img/ok.png";
import tw from "../../img/tw.png";
import you from "../../img/you.png";
import vk from "../../img/vk.png";
import visa from "../../img/visa.png";
import mas from "../../img/mas.png";
import logo1 from "../../img/logo2.png";
import logo2 from "../../img/logo3.png";
import noj from "../../img/noj.png";
import home from "../../img/home.png";
import exit from "../../img/exit.png";
import sea from "../../img/sea.png";
import up from "../../img/up.png";
const Home = () => {
  return (
    <div className="body">
      <div className="nav">
        <div className="info">
          <p>
            RUB{" "}
            <span>
              <img src={vec} alt="" />
            </span>
          </p>
          <p>О нас</p>
          <p>Как заказать</p>
          <p>Доставка</p>
          <p>Отзывы</p>
        </div>
        <div className="title">
          <div className="img">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="input_block">
            <div className="menu">
              <img src={menu} alt="" />
            </div>
            <div className="input">
              <img src={sear} alt="" />
              <input type="text" placeholder="Поиск по 130198 товаров..." />
            </div>
          </div>
          <div className="link_block">
            <div className="link">
              <div className="love_link">
                <img src={love} alt="" />
              </div>
              <p>Избранное</p>
            </div>
            <div className="link">
              <div className="mes_link">
                <img src={mes} alt="" />
              </div>
              <p>Сообщения</p>
            </div>
            <div className="link">
              <div className="shop_link">
                <img src={shop} alt="" />
              </div>
              <p>Корзина</p>
            </div>
            <div className="link">
              <div className="user_link">
                <img src={user} alt="" />
              </div>
              <p>Войти</p>
            </div>
          </div>
        </div>
        <div className="select">
          <div className="flex">
            <p className="select_text">Женщинам</p>
            <span className="select_row">
              <img src={vec} alt="" />
            </span>
          </div>
          <div className="flex">
            <p className="select_text">Детям</p>
            <span className="select_row">
              <img src={vec} alt="" />
            </span>
          </div>
          <div className="flex">
            <p className="select_text">Мужчинам</p>
            <span className="select_row">
              <img src={vec} alt="" />
            </span>
          </div>
          <p className="select_text">Новинки</p>
          <p className="select_text">Осень-Зима 2020 </p>
          <p className="select_text">Распродажа</p>
          <p className="select_text">Акции</p>
          <p className="select_text">Большие размеры</p>
        </div>
        <div className="mobile">
          <div className="mobile_header">
            <div className="row">
              <img src={home} alt="" />
            </div>
            <div className="row1">
              <img src={menu} alt="" />
            </div>
            <div className="row1">
              <img src={love} alt="" />
            </div>
            <div className="row1">
              <img src={shop} alt="" />
            </div>
            <div className="row1">
              <img src={exit} alt="" />
            </div>
          </div>
          <div className="mobile_footer">
            <div className="row">
              <img src={logo} alt="" />
            </div>

            <div className="row1">
              <img src={sea} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="crumbs">
          <span>Главная {">"}</span>
          <span> Для девочек {">"}</span>
          <span> Платья и сарафаны {">"}</span>
          <span>Платья-макси {">"}</span>
          <span className="active">Ангоровое платье миди без застежки</span>
        </div>
        <div className="card">
          <span className="span_text">Обновлено 20.08.2020 17:16</span>
          <div class="works-carousel">
                <div class="carousel">
                    <img src='./img/card.png' alt="" />
                    <div class="carousel_row">
                        <img src="./img/lov.png" alt="" />
                    </div>
                </div>
                <div class="carousel">
                    <img src='./img/card.png' alt="" />
                    <div class="carousel_row">
                        <img src="./img/lov.png" alt="" />
                    </div>
                </div>
                <div class="carousel">
                    <img src='./img/card.png' alt="" />
                    <div class="carousel_row">
                        <img src="./img/lov.png" alt="" />
                    </div>
                </div>
                <div class="carousel">
                    <img src='./img/card.png' alt="" />
                    <div class="carousel_row">
                        <img src="./img/lov.png" alt="" />
                    </div>
                </div>
                <div class="carousel">
                    <img src='./img/card.png' alt="" />
                    <div class="carousel_row">
                        <img src="./img/lov.png" alt="" />
                    </div>
                </div>
            </div>
          <div className="inform">
            <p className="inform_title">Футболка Smile </p>
            <div className="flex">
              <p className="inform_descr">
                Производитель:{" "}
                <span className="inform_descr_span">bluzki_style </span>
              </p>
              <p className="inform_mail">
                <img src={mail} alt="" />
                Для получения информации касательно цен, индивидуальных заказов
                и других вопросов:
              </p>
              <span className="span_text_mob">Обновлено 20.08.2020 17:16</span>
            </div>
            <div className="mob_carousel">
              <img src={card} alt="" />
              <div className="carousel_row">
                <img src={lov} alt="" />
              </div>
            </div>
            <div className="sale_flex">
              <span className="sale1">833 р</span>
              <span className="sale2">1042 р</span>
              <span className="sale3">(+ бонус 12.84 руб)</span>
            </div>
            <p className="inform_eko">Ваша экономия составит 80 руб</p>
            <div className="img_flex">
              <div className="wrapper_card">
                <img src={card} alt="" />
              </div>
              <div className="wrapper_card">
                <img src={card} alt="" />
              </div>
              <div className="wrapper_card">
                <img src={card} alt="" />
              </div>
              <div className="wrapper_card">
                <img src={card} alt="" />
              </div>
              <div className="wrapper_card">
                <img src={card} alt="" />
              </div>
            </div>

            <p className="inform_size">
              Размеры в наличии: <span>42, 44, 46, 48</span>
            </p>
            <p className="inform_setka">размерная сетка</p>
            <div className="color_flex">
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#F71D25",
                }}
              ></div>
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#21C0FC",
                }}
              ></div>
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#FFFFFF",
                }}
              ></div>
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#000000",
                }}
              ></div>
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#BEBEBE",
                }}
              ></div>
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#C7A3C7",
                }}
              ></div>
              <div
                className="inform_row"
                style={{
                  backgroundColor: "#E2CBA7",
                }}
              ></div>
            </div>
            <div className="buttom_mobile">
              <button className="inform_butn">Добавить корзину</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about_flex">
          <div className="about_container1">
            <p className="about_text">О товаре</p>
            <div className="flex">
              <div className="about_block">
                <p className="about_title">Артикул</p>
                <p className="about_descr">130772</p>
              </div>
              <div className="about_block">
                <p className="about_title">Сезон</p>
                <p className="about_descr">демисезон</p>
              </div>
              <div className="about_block">
                <p className="about_title">Ткань</p>
                <p className="about_descr">
                  ангора (полиэстер 97%, эластан 3%)
                </p>
              </div>
              <div className="about_block">
                <p className="about_title">Комплектация</p>
                <p className="about_descr">платье</p>
              </div>
              <div className="about_block">
                <p className="about_title">Тип платья</p>
                <p className="about_descr">платье миди</p>
              </div>
              <div className="about_block">
                <p className="about_title">Декоративные элементы</p>
                <p className="about_descr">пайетки</p>
              </div>
              <div className="about_block">
                <p className="about_title">Конструктивные элементы </p>
                <p className="about_descr">без элементов</p>
              </div>
              <div className="about_block">
                <p className="about_title">Материал подкладки</p>
                <p className="about_descr">без подклада</p>
              </div>
              <div className="about_block">
                <p className="about_title">Гарантии</p>
                <p className="about_descr">есть</p>
              </div>
              <div className="about_block">
                <p className="about_title">Вырез горловины</p>
                <p className="about_descr">округлый</p>
              </div>
              <div className="about_block">
                <p className="about_title">Длина изделия</p>
                <p className="about_descr">миди</p>
              </div>
              <div className="about_block">
                <p className="about_title">Тип карманов</p>
                <p className="about_descr">без карманов</p>
              </div>
              <div className="about_block">
                <p className="about_title">Наличие</p>
                <p className="about_descr">В наличии</p>
              </div>
              <div className="about_block">
                <p className="about_title">Комплектация</p>
                <p className="about_descr">демисезон</p>
              </div>
              <div className="about_block">
                <p className="about_title">В упаковке</p>
                <p className="about_descr">4 шт</p>
              </div>
              <div className="about_block">
                <p className="about_title">Страна-производитель</p>
                <p className="about_descr">Киргизия</p>
              </div>
              <div className="about_block">
                <p className="about_title">Вид застежки</p>
                <p className="about_descr">без застежки</p>
              </div>
              <div className="about_block">
                <p className="about_title">Возрастная категория </p>
                <p className="about_descr">дошкольное</p>
              </div>
              <div className="about_block">
                <p className="about_title">Покрой</p>
                <p className="about_descr">полуприлегающий</p>
              </div>
              <div className="about_block">
                <p className="about_title">Сезон</p>
                <p className="about_descr">демисезон</p>
              </div>
              <div className="about_block">
                <p className="about_title">Длина изделия по спинке, см.:</p>
                <p className="about_descr">62</p>
              </div>
              <div className="about_block">
                <p className="about_title">Тип рукавов</p>
                <p className="about_descr">длинные</p>
              </div>
              <div className="about_block">
                <p className="about_title">Числовые параметры соотв. размеру</p>
                <p className="about_descr">34</p>
              </div>
              <div className="mobile_close">
                <p>Свернуть</p>
                <div className="row">
                  <img src={up} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="about_container2">
            <div className="about_block_descr">
              <p className="about_title">Описание</p>
              <p className="about_descr">
                Детские платье для девочек Весна-осень . Длина-62, обхват-68 ,
                рукава-40
              </p>
            </div>
            <div className="about_block_age">
              <p className="about_title">Возврат</p>
              <p className="about_descr">
                Порядок и условия возврата приобретенного товара определяются
                законодательством Российской Федерации, условиями
                оферты/договора и Политикой возврата товаров.
              </p>
            </div>
            <div className="about_btn_age">
              <p>Условия возврата</p>
            </div>
            <div className="about_btn_age1">
              <p>Инструкция по осуществлению возврата</p>
            </div>
            <div className="about_block_rec">
              <div className="rec_one">
                <img src={bus} alt="" className="bus" />
                <p>Прямые поставки</p>
              </div>
              <div className="rec_one">
                <img src={p} alt="" className="pub" />
                <p>Безопасная оплата</p>
              </div>
              <div className="rec_one">
                <img src={loc} alt="" className="loc" />
                <p>Доставка до адреса</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product_block">
          <div className="product_title">
            <p className="title_text">похожие товары</p>
            <div className="arrow">
              <div className="arrow_left">
                <img src={left} alt="" />
              </div>
              <div className="arrow_left">
                <img src={right} alt="" />
              </div>
              <div className="arrow_dow">
                <p>Все новинки</p>
                <img src={dow} alt="" />
              </div>
            </div>
          </div>
          <div className="product_card">
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product_block">
          <div className="product_title">
            <p className="title_text">похожие товары</p>
            <div className="arrow">
              <div className="arrow_left">
                <img src={left} alt="" />
              </div>
              <div className="arrow_left">
                <img src={right} alt="" />
              </div>
              <div className="arrow_dow">
                <p>Все новинки</p>
                <img src={dow} alt="" />
              </div>
            </div>
          </div>
          <div className="product_card">
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper_card">
                <img src={card} alt="" />
                <div className="faorites">
                  <img src={lo} alt="" />
                </div>
              </div>
              <div className="wrapper_text">
                <p className="text_title">Толстовка</p>
                <p className="text_descr">bluzki_style </p>
                <div className="flex">
                  <span className="sell1">833 р</span>
                  <span className="sell2">1042 р</span>
                  <span className="sell3">- 20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smile">
        <div className="smile_wrapper">
          <p className="smile_text">Футболка Smile </p>
          <div className="flex_wrapper">
            <div className="smile_reting">
              <div className="flex">
                <div className="smile_ret1">
                  <p className="smile_ret1_text">3.3</p>
                  <div className="smile_start">
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p className="smile_ret1_descr">На основании 1236 отзывов</p>
                </div>
                <div className="smile_ret2">
                  <div className="line_real1">
                    <div className="line2"></div>
                    <div className="line1"></div>

                    <p className="line_text">45%</p>
                  </div>
                  <div className="line_real2">
                    <div className="line2"></div>
                    <div className="line1"></div>

                    <p className="line_text">35%</p>
                  </div>
                  <div className="line_real3">
                    <div className="line2"></div>
                    <div className="line1"></div>

                    <p className="line_text">65%</p>
                  </div>
                  <div className="line_real4">
                    <div className="line2"></div>
                    <div className="line1"></div>

                    <p className="line_text">10%</p>
                  </div>
                  <div className="line_real5">
                    <div className="line2"></div>
                    <div className="line1"></div>

                    <p className="line_text">15%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="smile_row">
              <p className="size_text">Соответствие размеру</p>
              <div className="flex">
                <div className="block">
                  <div className="size_row">
                    <p className="size_title">15%</p>
                  </div>
                  <p className="size_info">Маломерит</p>
                </div>
                <div className="block">
                  <div className="size_rows">
                    <p className="size_title">45%</p>
                  </div>
                  <p className="size_info">Соответствует</p>
                </div>
                <div className="block">
                  <div className="size_row">
                    <p className="size_title">15%</p>
                  </div>
                  <p className="size_info">Большемерит</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="wrapper">
          <div className="reviews_header">
            <p className="title">
              отзывы <span className="descr">(всего 345)</span>
            </p>
            <p className="rules">Правила оформелния отзывов</p>
          </div>
          <div className="reviews_header_mob">
            <p className="title">отзывы</p>
            <div className="flex">
              <p className="descr">(всего 345)</p>
              <p className="rules">Правила оформелния отзывов</p>
            </div>
          </div>
          <div className="line"></div>
          <button className="button">Написать отзыв</button>
          <div className="card">
            <div className="user">
              <img src={users} alt="" className="img_user" />
            </div>
            <div className="info">
              <div className="name">
                <p className="name_text">Иванова Ира</p>
                <p className="name_descr">07 июня, 10:15</p>
                <div className="smile_start">
                  <span className="name_descr">07 июня, 10:15</span>
                  <div className="flex">
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="smile_start">
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className="descr">
                <p className="descr_text">
                  Классная рубашка! Заказывала уже эту рубашку своего размера
                  (44), но утонула в ней, спустя несколько месяцев решила
                  попробовать заказать еще раз, но 40 размер, этот размер сел
                  идеально, качество пошива и ткани очень нравится. Попробую еще
                  что-нибудь приобрести у этого бренда.
                </p>
              </div>
              <div className="like">
                <div className="like_block1">
                  <img src={like} alt="" />
                  <p>12</p>
                </div>
                <div className="like_block2">
                  <img src={dislike} alt="" />
                  <p>9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="line1"></div>
          <div className="card">
            <div className="user">
              <img src={users} alt="" className="img_user" />
            </div>
            <div className="info">
              <div className="name">
                <p className="name_text">Ольга</p>
                <p className="name_descr">07 июня, 10:15</p>
                <div className="smile_start">
                  <span className="name_descr">07 июня, 10:15</span>
                  <div className="flex">
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="smile_start">
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className="descr">
                <p className="descr_text">
                  Рубашка классная и сшита хорошо, но прям очень широка на мой
                  42/44 верх, очень очень широка.
                </p>
              </div>
              <div className="like">
                <div className="like_block1">
                  <img src={like} alt="" />
                  <p>12</p>
                </div>
                <div className="like_block2">
                  <img src={dislike} alt="" />
                  <p>9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="line1"></div>
          <div className="card">
            <div className="user">
              <img src={users} alt="" className="img_user" />
            </div>
            <div className="info">
              <div className="name">
                <p className="name_text">Иванова Ира</p>
                <p className="name_descr">07 июня, 10:15</p>
                <div className="smile_start">
                  <span className="name_descr">07 июня, 10:15</span>
                  <div className="flex">
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="smile_start">
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className="descr">
                <p className="descr_text">
                  Классная рубашка! Заказывала уже эту рубашку своего размера
                  (44), но утонула в ней, спустя несколько месяцев решила
                  попробовать заказать еще раз, но 40 размер, этот размер сел
                  идеально, качество пошива и ткани очень нравится. Попробую еще
                  что-нибудь приобрести у этого бренда.
                </p>
              </div>
              <div className="like">
                <div className="like_block1">
                  <img src={like} alt="" />
                  <p>12</p>
                </div>
                <div className="like_block2">
                  <img src={dislike} alt="" />
                  <p>9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="line1"></div>
          <div className="reviews_footer">
            <p className="reviews_footer_text">Показать еще отзывы</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={noj} alt="" className="noj" />
        <div className="one">
          <div className="one_block">
            <p> О компании</p>
            <div className="two_block">
              <p>О нас</p>
              <p>Отзывы </p>
              <p>Оферта </p>
              <p>Организаторам </p>
              <p>Контакты </p>
              <p>Персональная скидка </p>
              <p>Инвесторам </p>
              <p>Бонусная программа </p>
            </div>
          </div>
          <div className="one_block">
            <p> Сервис и помощь</p>
            <div className="two_block">
              <p>Инструкции</p>
              <p>Доставка </p>
              <p>Оферта </p>
              <p>Как заказать </p>
              <p>Размерная сетка </p>
              <p>Возврат товара </p>
              <p>Вопросы и ответы </p>
              <p>Правообладателям</p>
            </div>
          </div>
          <div className="one_block1">
            <p> Контакты</p>
            <div className="two_block">
              <p>Отдел продаж: </p>
              <div className="three_block">
                <p>
                  <span>
                    <img src={wa} alt="" />
                  </span>
                  Азиза + 996 555 000 555
                </p>
                <p>
                  <span>
                    <img src={wa} alt="" />
                  </span>
                  Азиза + 996 555 000 555
                </p>
                <p>
                  <span>
                    <img src={wa} alt="" />
                  </span>
                  Азиза + 996 555 000 555
                </p>
              </div>
            </div>
            <div className="two_block">
              <p>Руководитель отдела продаж: </p>
              <div className="three_block">
                <p>
                  <span>
                    <img src={wa} alt="" />
                  </span>
                  Азиза + 996 555 000 555
                </p>
              </div>
            </div>
            <div className="two_block">
              <p>Отдел контроля качества: </p>
              <div className="three_block">
                <p>
                  <span>
                    <img src={wa} alt="" />
                  </span>
                  Азиза + 996 555 000 555
                </p>
              </div>
            </div>
            <div className="two_block">
              <p>Руководитель отдела доставки: </p>
              <div className="three_block">
                <p>
                  <span>
                    <img src={wa} alt="" />
                  </span>
                  Азиза + 996 555 000 555
                </p>
              </div>
            </div>
          </div>
          <div className="one_block2">
            <p> Наши проекты</p>
            <div className="two_block">
              <p> Online журнал</p>
              <p>Одежда из Киргизии в розницу </p>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="block">
            <p>Служба поддержки:</p>
            <p>+ 7 929 950 62 35</p>
            <p>+ 7 929 950 62 35</p>
          </div>
          <div className="block">
            <p>Наша почта:</p>
            <p>info@kgmart.ru</p>
          </div>
          <div className="block_img">
            <img src={fac} alt="" />
            <img src={ins} alt="" />
            <img src={ok} alt="" />
            <img src={tw} alt="" />
            <img src={you} alt="" />
            <img src={vk} alt="" />
            <img src={visa} alt="" className="visa" />
            <img src={mas} alt="" />
          </div>
        </div>
        <div className="three">
          <div className="block">
            <p>© 2013-2020 kgmart.ru Все права защищены</p>
          </div>
          <div className="block1">
            <img src={logo1} alt="" />
            <p>При поддержки Ассоциации “Легпром” Кыргызской Республики</p>
          </div>
          <div className="block1">
            <img src={logo2} alt="" />
            <p>Покупки с гарантией безопасности от Comodo Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
