import * as React from 'react';

import { cn } from '@/utils/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-full'>
      <img src='/topnav.svg' className='object-cover w-full h-10' />
      <div className='flex flex-row w-full h-24 gap-4 p-4 justify-evenly'>
        <img src='/navlogo.png' className='object-cover w-32 h-16' />
        <NavigationMenuHead />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href='/booking'>Bookings</a>
            </DropdownMenuItem>
            {user ? (
              <DropdownMenuItem>
                <Button onClick={() => signOut()}>Logout</Button>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <Button onClick={() => navigate('/login')}>Login</Button>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Long Tours',
    href: '/long-tours',
    description:
      'These tours are longer than 3 days and 2 nights. They are usually more expensive than short tours.',
  },
  {
    title: 'Short Tours',
    href: '/short-tours',
    description:
      'These tours are shorter than 3 days and 2 nights. They are usually cheaper than long tours',
  },
];

function NavigationMenuHead() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/trekking'
            className={navigationMenuTriggerStyle()}
          >
            Trekking
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/activities'
            className={navigationMenuTriggerStyle()}
          >
            Activities
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/packages'
            className={navigationMenuTriggerStyle()}
          >
            Our Packages
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/blogs'
            className={navigationMenuTriggerStyle()}
          >
            Blogs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/about-us'
            className={navigationMenuTriggerStyle()}
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
