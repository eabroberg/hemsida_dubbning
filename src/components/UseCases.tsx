import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, GraduationCap, Youtube, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MarketerVisual, EducatorVisual, CreatorVisual, EnterpriseVisual } from './UseCaseVisuals';

export const UseCases = () => {
    const { t } = useLanguage();
    const [activeCase, setActiveCase] = useState(0);

    const cases = [
        {
            icon: <Megaphone size={24} />,
            title: t('useCases.items.marketers.title'),
            description: t('useCases.items.marketers.description'),
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
            border: 'border-blue-400/20',
            stats: [
                { label: 'Ad Reach', value: 'Global' },
                { label: 'Engagement', value: '+45%' }
            ]
        },
        {
            icon: <GraduationCap size={24} />,
            title: t('useCases.items.educators.title'),
            description: t('useCases.items.educators.description'),
            color: 'text-green-400',
            bg: 'bg-green-400/10',
            border: 'border-green-400/20',
            stats: [
                { label: 'Accessibility', value: '100%' },
                { label: 'Languages', value: '32+' }
            ]
        },
        {
            icon: <Youtube size={24} />,
            title: t('useCases.items.creators.title'),
            description: t('useCases.items.creators.description'),
            color: 'text-red-400',
            bg: 'bg-red-400/10',
            border: 'border-red-400/20',
            stats: [
                { label: 'Viewer Growth', value: 'Rapid' },
                { label: 'Retention', value: 'High' }
            ]
        },
        {
            icon: <Building2 size={24} />,
            title: t('useCases.items.corporate.title'),
            description: t('useCases.items.corporate.description'),
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
            border: 'border-purple-400/20',
            stats: [
                { label: 'Clarity', value: 'Crystal' },
                { label: 'Security', value: 'Enterprise' }
            ]
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCase((prev) => (prev + 1) % cases.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [cases.length]);

    return (
        <section className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: List */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('useCases.title.main')} <span className="text-gradient">{t('useCases.title.highlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-400 mb-12 leading-relaxed">
                            {t('useCases.subtitle')}
                        </p>

                        <div className="space-y-4">
                            {cases.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveCase(index)}
                                    className={`group cursor-pointer flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border ${activeCase === index
                                        ? 'bg-white dark:bg-white/10 border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/20'
                                        : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-200 dark:hover:border-white/5'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${activeCase === index ? `${item.bg} ${item.color}` : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${activeCase === index ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Visualization */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCase}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative w-full max-w-md h-[400px]" // Fixed height for consistency
                            >
                                {/* Main Card */}
                                <div className={`w-full h-full glass p-8 rounded-3xl border ${cases[activeCase].border} relative overflow-hidden group flex flex-col`}>
                                    {/* Scanning Line Effect */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-scan" />

                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6 shrink-0">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cases[activeCase].bg} ${cases[activeCase].color} shadow-lg shadow-${cases[activeCase].color}/20`}>
                                            {cases[activeCase].icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Active Profile</div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cases[activeCase].title}</h3>
                                        </div>
                                    </div>

                                    {/* Dynamic Visual Area */}
                                    <div className="flex-1 bg-slate-50/50 dark:bg-black/20 rounded-2xl mb-6 border border-slate-100 dark:border-white/5 relative overflow-hidden">
                                        {activeCase === 0 && <MarketerVisual />}
                                        {activeCase === 1 && <EducatorVisual />}
                                        {activeCase === 2 && <CreatorVisual />}
                                        {activeCase === 3 && <EnterpriseVisual />}
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4 shrink-0">
                                        {cases[activeCase].stats.map((stat, i) => (
                                            <div key={i} className="bg-white/40 dark:bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">{stat.label}</div>
                                                <div className={`text-lg font-bold ${cases[activeCase].color}`}>{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
