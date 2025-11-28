import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mwpdljen", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                console.error("Form submission failed");
                alert("Något gick fel. Försök igen senare.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Något gick fel. Försök igen senare.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('contact.title.main')} <span className="text-gradient">{t('contact.title.highlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                            {t('contact.subtitle')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-surface border border-black/10 dark:border-white/10 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{t('contact.info.email')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">info@dubbai.se</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-surface border border-black/10 dark:border-white/10 flex items-center justify-center text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{t('contact.info.phone')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+46 8 123 45 67</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-surface border border-black/10 dark:border-white/10 flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{t('contact.info.location')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Malmö, Sverige</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-8 md:p-10 rounded-3xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.message')}</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <AnimatePresence mode='wait'>
                                    {isSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="w-full bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl p-4 flex items-center justify-center gap-2 font-medium"
                                        >
                                            <CheckCircle size={20} />
                                            {t('contact.form.success')}
                                        </motion.div>
                                    ) : (
                                        <Button
                                            type="submit"
                                            className="w-full gap-2"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={20} />
                                                    {t('contact.form.sending')}
                                                </>
                                            ) : (
                                                <>
                                                    {t('contact.form.submit')}
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
