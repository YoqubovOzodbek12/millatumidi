
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { FaCheck } from "react-icons/fa";

import Logo from '../../assets/Logo/logo.svg';
import LangIcon from '../../assets/svg/langIcon.svg';
import HeroImg from '../../assets/images/hero.webp';
import AboutOne from '../../assets/images/aboutone.webp';
import AboutTwo from '../../assets/images/abouttwo.webp';
import AboutTree from '../../assets/images/abouttree.webp';
import Grants from '../../assets/images/grants.webp';
import BtnHero from '../../assets/images/btn.webp';
import BtnHeroTwo from '../../assets/images/btnariza.webp';
import BtnBatafsil from '../../assets/images/btnbatafsil.webp';

import Fakultet1 from '../../assets/images/fakultet/1.webp'
import Fakultet2 from '../../assets/images/fakultet/2.webp'
import Fakultet3 from '../../assets/images/fakultet/3.webp'
import Fakultet4 from '../../assets/images/fakultet/4.webp'

import TeacherOne from '../../assets/images/teacher/one.webp'
import TeacherTwo from '../../assets/images/teacher/two.webp'
import TeacherTree from '../../assets/images/teacher/tree.webp'
import TeacherFour from '../../assets/images/teacher/four.webp'

import UniversityOne from '../../assets/images/universitynumber/1.webp';
import UniversityTwo from '../../assets/images/universitynumber/02.webp';
import UniversityTree from '../../assets/images/universitynumber/03.webp';
import UniversityFour from '../../assets/images/universitynumber/04.webp';
import UniversityFive from '../../assets/images/universitynumber/05.webp';
import UniversitySix from '../../assets/images/universitynumber/06.webp';


// import 'swiper/css';
// import 'swiper/css/navigation';

import './Home.css'

