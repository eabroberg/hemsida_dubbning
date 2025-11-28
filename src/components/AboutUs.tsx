import { Target, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const AboutUs = () => {
    const { t } = useLanguage();

    const values = [
        {
            icon: Target,
            key: 'quality',
        },
        {
            icon: Sparkles,
            key: 'innovation',
        },
        {
            icon: Users,
            key: 'customer',
        },
    ];

    return (
        <section id="about" className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('about.title.main')} <span className="text-gradient">{t('about.title.highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-400">
                        {t('about.subtitle')}
                    </p>
                </motion.div>



                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="glass p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {t(`about.values.${value.key}.title`)}
                                </h4>
                                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                    {t(`about.values.${value.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
