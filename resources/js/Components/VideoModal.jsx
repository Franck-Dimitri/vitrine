import { useEffect, useState } from 'react';
import { X, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#080D1A]/90 backdrop-blur-2xl transition-opacity duration-300 animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Dialog with refined architectural radius */}
            <div className="relative z-10 w-full max-w-5xl rounded-lg sm:rounded-xl bg-[#0B132B] border border-slate-700/80 shadow-2xl overflow-hidden shadow-black flex flex-col">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080D1A]/60">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                        <span className="text-white font-semibold">Film Institutionnel</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400">Vitrine Consulting SARL (Showreel 2026)</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                            title={isMuted ? 'Activer le son' : 'Couper le son'}
                        >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                            title="Fermer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Video Player Container */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                    {/* Simulated High-Resolution Showreel with Authentic Visuals */}
                    <video
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    >
                        <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Cinematic Overlay Banner */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#080D1A]/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pointer-events-none">
                        <div>
                            <div className="text-xs font-mono text-[#00D084] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" />
                                Bâtisseur d'Écosystèmes
                            </div>
                            <h3 className="font-display font-light text-sm sm:text-base text-white">
                                « Nous construisons des vitrines. Nous créons des écosystèmes. »
                            </h3>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                            Douala, Cameroun • 8 Filiales
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
