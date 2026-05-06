export function SacredBackground() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
        >
            {/* grid sagrado */}
            <div className="absolute inset-0 sacred-grid opacity-40" />

            {/* névoa / atmosfera */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,181,109,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,245,220,0.07),transparent_18%),radial-gradient(circle_at_20%_80%,rgba(214,181,109,0.08),transparent_22%)]" />

            {/* halo principal */}
            <div className="absolute left-1/2 top-[8%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

            {/* luz vertical */}
            <div className="absolute left-1/2 top-0 h-[70vh] w-[42vw] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,245,220,0.10),transparent_70%)] blur-3xl" />

            {/* glow inferior */}
            <div className="absolute bottom-[-10%] left-1/2 h-[380px] w-[75vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

            {/* vinheta */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.45)_100%)]" />

            {/* noise */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light [background-image:url('/noise.jpg')]" />
        </div>
    );
}