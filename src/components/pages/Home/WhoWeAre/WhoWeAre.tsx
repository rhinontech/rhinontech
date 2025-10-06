'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion'
import { Briefcase, Star } from "lucide-react";
import Image from "next/image";


export default function WhoWeAre() {
    return (
        <div className="flex flex-col justify-center max-w-7xl mx-auto gap-8 items-center max-sm:pt-0 max-sm:pb-10 py-20 px-10">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Who we are</Badge>
            </motion.div>
            <div className="flex w-full gap-5 ">

                {/* left side */}

                <motion.div
                    className="flex-1 flex flex-col gap-5 "
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // 👈 only animate on first view
                >
                    <h1 className="text-5xl font-semibold">Innovating the Future <br /> with AI</h1>
                    <p className="text-md text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem provident quos sit voluptatibus, vel earum voluptatum aliquid odit nesciunt obcaecati amet consectetur error qui alias rem. Provident laudantium quam dolorem cupiditate architecto, reprehenderit tempore voluptates odio ab quibusdam atque nostrum, iusto officia earum et? Dolore quaerat similique asperiores quasi officiis.</p>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-card border flex gap-3 p-3 rounded-[10px]">
                            <div>
                                <div className="w-10 relative top-1 h-10 bg-primary/10 rounded-full p-2">
                                    <Briefcase className="text-primary" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl">Our Work</h1>
                                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ad nostrum.</p>
                            </div>
                        </div>
                        <div className="bg-card border flex gap-3 p-3 rounded-[10px]">
                            <div>
                                <div className="w-10 relative top-1 h-10 bg-primary/10 rounded-full p-2">
                                    <Star className="text-primary" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl">Our Values</h1>
                                <p className="text-sm text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nesciunt.</p>

                            </div>
                        </div>
                    </div>
                    <Button className="w-fit px-5 text-white rounded-[8px]">View More</Button>
                </motion.div>

                {/* right side */}

                <motion.div
                    className="grid relative  bg-card rounded-2xl w-[500px] h-[430px] grid-cols-[repeat(50,10px)] grid-rows-[repeat(43,10px)]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // 👈 only animate on first view
                >
                    <div className="overflow-hidden absolute -top-10 h-48 w-48 right-10 rounded-2xl">
                        <Image
                            src="https://i.pinimg.com/736x/ab/c6/98/abc698f9a8735b752d5114bc5c167de7.jpg"
                            alt="Yellow Box Image"
                            width={100}
                            height={100}
                            className=" w-full h-auto object-cover"
                        />

                    </div>
                    <div className=" overflow-hidden rounded-2xl col-start-5 col-end-25 row-start-5 row-end-21">
                        <Image
                            src="https://i.pinimg.com/736x/64/06/37/64063744dd568fdbb2011743919ea563.jpg"
                            alt="Yellow Box Image"
                            width={100}
                            height={100}
                            className=" w-full h-auto object-cover"
                        />
                    </div>
                    <div className=" overflow-hidden rounded-2xl col-start-3 col-end-24 row-start-24 row-end-42">
                        <Image
                            src="https://i.pinimg.com/736x/6e/71/06/6e71067b2a74904828d15446d0363ca5.jpg"
                            alt="Yellow Box Image"
                            width={100}
                            height={100}
                            className=" w-full h-auto object-cover"
                        />
                    </div>
                    <div className=" overflow-hidden rounded-2xl col-start-27 col-end-51 row-start-19 row-end-40">
                        <Image
                            src="https://i.pinimg.com/1200x/ea/f2/bf/eaf2bff7c190316f079788ad6083b6b7.jpg"
                            alt="Yellow Box Image"
                            width={100}
                            height={100}
                            className=" w-full h-auto object-center"
                        />
                    </div>

                </motion.div>

            </div>
        </div >
    )
}