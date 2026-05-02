import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import fotoImg from "../../../../public/foto1.png"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Professionals() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl text-center mb-12 font-bold">

                    Clínica Disponíveis

                </h2>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    <Card  className="overflow-hidden">
                        <CardContent className="p-0">
                            <div>
                                <div className="relative h-48 overflow-hidden rounded-t-xl">
                                    <Image
                                        src={fotoImg}
                                        alt="Professional"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between ">
                                    <div>
                                        <h3 className="font-semibold text-lg">

                                            Clínica Centro

                                        </h3>

                                        <p className="text-sm text-gray-500">Rua Principal, 123, Brasilia - DF</p> 
                                    </div>

                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>

                                </div>

                                <Link 
                                    href="/clinica/123"
                                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center rounded-md py-0.5 mt-3 text-sm font-medium md:text-base"
                                >
                                    Agendar seu horário
                                    <ArrowRight className="ml-2" />
                                
                                </Link>
                            </div>
                        </CardContent>

                    </Card>
                    

                </section>

            </div>

        </section>
    )
}