const frequentlyAskQuestions = [
  {
    title: "Millat Umidi Universitetining maqsadi qanday?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Millat Umidi Universiteti to'liq stipendiya taklif qiladimi? ",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Qabul qilish muddati bormi? Millat Umidi universiteti ham qishki qabulni taklif qiladimi?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },

  {
    title: "Millat Umidi universitetida o'quv yilining boshlanish va tugash sanasi nima?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },

  {
    title: "O'qishim uchun kontarktni oylik bo'lib to'lay olamanmi?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },

  {
    title: "Barcha kerakli hujjatlarni topshirgandan keyin nima qilishim kerak",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
];

const Home = () => {


  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };


  return (
    <div>
      <header className='header container'>
        <div className='header-left'>
          <img src={Logo} alt="site-logo" referrerpolicy="no-referrer" style={{ width: '100px', height: '100px' }} />
        </div>

        <div className='header-middle'>

          <a className='header-middle-link' href="#">Biz haqimizda   </a>
          <a className='header-middle-link' href="#">Dasturlar</a>
          <a className='header-middle-link' href="#">Fikrlar</a>
          <a className='header-middle-link' href="#">Grantlar</a>
          <a className='header-middle-link' href="#">Ustozlarimiz</a>

        </div>

        <div className='header-right'>

          <a className='header-right-number' href="number">+998 (71) 200-03-06</a>

          <div className='header-right-box'>
            <img className='header-right-icon' src={LangIcon} alt="" referrerpolicy="no-referrer" />

            <select className='header-right-sel' name="" id="">
              <option value="">UZ</option>
              <option value="">RU</option>
              <option value="">EN</option>
            </select>

          </div>
        </div>
      </header>

      <main>
        <section className='hero'>
          <div className='hero-wrapper container'>
            <div className='hero-left'>
              <h1 className='hero-left-title'>Millat Umidi universiteti bilan xalqaro insonga aylaning</h1>
              <p className='hero-left-text'>
                Millat Umidi Universitetida biz sizni shunchaki o'qitibgina qolmay, o'zingiz xohlagan ishni topishga tayyorlaymiz.
                Eng zo'r bo'lish uchun eng yaxshilardan o'rganing! O'tkazib yubormang va hoziroq ro’yxatdan o’ting.
              </p>

              <div className='hero-left-box'>
                <img className="hero-left-img" src={BtnHero} alt="" />
                <img className="hero-left-img" src={BtnHeroTwo} alt="" />
              </div>
            </div>

            <div className='hero-right'>
              <img className='hero-right-img' src={HeroImg} alt="hero-img" referrerpolicy="no-referrer" />
            </div>
          </div>
        </section>


        <section className='youtube'>
          <div className='youtube-wrapper container'>
            <iframe className='youtube-iframe' src="https://www.youtube.com/embed/AnVO_pFyz7o?si=8VOZgaj_GabUnM7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </section>


        <section className='faculties'>
          <div className='container'>

            <div>
              <h3 className='faculties-title'>Bizning fakultetlarimiz</h3>
            </div>

            <Marquee style={{ height: '650px' }}>
              <div className='faculties-wrapper'>

                <div className='faculties-item'>
                  <img className='faculties-img' src={Fakultet1} alt="Faculties-img" referrerpolicy="no-referrer" />
                  <div className='faculties-box'>
                    <h3 className='faculties-text'>Axborot texnologiyalari (Dasturiy ta’minot)</h3>
                    <p className='faculties-desc'>
                      Dasturiy ta'minot muhandislari keng ko'lamli, murakkab dasturiy ta'minot infratuzilmalarini ishlab chiqadilar ...
                    </p>
                    <img className="faculties-btn" src={BtnBatafsil} alt="" />
                  </div>
                </div>

                <div className='faculties-item'>
                  <img className='faculties-img' src={Fakultet2} alt="Faculties-img" referrerpolicy="no-referrer" />
                  <div className='faculties-box'>
                    <h3 className='faculties-text'>Biznes menejment (Pearson BTEC)</h3>
                    <p className='faculties-desc'>
                      40 yildan ortiq muvaffaqiyatli o'qitish tajribasiga ega bo'lgan bizning BTEC International Business Level 3 ...
                    </p>
                    <img className="faculties-btn" src={BtnBatafsil} alt="" />
                  </div>
                </div>

                <div className='faculties-item'>
                  <img className='faculties-img' src={Fakultet3} alt="Faculties-img" referrerpolicy="no-referrer" />
                  <div className='faculties-box'>
                    <h3 className='faculties-text'>Ingliz tilini o’qitish</h3>
                    <p className='faculties-desc'>
                      2023-yilda talabalarga tillar va turdosh fanlarni o‘rgatish sohasida zarur ko‘nikma va bilimlarni berish uchun ...
                    </p>
                    <img className="faculties-btn" src={BtnBatafsil} alt="" />
                  </div>
                </div>


                <div className='faculties-item'>
                  <img className='faculties-img' src={Fakultet4} alt="Faculties-img" referrerpolicy="no-referrer" />
                  <div className='faculties-box'>
                    <h3 className='faculties-text'>Buxgalteriya hisobi va moliya</h3>
                    <p className='faculties-desc'>
                      Fakultetimiz talabalarga ACCA imtihonlarini topshirish va to‘qqizta asosiy sertifikat olish imkonini beruvchi
                    </p>
                    <img className="faculties-btn" src={BtnBatafsil} alt="" />
                  </div>
                </div>

                <div className='faculties-item'>
                  <img className='faculties-img' src={Fakultet4} alt="Faculties-img" referrerpolicy="no-referrer" />
                  <div className='faculties-box'>
                    <h3 className='faculties-text'>Biznes boshqaruvi (Milliy)</h3>
                    <p className='faculties-desc'>
                      “Xalqaro biznes” fakulteti negizida faoliyat yurituvchi “Biznes menejmenti” kursi talabalarga mulk shaklidan qat...
                    </p>
                    <img className="faculties-btn" src={BtnBatafsil} alt="" />
                  </div>
                </div>

              </div>
            </Marquee>
            <div className='faculties-student-box'>
              <img className="faculties-student-btn" src={BtnHero} alt="" />
            </div>
          </div>
        </section>


        <section className='about'>
          <div className='about-wrapper container'>
            <div className='about-left'>
              <img className='about-img-one' src={AboutOne} alt="about-img" referrerpolicy="no-referrer" />
              <img className='about-img-two' src={AboutTwo} alt="about-img" referrerpolicy="no-referrer" />
              <img className='about-img-tree' src={AboutTree} alt="about-img" referrerpolicy="no-referrer" />
            </div>

            <div className='about-right'>
              <h3 className='about-title'>Biz Haqimizda!</h3>
              <p className='about-text'>
                MU universiteti 2021-yilda ochilgan va jahondagi sifatli ta’lim standartlariga javob beradigan zamonaviy ta’lim muassasasi hisoblanadi. Millat Umidi universiteti o‘z talabalariga ixtisoslashtirilgan bilim olish va keyingi ta’lim olish va hayotda o‘z yo‘lini tanlash uchun keng imkoniyatlarni taqdim etadi.
              </p>
              <img className="about-btn" src={BtnHero} alt="" />
            </div>
          </div>
        </section>



        <section>
          {/* <div className='contaner'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div> */}
        </section>


        <section className='grants'>
          <div className="container">
            <div className="grants-box">
              <h2 className="grants-title">Grantlarimiz</h2>
              <img className="grants-img" src={Grants} alt="Grants-logo" width={170} height={170} />
            </div>
            <div className='grants-wrapper'>
              <div className='grants-left'>
                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Тренингда 1-чи қаторлар
                </p>

                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Премиум совғалар
                </p>

                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Спикерлар билан ёпиқ учрашувлар
                </p>

              </div>

              <div className='grants-middle'>
                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Тренингда 1-чи қаторлар
                </p>

                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Премиум совғалар
                </p>

                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Спикерлар билан ёпиқ учрашувлар
                </p>
              </div>

              <div className='grants-right'>
                <p className='grants-text'>
                  <FaCheck className="grants-icon" /> Тренингда 1-чи қаторлар
                </p>

                <p className='grants-text'>
                  <FaCheck className="grants-icon" />Премиум совғалар
                </p>

                <p className='grants-text'>
                  <FaCheck className="grants-icon" />Спикерлар билан ёпиқ учрашувлар
                </p>

              </div>
            </div>
            <div className="grants-btns">
              <img className="grants-btn" src={BtnHero} alt="" />
            </div>
          </div>
        </section>


        <section className="teachers">
          <div className="container">
            <div className="teachers-box">
              <h2 className="teachers-title">Bizning malakali o’qituvchilarimiz</h2>
            </div>

            <Marquee>

              <div className="teachers-wrapper">
                <div className="teachers-item">
                  <img src={TeacherOne} alt="Teacher-img" width={346} height={402} />
                  <p className="teachers-name">Yoqub</p>
                  <p className="teachers-lastname">Usmonov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">O’qituvchi, Marketolog</p>
                </div>

                <div className="teachers-item">
                  <img src={TeacherTwo} alt="Teacher-img" width={346} height={402} />
                  <p className="teachers-name">Ramziddin</p>
                  <p className="teachers-lastname">Nurmahammatov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">O’qituvchi, Marketolog</p>
                </div>

                <div className="teachers-item">
                  <img src={TeacherTree} alt="Teacher-img" width={346} height={402} />
                  <p className="teachers-name">Nodir</p>
                  <p className="teachers-lastname">Ismailov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">O’qituvchi, Marketolog</p>
                </div>

                <div className="teachers-item">
                  <img src={TeacherFour} alt="Teacher-img" width={346} height={402} />
                  <p className="teachers-name">Behruz </p>
                  <p className="teachers-lastname">Ismailov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">O’qituvchi, Marketolog</p>
                </div>


              </div>
            </Marquee>


          </div>
        </section>


        <section className="university">
          <div className="university-wrapper container">
            <h2 className="university-title">Universitetimizda o’qish uchun talablar</h2>
            <div className="university-box">

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">AMALIY DARSLAR</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar
                    CV yozish haqidagi dars
                    JOB interview ga ega bo’lasi
                  </p>
                  <img className="university-img" src={UniversityOne} alt="" />
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">AMALIY DARSLAR</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar
                    CV yozish haqidagi dars
                    JOB interview ga ega bo’lasiz
                  </p>
                  <img className="university-img" src={UniversityTwo} alt="" />
                </div>
              </div>


              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">AMALIY DARSLAR</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar
                    CV yozish haqidagi dars
                    JOB interview ga ega bo’lasiz
                  </p>
                  <img className="university-img" src={UniversityTree} alt="" />
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">AMALIY DARSLAR</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar
                    CV yozish haqidagi dars
                    JOB interview ga ega bo’lasiz
                  </p>
                  <img className="university-img" src={UniversityFour} alt="" />
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">AMALIY DARSLAR</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar
                    CV yozish haqidagi dars
                    JOB interview ga ega bo’lasiz
                  </p>
                  <img className="university-img" src={UniversityFive} alt="" />
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">AMALIY DARSLAR</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar
                    CV yozish haqidagi dars
                    JOB interview ga ega bo’lasiz
                  </p>
                  <img className="university-img" src={UniversitySix} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="questions">
          <div className="container">
            <h2 className="questions-title">Ko’p beriladigan savollar</h2>
            <div className="h-screen py-20 flex justify-center">
              <div className="w-[833px]rounded-lg overflow-hidden">
                {frequentlyAskQuestions.map((item, i) => (
                  <div key={i} className="border-orange-400 mb-1">
                    <div
                      className={`px-5 py-3 flex items-center justify-between questions-bor ${activeId === i ? "bg-gray-100" : ""}`}
                      onClick={() => togglerFunction(i)}
                    >
                      <p className="flex-1 questions-text">{item.title}</p>
                      <span>
                        {activeId === i ? (
                          <i className="fa-solid fa-angle-up"></i>
                        ) : (
                          <i className="fa-solid fa-angle-down"></i>
                        )}
                      </span>
                    </div>
                    <div
                      className={`transition-max-height duration-500 ease-in-out ${activeId === i ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
                    >
                      <div className="px-5 py-4">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>



      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">BIZGA MUROJAT QILING</h2>
          <div className="footer-wrapper">

            <div className="footer-left">
              <p className="footer-text">Qo’ng’iroq qiling: 9:00 - 20:00</p>
              <p className="footer-desc">+998 (71) 200-03-06</p>
            </div>

            <div className="footer-middle">
              <p className="footer-text">Savolingizni yozing</p>
              <span className="footer-line"></span>
              <span className="footer-line"></span>
            </div>

            <div className="footer-right">
              <p className="footer-text">poctadan murojat qiling</p>
              <a className="footer-desc" href="#">millatumidi@mail.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home