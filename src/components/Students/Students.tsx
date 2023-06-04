import Slider from "react-slick";
import React, { Component } from "react";
import { FaUser } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { SlOrganization } from "react-icons/sl";
interface DataType {
    profession: string;
    name: string;
    icon: React.ReactNode;
    detail: string;
  }

const postData: DataType[] = [
    {
        profession: '',
        name: 'Güvenilirlik',
        icon: <FaUser size={45} className="m-auto text-[#fe8704]"/>,
        detail: "Tüm kargo işlemleriniz KVKK kanunu gerekliliklerine göre özel yazılım programlarımız üzerinden sağlanır. En üst düzeyde güvenlik önlemleri alır."
    },
    {
        profession: '',
        name: 'Müşteri Desteği',
        icon: <BiSupport size={45} className="m-auto text-[#fe8704]" />,
        detail: "Tüm müşterilerimiz için özel atanan müşteri temsilcilerimiz ile firmamıza anında ulaşırsınız. Çünkü müşteri memnuniyetini her zaman öncelikli tutmaktayız."
    },
    {
        profession: '',
        name: 'Saha organizasyonu',
        icon: <SlOrganization size={45} className="m-auto text-[#fe8704]" />,
 
        detail: "Aktif saha operasyonumuz ile süper hızlı çözümler üretiyoruz. Bu hızlı çözümlerimiz ile % 100 müşteri memnuniyeti için çok çalışıyoruz."
    },
    {
        profession: '',
        name: 'Dakiklik',
        icon: <AiOutlineFieldTime size={45} className="m-auto text-[#fe8704]" />,

        detail: "Lojistik hız gerektirir. Hızımız ile sizi şaşırtmayı hedefliyoruz. Bu yüzden tüm süreçleriniz dakikalar içerisinde çözümlenir. Zaman yönetimine büyük önem verilir"
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
          ],
        };


        return (
            <div id="testimonial-section" className='bg-bgpink bg-newsletter'>
                <div className="mx-auto max-w-2xl px-10 pt-20 pb-24 sm:pt-20 lg:max-w-7xl lg:px-20">

                    <div className='sm:flex justify-between items-center pb-6'>
                        <h2 className="text-3xl sm:text-4xl w-full font-bold tracking-tight text-center text-gray-900 my-4 text-[#fe8704]">Bizi Özel Yapan Nedir? </h2>
                        {/* <div>
                            <button className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                                Give Your Review
                            </button>
                        </div> */}
                    </div>

                    <p className='text-lg font-medium pb-12 text-center'>Nobby Transport, müşterilerine güvenilir ve hızlı kargo taşımacılığı hizmetleri sunan önde gelen bir lojistik şirketidir. </p>

                    <Slider {...settings}>
                            {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-4 pt-8 px-12 max-lg:px-3 pb-10 text-center rounded-lg bg-[#fff9e7]'>
                                <div className='relative'>
                                    {items.icon}
                                  
                                </div>
                                <h3 className='text-sm pt-4 pb-2'>{items.profession}</h3>
                                <h4 className='text-2xl font-semibold pb-3 text-[#fe8704]'>{items.name}</h4>
                           
                                <p className='text-lg font-medium leading-9'>{items.detail}</p>
                                </div>
                            </div>
                            ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
