"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { House, LogIn, Menu } from "lucide-react";







export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "/profissionais", label: "Profissionais" },
        
    ]

    const session = null;

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Button
                    onClick={() => setIsOpen(false)}
                    key={item.href}
                    asChild
                    className="bg-transparent hover:bg-transparent text-black shadow-none"
                >
                    <Link href={item.href} className="text-base">
                        {item.label}
                    </Link>

                </Button>
            ))}

            { session ? (
                <Button asChild className="flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white">

                    <Link href="/dashboard">
                        
                        <House/>

                        Acessar Clínica

                    </Link>

                </Button>

            ) : (

                <Button  className="bg-black hover:bg-neutral-800 text-white " >

             
                    <LogIn/>

                    Portal da Clínica                

                </Button>
            )}
        

        </>
    )
    

    return (
        <header
            className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white"
        >
            <div
                className="container mx-auto flex items-center justify-between"
            >
                <Link href="/" className="flex items-center">    
                    <Image src="/logo-odonto.png" alt="Logo OdontoSystem" width={100} height={50} />
                </Link>

                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks/>
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button 
                            variant="ghost" 
                            className="text-black hover:bg-transparent"
                            size="icon"
                        >

                            <Menu className="w-6 h-6"/>

                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999] bg-neutral-500 ">

                        <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            Navegue pelo site
                        </SheetDescription>
                        </SheetHeader>

                            <nav className="flex flex-col space-y-4 mt-6" >
                                <NavLinks/>
                            </nav>

                    </SheetContent>

                </Sheet>

            </div>
        </header>
        
    )
}