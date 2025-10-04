import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown } from "lucide-react"
import { motion } from 'framer-motion'


const cards = [
    {
        authorName: "Dean Watson",
        authorImg: 'https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg',
        authorPosition: 'Managing director : Farmland',
        content: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
    },
    {
        authorName: "Dean Watson",
        authorImg: 'https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg',
        authorPosition: 'Managing director : Farmland',
        content: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
    },
    {
        authorName: "Dean Watson",
        authorImg: 'https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg',
        authorPosition: 'Managing director : Farmland',
        content: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
    },
    {
        authorName: "Dean Watson",
        authorImg: 'https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg',
        authorPosition: 'Managing director : Farmland',
        content: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
    },
    {
        authorName: "Dean Watson",
        authorImg: 'https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg',
        authorPosition: 'Managing director : Farmland',
        content: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
    },
    {
        authorName: "Dean Watson",
        authorImg: 'https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg',
        authorPosition: 'Managing director : Farmland',
        content: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
    }
]

export default function Testimonials() {
    return (
        <div className="flex flex-col max-sm:py-10 max-sm:px-2 justify-center gap-8 items-center py-20 px-10">
            <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Testimonials</Badge>
            <h1 className="text-5xl max-sm:text-4xl text-center max-w-3xl font-semibold">
                Trusted by satisfied clients
            </h1>
            <p className="text-muted-foreground max-w-lg text-center">
                Discover how we’ve driven growth and innovation.
            </p>
            <div className="grid mt-5 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 max-w-7xl">
                {cards.map((item, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount:0.7 }} // 👈 only animate on first view
                    >
                        <Card key={idx} className="relative z-10 w-full rounded-3xl bg-neutral-950/70 backdrop-blur-4xl text-white p-6 overflow-hidden">
                            {/* Blue beam glow */}
                            <div className="absolute -right-1/4 -top-1/2 rounded-full h-full w-1/2 bg-gradient-to-l from-primary via-primary to-transparent blur-3xl" />

                            <CardContent className="relative z-10 p-0 space-y-4">


                                {/* Description */}
                                <p className="text-md text-neutral-400 leading-relaxed">
                                    "{item.content}"
                                </p>
                                <div className="flex gap-5">
                                    <div className="h-16 w-16 p-2 rounded-[10px] bg-card">
                                        <img src={item.authorImg} alt={item.authorName} className="h-full w-full rounded-[10px] " />
                                    </div>
                                    <div className="flex flex-col py-1 justify-end">
                                        <p className="text-lg font-semibold">{item.authorName}</p>
                                        <p className="text-muted-foreground">{item.authorPosition}</p>
                                    </div>
                                </div>


                            </CardContent>
                        </Card>

                    </motion.div>

                ))}
            </div>

        </div>
    )
}