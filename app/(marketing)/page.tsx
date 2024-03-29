import { Medal } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const headingFont = localFont({ src: '../../public/fonts/font.woff2' });

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col gap-2',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Nr.1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Empower your projects with
        </h1>

        <div className="text-3xl md:text-6xl bg-gradient-to-r from-orange-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          AgileStack
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-6 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        Unleash collaboration, project management, and peak productivity. From
        high-rises to home offices, accomplish it all uniquely with AgileStack.
      </div>
      <Button
        className="mt-8 rounded-xl bg-gradient-to-r from-gray-950 via-gray-850 to-gray-800"
        size="lg"
        asChild
      >
        <Link href="/sign-up">Get AgileStack for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
