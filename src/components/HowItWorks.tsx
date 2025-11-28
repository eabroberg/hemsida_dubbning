import { Send, FileCheck, Cpu, CheckCircle, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks = () => {
    const { t } = useLanguage();
    // Video Demo State
    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'sv' | 'de' | 'dk'>('en');
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const steps = [
        {
            icon: <Send size={24} />,
            title: t('howItWorks.steps.request.title'),
            description: t('howItWorks.steps.request.description'),
        },
        {
            icon: <FileCheck size={24} />,
            title: t('howItWorks.steps.approval.title'),
            description: t('howItWorks.steps.approval.description'),
        },
        {
            icon: <Cpu size={24} />,
            title: t('howItWorks.steps.process.title'),
            description: t('howItWorks.steps.process.description'),
        },
        {
            icon: <CheckCircle size={24} />,
            title: t('howItWorks.steps.quality.title'),
            description: t('howItWorks.steps.quality.description'),
        },
        {
            icon: <Download size={24} />,
            title: t('howItWorks.steps.delivery.title'),
            description: t('howItWorks.steps.delivery.description'),
        },
    ];

    const languages = [
        { id: 'en', name: t('howItWorks.demo.languages.original'), flag: 'gb', video: '/videos/demo_en.mp4' },
        { id: 'sv', name: t('howItWorks.demo.languages.swedish'), flag: 'se', video: '/videos/demo_sv.mp4' },
        { id: 'de', name: t('howItWorks.demo.languages.german'), flag: 'de', video: '/videos/demo_de.mp4' },
        { id: 'dk', name: t('howItWorks.demo.languages.danish'), flag: 'dk', video: '/videos/demo_dk.mp4' }
    ] as const;

    const handleLanguageChange = (langId: typeof currentLanguage) => {
        setCurrentLanguage(langId);
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.src = languages.find(l => l.id === langId)?.video || '';
            videoRef.current.load();
            videoRef.current.play();
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section id="how-it-works" className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('howItWorks.title.main')} <span className="text-gradient">{t('howItWorks.title.highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-400">
                        {t('howItWorks.subtitle')}
                    </p>
                </div>

                {/* Steps Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-32 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative text-center group"
                        >
                            <div className="w-24 h-24 mx-auto bg-surface border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 transition-colors duration-300 shadow-lg">
                                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 text-primary font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Demo Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                        {/* Controls / Info Side */}
                        <div className="p-8 lg:p-12 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-surface/50">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <Sparkles size={20} />
                                <span className="font-bold tracking-wider text-sm">{t('howItWorks.demo.badge')}</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('howItWorks.demo.title')}</h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                                {t('howItWorks.demo.description')}
                            </p>

                            <div className="space-y-3">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => handleLanguageChange(lang.id as any)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group ${currentLanguage === lang.id
                                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                            : 'bg-black/20 border-white/5 text-gray-400 hover:bg-black/5 dark:bg-white/5 hover:border-white/20 hover:text-gray-900 dark:text-white'
                                            }`}
                                    >
                                        <div className="relative w-8 h-6 rounded overflow-hidden shadow-sm shrink-0">
                                            <img
                                                src={`https://flagcdn.com/w40/${lang.flag}.png`}
                                                alt={lang.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <span className="font-medium text-left flex-1">{lang.name}</span>
                                        {currentLanguage === lang.id && (
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Video Player Side */}
                        <div className="lg:w-2/3 bg-black relative aspect-video group">
                            <video
                                ref={videoRef}
                                src={languages.find(l => l.id === currentLanguage)?.video}
                                className="w-full h-full object-contain"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                controls={false} // Custom controls
                                playsInline
                            />

                            {/* Custom Play Overlay */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                                onClick={togglePlay}
                            >
                                <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:scale-110 hover:bg-white/20 transition-all cursor-pointer">
                                    {isPlaying ? (
                                        <div className="w-6 h-6 bg-white rounded-sm" /> // Pause icon
                                    ) : (
                                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" /> // Play icon
                                    )}
                                </button>
                            </div>

                            {/* Language Label Overlay */}
                            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gray-900 dark:text-white text-sm font-medium flex items-center gap-2 pointer-events-none">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                {languages.find(l => l.id === currentLanguage)?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
