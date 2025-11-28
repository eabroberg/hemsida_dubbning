import { motion } from 'framer-motion';
import { AudioLines, Infinity as InfinityIcon, Smile, Users, Captions, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <AudioLines size={32} />,
            title: t('features.items.voice.title'),
            description: t('features.items.voice.description'),
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
        },
        {
            icon: <InfinityIcon size={32} />,
            title: t('features.items.sync.title'),
            description: t('features.items.sync.description'),
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
        },
        {
            icon: <Smile size={32} />,
            title: t('features.items.emotion.title'),
            description: t('features.items.emotion.description'),
            color: 'text-orange-500',
            bg: 'bg-orange-500/10',
        },
        {
            icon: <Users size={32} />,
            title: t('features.items.multiSpeaker.title'),
            description: t('features.items.multiSpeaker.description'),
            color: 'text-green-500',
            bg: 'bg-green-500/10',
        },
        {
            icon: <Captions size={32} />,
            title: t('features.items.subtitles.title'),
            description: t('features.items.subtitles.description'),
            color: 'text-red-500',
            bg: 'bg-red-500/10',
        },
        {
            icon: <UserCheck size={32} />,
            title: t('features.items.quality.title'),
            description: t('features.items.quality.description'),
            color: 'text-teal-500',
            bg: 'bg-teal-500/10',
        },
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('features.title.main')} <span className="text-gradient">{t('features.title.highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-400">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.bg} ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
