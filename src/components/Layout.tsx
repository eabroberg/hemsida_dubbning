import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X, Globe, Mic, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'sv' ? 'en' : 'sv');
    };

    return (
        <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-background">
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#030305]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div
                        className="flex items-center gap-2 font-heading font-bold text-2xl text-gray-900 dark:text-white cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-background">
                            <Mic size={20} />
                        </div>
                        <span>Dubb<span className="text-primary">AI</span></span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">{t('header.services')}</a>
                        <a href="#how-it-works" className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">{t('header.howItWorks')}</a>
                        <a href="#about" className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">{t('header.about')}</a>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 min-w-[80px]"
                            onClick={toggleLanguage}
                            aria-label={t('header.switchLanguage')}
                        >
                            <Globe size={16} />
                            {language.toUpperCase()}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="text-gray-900 dark:text-white hover:text-primary"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>
                        <Button size="sm" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>{t('header.getQuote')}</Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-900 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-24 px-4 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-900 dark:text-white">{t('header.services')}</a>
                            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-900 dark:text-white">{t('header.howItWorks')}</a>
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-900 dark:text-white">{t('header.about')}</a>
                            <div className="flex justify-center">
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    <Globe size={16} />
                                    {language === 'sv' ? 'English' : 'Svenska'}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        toggleTheme();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="ml-4 text-gray-900 dark:text-white"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </Button>
                            </div>
                            <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('header.getQuote')}</Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-surface py-12 border-t border-black/5 dark:border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-background">
                                    <Mic size={14} />
                                </div>
                                <span>Dubb<span className="text-primary">AI</span></span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('footer.description')}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">{t('footer.services')}</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li><a href="#services" className="hover:text-primary">{t('footer.links.videoDubbing')}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">{t('footer.company')}</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li><a href="#about" className="hover:text-primary">{t('footer.links.about')}</a></li>
                                <li><a href="#contact" className="hover:text-primary">{t('footer.links.contact')}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">{t('footer.contact')}</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>info@dubbai.se</li>
                                <li>+46 8 123 45 67</li>
                                <li>Malmö, Sverige</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-black/5 dark:border-white/5 pt-8 text-center text-sm text-gray-600 dark:text-gray-500">
                        {t('footer.copyright')}
                    </div>
                </div>
            </footer>
        </div>
    );
};
