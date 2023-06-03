import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';


interface Name {
    course: string;
    imageSrc: string;
    profession: string
    category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const names: Name[] = [
    {
        course: 'Klasik kargoculuğun dışında tüm sektördeki firmalara özel hizmet ağımız ve yenilikçi bakış açımız ile özel teslimat hizmeti veriyoruz.',
        imageSrc: '/assets/courses/kargo-hizmeti.JPG',
        profession: 'Kargo Hizmeti',
        category: 'webdevelopment'
    },
    {
        course: 'Sabit araçlı kurye hizmetimiz ile firma taleplerine göre soğuk zincir de dahil olmak üzere her alanda aylık ve yıllık olarak özel teslimat modeli hizmeti veriyoruz.',
        imageSrc: '/assets/courses/sabit-aracli-kurye.jpg',
        profession: 'Sabit Araçlı Kurye',
        category: 'webdevelopment'
    },
    {
        course: 'Nobby Transport olarak ülke genelindeki tüm AVM’ lere ilgili teslimata uygun tüm araçlar ile özel dağıtımlar yapmaktadır',
        imageSrc: '/assets/courses/avm-lojistigi.jpg',
        profession: 'Avm Lojistiği',
        category: 'webdevelopment'
    }
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');

    const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
    const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
    const dataScience = names.filter((name) => name.category === 'datascience');
    const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

    let selectedNames: Name[] = [];

    if (selectedButton === 'mobiledevelopment') {
        selectedNames = mobileDevelopment;
    } else if (selectedButton === 'webdevelopment') {
        selectedNames = webDevelopment;
    } else if (selectedButton === 'datascience') {
        selectedNames = dataScience;
    } else if (selectedButton === 'cloudcomputing') {
        selectedNames = cloudComputing
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <p aria-hidden="true" className="mt-2 text-xl font-normal text-[#fe8704]">
                    {name.profession}
                </p>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-lg text-gray-900">
                        {name.course}
                    </div>
                </div>
          

                {/* <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    ));


    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-28 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center'>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 my-4 text-[#fe8704]">Hizmetlerimiz</h2>
                    {/* <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore Classes
                        </button>
                    </div> */}
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('webdevelopment')} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}></button>
                    {/* <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Mobile Development</button>
                    <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Data Science</button>
                    <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Cloud Computing</button> */}

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('webdevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'border-b-2 border-orange fill-orange hidden' : '') + " pb-2 block sm:hidden"} />
                    {/* <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} /> */}

                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-4">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NamesList;




