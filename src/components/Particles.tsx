// Imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

// Types
import type { Engine } from "tsparticles-engine"

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            fullScreen: { enable: true },
            particles: {
                number: { value: 100 },
                color: { value: "#FFF" },
                shape: { type: "circle" },
                opacity: { value: .5 },
                size: { value: 3 },
                move: { enable: true, speed: 1 },
            },
        };
    }, []);

    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        await loadSlim(engine);
        // await loadFull(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />
};

export default ParticlesComponent;
