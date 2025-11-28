import { useState } from 'react';
import { Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageModal } from './LanguageModal';
import { useLanguage } from '../context/LanguageContext';

const popularLanguages = [
    { name: 'English', flag: 'gb' },
    { name: 'Spanish', flag: 'es' },
    { name: 'French', flag: 'fr' },
    { name: 'German', flag: 'de' },
    { name: 'Italian', flag: 'it' },
    { name: 'Portuguese', flag: 'pt' },
    { name: 'Japanese', flag: 'jp' },
    { name: 'Chinese', flag: 'cn' },
];

export const Languages = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <Globe size={20} />
                            <span className="font-bold tracking-wider text-sm uppercase">{t('languages.title')}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-xl">
                            {t('languages.subtitle')}
                        </h2>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-primary/30 transition-all"
                    >
                        <span className="font-medium text-gray-900 dark:text-white">{t('languages.viewAll')}</span>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-900 dark:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {popularLanguages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-white/5 hover:border-primary/30 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={`https://flagcdn.com/w80/${lang.flag}.png`}
                                    alt={lang.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-600">{lang.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <LanguageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};
