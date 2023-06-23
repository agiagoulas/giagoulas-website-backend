import Link from 'next/link';

function FooterLink({ link, name }) {
    return (
        <Link href={link} className="text-gray-800 md:hover:text-gray-500 font-medium text-sm">{name}</Link>
    );
}

export default function Footer() {
    return (
        <footer>
            <hr />
            <div className="container mx-auto p-4 flex justify-center gap-4">
                <FooterLink link="/imprint" name="Imprint" />
                <FooterLink link="/privacy-policy" name="Privacy Policy" />
            </div>
        </footer>
    );
}
