'use client'
import React, { useEffect, useRef } from 'react';

// Reusable BentoItem component
const BentoItem = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={itemRef} className={`bento-item ${className || ''}`}>
            {children}
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <section className="py-16 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="w-full max-w-6xl mx-auto z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-8">Core Features</h1>
                    <div className="bento-grid">
                        <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">Real-time Analytics</h2>
                                <p className="mt-2 text-muted-foreground">Monitor your application's performance with up-to-the-second data streams and visualizations.</p>
                            </div>
                            <div className="mt-4 h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                                Chart Placeholder
                            </div>
                        </BentoItem>
                        <BentoItem>
                            <h2 className="text-xl font-bold text-foreground">Global CDN</h2>
                            <p className="mt-2 text-muted-foreground text-sm">Deliver content at lightning speed, no matter where your users are.</p>
                        </BentoItem>
                        <BentoItem>
                            <h2 className="text-xl font-bold text-foreground">Secure Auth</h2>
                            <p className="mt-2 text-muted-foreground text-sm">Enterprise-grade authentication and user management built-in.</p>
                        </BentoItem>
                        <BentoItem className="row-span-2">
                            <h2 className="text-xl font-bold text-foreground">Automated Backups</h2>
                            <p className="mt-2 text-muted-foreground text-sm">Your data is always safe with automated, redundant backups.</p>
                        </BentoItem>
                        <BentoItem className="col-span-2">
                            <h2 className="text-xl font-bold text-foreground">Serverless Functions</h2>
                            <p className="mt-2 text-muted-foreground text-sm">Run your backend code without managing servers. Scale infinitely with ease.</p>
                        </BentoItem>
                        <BentoItem>
                            <h2 className="text-xl font-bold text-foreground">CLI Tool</h2>
                            <p className="mt-2 text-muted-foreground text-sm">Manage your entire infrastructure from the command line.</p>
                        </BentoItem>
                    </div>
                </div>
            </div>
        </section>
    );
};
