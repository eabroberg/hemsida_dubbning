import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages } from '../data/languages';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LanguageModal = ({ isOpen, onClose }: LanguageModalProps) => {
    const { t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-surface border border-black/10 dark:border-white/10 rounded-3xl w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl pointer-events-auto flex flex-col">
                            {/* Header */}
                            <div className="p-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-surface/50 backdrop-blur-md">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{t('languages.modalTitle')}</h3>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{t('languages.subtitle')}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-gray-900 dark:text-white"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Search */}
                            <div className="p-6 pb-0">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-500" size={20} />
                                    <input
                                        type="text"
                                        placeholder={t('languages.searchPlaceholder')}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-background border border-black/10 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 text-gray-900 dark:text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Grid */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {filteredLanguages.map((lang) => (
                                        <div
                                            key={lang.code}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
                                        >
                                            <img
                                                src={`https://flagcdn.com/w40/${lang.code}.png`}
                                                srcSet={`https://flagcdn.com/w80/${lang.code}.png 2x`}
                                                width="24"
                                                height="18"
                                                alt={`${lang.name} flag`}
                                                className="rounded-sm shadow-sm opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                            <span className="text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium transition-colors">
                                                {lang.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                {filteredLanguages.length === 0 && (
                                    <div className="text-center py-12 text-gray-600 dark:text-gray-500">
                                        {t('languages.noResults')} "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
