import Link from "next/link";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
// MIDDLE LINKS DATA
// interface ProductType {
//     id: number;
//     section: string;
//     link: string[];
// }

// const products: ProductType[] = [
//     {
//         id: 1,
//         section: "Company",
//         link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
//     },
//     {
//         id: 2,
//         section: "Support",
//         link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
//     }
// ]
interface ProductType {
    id: number;
    icon: React.ReactNode;
    detail: string;
  }

const products: ProductType[] = [
    {
        id: 1,
        icon: <MdLocationOn size={28} className="m-auto" />,
        detail: "Üçevler Mahallesi Pazaryolu Caddesi 101/A Esenyurt İSTANBUL"
    },
    {
        id:2,
        icon: <AiTwotoneMail size={25} className="m-auto" />,
        detail: "bahadir.tanis@nobbytransport.com"
    },
    {
        id:3,
        icon: <BsFillTelephoneOutboundFill size={20} className="m-auto"/>,
        detail: "0532 055 26 44"
       
    },
]

const footer = () => {
    return (
        <div className="bg-bgpurple" id="first-section">
            <div className="mx-auto max-w-2xl pt-3 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                    <h4 className='font-bold tracking-tight text-gray-900 my-4 text-white'>NOBBY <br /> TRANSPORT</h4>
                        <h3 className='text-white text-lg font-medium leading-9 mb-4'> Nobby Transport, güvenilir ve hızlı kurye taşımacılığı hizmetleri sunan bir firma olarak sizlere hizmet vermekten gurur duyar.</h3>
                        <div className='flex gap-4'>
                            <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}
                    <div className="col-span-4">
                    <h3 className='text-white text-xl font-semibold mb-6'>Bize Ulaş</h3>
                    {products.map((product) => (
                            <div key={product.id} className="group relative flex flex-row items-center">
                            <p className="text-white text-xl font-medium mb-5 mr-3">{product.icon}</p>
                            <p className="text-white text-xl font-medium mb-5">{product.detail}</p>
                            {/* <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-offwhite text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                        
                  
                    ))}
                    </div>
                    {/* CLOUMN-4 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-xl font-semibold mb-6'>Güncel Kal</h3>
                        <div className="relative text-white focus-within:text-white flex flex-row-reverse">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-white bg-gray-900 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-white" placeholder="E-posta adresiniz" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <img src={'/assets/footer/inputIcon.svg'} alt="inputicon" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='pb-6 px-4'>
                <h3 className='text-center text-offwhite'>@2023 - Tüm haklar saklıdır <Link href="/" target="_blank"> Nobby Transport</Link></h3>
            </div>

        </div>
    )
}

export default footer;
