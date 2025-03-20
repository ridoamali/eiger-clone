import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="bg-[#24292e] text-white">
      <div className="container mx-auto px-4">
        {/* Top bar with special promo */}
        <div className="text-center py-1 text-xs hidden md:block">
          <p>Download Eiger Adventure App</p>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2084002582/849522504.jpeg"
                alt="Eiger Adventure Logo"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/products?gender=male" className="hover:text-gray-300">Pria</Link>
            <Link href="/products?gender=female" className="hover:text-gray-300">Wanita</Link>
            <Link href="/products?gender=kids" className="hover:text-gray-300">Anak</Link>
            <Link href="/equipment" className="hover:text-gray-300">Equipment</Link>
            <Link href="/products" className="hover:text-gray-300">Koleksi</Link>
          </nav>

          {/* Secondary Navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-xs hover:text-gray-300 hidden md:block">Tentang</Link>
            <Link href="/account/membership" className="text-xs hover:text-gray-300 hidden md:block">Membership</Link>
            <Link href="/store-locator" className="text-xs hover:text-gray-300 hidden md:block">Cari Toko</Link>

            {/* Icons for search, account, cart */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <ShoppingBag className="h-5 w-5" />
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#24292e] text-white">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link href="/products?gender=male" className="hover:text-gray-300 py-2 border-b border-gray-700">Pria</Link>
                    <Link href="/products?gender=female" className="hover:text-gray-300 py-2 border-b border-gray-700">Wanita</Link>
                    <Link href="/products?gender=kids" className="hover:text-gray-300 py-2 border-b border-gray-700">Anak</Link>
                    <Link href="/equipment" className="hover:text-gray-300 py-2 border-b border-gray-700">Equipment</Link>
                    <Link href="/products" className="hover:text-gray-300 py-2 border-b border-gray-700">Koleksi</Link>
                    <Link href="/about" className="hover:text-gray-300 py-2 border-b border-gray-700">Tentang</Link>
                    <Link href="/account/membership" className="hover:text-gray-300 py-2 border-b border-gray-700">Membership</Link>
                    <Link href="/store-locator" className="hover:text-gray-300 py-2 border-b border-gray-700">Cari Toko</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
