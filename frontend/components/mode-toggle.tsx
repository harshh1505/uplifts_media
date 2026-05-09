'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
                <Sun className="h-[1.2rem] w-[1.2rem] opacity-0" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-10 h-10 relative overflow-hidden"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center w-full h-full"
                >
                    {theme === 'dark' ? (
                        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
                    ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem] text-[#0A1A3A]" />
                    )}
                </motion.div>
            </AnimatePresence>
        </Button>
    );
}
