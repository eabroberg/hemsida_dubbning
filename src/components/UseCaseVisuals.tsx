import { motion } from 'framer-motion';
import { Globe2, MessageCircle, BarChart3, Shield, Lock, Server, Play, Heart, Share2, Users, BookOpen } from 'lucide-react';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};

const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

export const MarketerVisual = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full flex items-center justify-center relative"
        >
            {/* Central Globe */}
            <div className="relative z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center"
                >
                    <Globe2 className="text-blue-400 w-16 h-16" />
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i }}
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-blue-100 dark:border-blue-900/30">
                            <MessageCircle size={14} className="text-blue-500" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Connecting Lines/Network */}
            <div className="absolute inset-0">
                <svg className="w-full h-full opacity-30">
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="100"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-blue-400"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5 }}
                    />
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="140"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-purple-400"
                        strokeDasharray="4 4"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-10 right-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-blue-100 dark:border-blue-900/30 z-20"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <BarChart3 size={16} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500">Engagement</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">+145%</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const EducatorVisual = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full flex items-center justify-center relative"
        >
            {/* Central Book/Content */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
            >
                <div className="w-40 h-48 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-r-xl border-l-4 border-l-green-500 border border-green-200 dark:border-green-800/30 backdrop-blur-sm p-4 flex flex-col items-center justify-center shadow-2xl transform perspective-1000 rotate-y-12">
                    <BookOpen size={40} className="text-green-500 mb-4" />
                    <div className="w-full space-y-2">
                        <div className="h-2 bg-green-500/20 rounded w-3/4 mx-auto" />
                        <div className="h-2 bg-green-500/20 rounded w-1/2 mx-auto" />
                        <div className="h-2 bg-green-500/20 rounded w-2/3 mx-auto" />
                    </div>
                </div>
            </motion.div>

            {/* Language Particles */}
            {['EN', 'ES', 'FR', 'DE', 'JP', 'SE'].map((lang, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                        x: Math.cos(i * 60 * (Math.PI / 180)) * 120,
                        y: Math.sin(i * 60 * (Math.PI / 180)) * 120,
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut"
                    }}
                >
                    <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-lg border border-green-100 dark:border-green-900/30 text-xs font-bold text-green-600 dark:text-green-400">
                        {lang}
                    </div>
                </motion.div>
            ))}

            {/* Connection Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-40 h-40 rounded-full border border-green-500/30"
                />
            </div>
        </motion.div>
    );
};

export const CreatorVisual = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full flex items-center justify-center relative"
        >
            {/* Video Player UI */}
            <div className="relative z-10 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                {/* Video Screen */}
                <div className="h-32 bg-gray-900 relative flex items-center justify-center group">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30"
                    >
                        <Play size={20} className="text-white ml-1" />
                    </motion.div>

                    {/* Audio Waveform */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-center gap-1 pb-2 px-4">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1 bg-red-500/50 rounded-t-sm"
                                animate={{ height: [4, 16, 4] }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.05,
                                    repeatType: "reverse"
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Controls/Stats */}
                <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1 }}
                            >
                                <Heart size={16} className="text-red-500 fill-red-500" />
                            </motion.div>
                            <Share2 size={16} className="text-gray-400" />
                        </div>
                        <div className="text-xs font-mono text-gray-500">1080p HQ</div>
                    </div>
                    <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-red-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                    </div>
                </div>
            </div>

            {/* Floating Comments/Reactions */}
            <motion.div
                className="absolute -right-4 top-1/4 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-red-100 dark:border-red-900/30 flex items-center gap-2"
                animate={{ x: [10, 0, 10], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
                <Users size={14} className="text-blue-500" />
                <span className="text-xs font-bold">+10k Subs</span>
            </motion.div>
        </motion.div>
    );
};

export const EnterpriseVisual = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full flex items-center justify-center relative"
        >
            {/* Central Shield/Security */}
            <div className="relative z-10">
                <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 relative flex items-center justify-center"
                >
                    <Shield size={80} className="text-purple-500 absolute opacity-20" />
                    <Shield size={70} className="text-purple-500 absolute opacity-40" />
                    <Shield size={60} className="text-purple-500 relative z-10" />

                    <motion.div
                        className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
                        animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </div>

            {/* Connected Nodes */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 90}deg) translate(100px) rotate(-${i * 90}deg)`
                    }}
                >
                    <div className="relative group">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-purple-100 dark:border-purple-900/30 flex items-center justify-center z-20 relative">
                            {i % 2 === 0 ? <Server size={20} className="text-purple-500" /> : <Lock size={20} className="text-purple-500" />}
                        </div>
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-1/2 w-[100px] h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent -translate-x-full -translate-y-1/2 -z-10 origin-right"
                            style={{ transform: `rotate(${i * 90 + 180}deg)` }}
                        />
                    </div>
                </motion.div>
            ))}

            {/* Data Flow Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                        x: [0, Math.cos(i * 60 * (Math.PI / 180)) * 100],
                        y: [0, Math.sin(i * 60 * (Math.PI / 180)) * 100],
                        opacity: [1, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "linear"
                    }}
                />
            ))}
        </motion.div>
    );
};
