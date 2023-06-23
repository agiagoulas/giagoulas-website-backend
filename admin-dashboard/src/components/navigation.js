import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function NavigationItem({ currentPage, link, name }) {
    return (
        <>
            <div className="self-center block text-center">
                <hr className="h-0.5 invisible" />
                <Link href={link} className="text-gray-800 hover:text-gray-500 font-semibold">{name}</Link>
                {(currentPage == name) ? (
                    <hr className="h-0.5 border-t-2 rounded border-gray-500" />
                ) : (
                    <hr className="invisible h-0.5" />
                )}
            </div>

        </>
    );
}

function SocialMediaLink({ url, icon, name }) {
    return (
        <Link href={url}>
            <div className="w-4 h-4 relative">
                <Image src={icon} fill alt={name} />
            </div>
        </Link>
    );
}

export default function Navigation({ currentPage }) {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <>
            <nav className="container mx-auto px-4 flex flex-wrap py-6">
                <div className="basis-3/4 md:basis-1/4 flex justify-start my-auto">
                    <Link href="/">
                        <p className="text-xl font-semibold">GIAGOULAS PHOTOGRAPHY</p>
                    </Link>
                </div>
                <div className="basis-1/4 flex justify-end md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm rounded-lg"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                    >
                        <span className="sr-only">Open main menu</span>

                        <div className="w-6 h-6 relative">
                            {!showMobileNav ?
                                <Image src="/icons/menu.svg" fill alt="menu icon" />
                                :
                                <Image src="/icons/close.svg" fill alt="close icon" />
                            }
                        </div>

                    </button>
                </div>
                <div className={`justify-center items-center basis-full md:flex md:basis-1/2 ${showMobileNav ? 'flex mt-4' : 'hidden'}`}>
                    <ul className="flex justify-center flex-col gap-6 mx-auto md:flex-row">
                        <li><NavigationItem currentPage={currentPage} link="/" name="Home" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/images" name="Images" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/about" name="About" /></li>
                    </ul>
                </div>

                <div className="hidden md:flex basis-1/4 justify-end items-center">
                    <ul className="flex flex-row md:space-x-6">
                        <li><SocialMediaLink url="https://www.instagram.com/giagoulasphoto/" icon="/icons/instagram.svg" name="Instagram" /></li>
                        <li><SocialMediaLink url="https://www.linkedin.com/in/alexander-giagoulas/" icon="/icons/linkedin.svg" name="LinkedIn" /></li>
                        <li><SocialMediaLink url="mailto:alexander@giagoulas.com" icon="/icons/mail.svg" name="Mail" /></li>
                        <li><SocialMediaLink url="/links" icon="/icons/links.svg" name="Links" /></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    );
}
