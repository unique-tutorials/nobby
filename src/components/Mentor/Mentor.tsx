// MENTORS DATA

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Nusret',
        href: '#',
        imageSrc: '/assets/mentor/nusret.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Shoo Thar Mein',
    },
    {
        id: 2,
        name: 'A101',
        href: '#',
        imageSrc: '/assets/mentor/a101.png',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Cristian Doru Barin',
    },
    {
        id: 3,
        name: 'Beymen',
        href: '#',
        imageSrc: '/assets/mentor/beymen.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Tanzeel Ur Rehman',
    },
    {
        id: 4,
        name: 'Netlog',
        href: '#',
        imageSrc: '/assets/mentor/netlog.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Andrew Williams',
    },
    {
        id: 5,
        name: 'Dinamik',
        href: '#',
        imageSrc: '/assets/mentor/dinamik.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Brad Schiff',
    },
    {
        id: 6,
        name: 'Defacto',
        href: '#',
        imageSrc: '/assets/mentor/defacto.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Daniel Walter Scott',
    },
    {
        id: 7,
        name: 'Dolce',
        href: '#',
        imageSrc: '/assets/mentor/dolce.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Daniel Walter Scott',
    },
    {
        id: 7,
        name: 'Koç',
        href: '#',
        imageSrc: '/assets/mentor/koc.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Daniel Walter Scott',
    },
    {
        id: 7,
        name: 'Sendeo',
        href: '#',
        imageSrc: '/assets/mentor/sendeo.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Daniel Walter Scott',
    },
]

const Mentor = () => {
    return (
            <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center mb-12'>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 my-4">Referanslarımız</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                            Tümünü Gör
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 border border-[#d9d9d9]">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-center ">
                                <div>
                                    <div className='border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow'>
                                        <h3 className="text-sm text-gray-700 text-center">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="mt-3 text-2xl font-semibold text-white text-center">{product.color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Mentor;
