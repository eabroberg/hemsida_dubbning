import { Video, FileText, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-32 bg-surface relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('services.title.main')} <span className="text-gradient">{t('services.title.highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-400">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Video Dubbing Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                            <Video size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('services.videoDubbing.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                            {t('services.videoDubbing.description')}
                        </p>
                        <ul className="space-y-3">
                            {(t('services.videoDubbing.features') as unknown as string[]).map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <Check size={12} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* PPT Translation Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl hover:border-secondary/30 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('services.pptTranslation.title')}</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                            {t('services.pptTranslation.description')}
                        </p>
                        <ul className="space-y-3">
                            {(t('services.pptTranslation.features') as unknown as string[]).map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                                        <Check size={12} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
