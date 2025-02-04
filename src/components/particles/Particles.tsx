// Imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

// Types
import type { Engine } from "tsparticles-engine"

const ParticlesComponent = () => {
    const GRID_COLUMNS = 20; // Number of grid columns
    const GRID_ROWS = 10; // Number of grid rows
    const PARTICLE_SIZE = 10; // Size of each square in pixels
    const SPACING = 30; // Distance between each square

    // Generate grid positions
    const gridPositions = useMemo(() => {
        const positions = [];
        for (let row = 0; row < GRID_ROWS; row++) {
            for (let col = 0; col < GRID_COLUMNS; col++) {
                positions.push({
                    x: col * SPACING + 10, // Offset to center
                    y: row * SPACING + 10,
                });
            }
        }
        return positions;
    }, []);

    const options = useMemo(() => {
        return {
            fullScreen: { enable: true, zIndex: -1 }, // Render in background
            background: { color: "#000" }, // Black background for Matrix effect
            particles: {
                number: { value: gridPositions.length, density: { enable: false } }, // Fixed number of particles
                color: { value: "#00FF00" }, // Green color
                shape: { type: "edge" }, // Square shape
                size: { value: PARTICLE_SIZE, random: false }, // Fixed square size
                opacity: {
                    value: 0, // Start invisible
                    animation: {
                        enable: true,
                        speed: 0.1,
                        minimumValue: .2,
                        sync: false,
                    },
                },
                move: { enable: false }, // Static squares
                collisions: { enable: false }, // No stacking
                life: {
                    duration: { value: 5 }, // Each square lasts for a short time
                    delay: { value: { min: 0, max: 2 } }, // Random fade-in delay
                },
                position: {
                    random: false,
                },
                emitters: {
                    direction: "none",
                    life: { count: 0 },
                    rate: {
                        quantity: gridPositions.length, // Spawn all at once
                        delay: 0,
                    },
                    particles: {
                        position: gridPositions, // Use predefined grid positions
                    },
                },
            },
            interactivity: {
                events: {
                    onHover: { enable: false }, // No hover effect
                    onClick: { enable: false }, // No click effect
                },
            },
        };
    }, [gridPositions]);

    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        await loadSlim(engine);
        // await loadFull(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />
};

export default ParticlesComponent;
