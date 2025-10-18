// components/ParticlesHero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Transparent for overlay use
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 120, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#2563eb" }, // Blue color
        links: {
          color: "#3b82f6", // Lighter blue for links
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1.5,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 1.5,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 50,
        },
        opacity: { 
          value: 0.6,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
          }
        },
        shape: { type: "circle" },
        size: { 
          value: { min: 2, max: 5 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
          }
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
    />
  );
}