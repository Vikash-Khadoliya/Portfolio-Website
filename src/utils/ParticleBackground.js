import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "./particlebackground.scss";
import Hero from "../components/hero/Hero";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (containerBox) => {}, []);

  return (
    <div className="bcimage" id="home">
      <div className="child">
        <Particles
          className="wrapper"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {},
            fpsLimit: 100,
            fullScreen: {
              enable: 1,
              zIndex: 0,
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 120,
                  duration: 0.5,
                },
                push: {
                  quantity: 2,
                },
              },
            },
            particles: {
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 3 },
              },
              number: {
                value: 55,
              },
              move: {
                direction: "random",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                speed: "default",
              },
              opacity: {
                value: 0.15,
              },
              collisions: {
                enable: true,
              },
            },
          }}
        />
        <div className="hero-section">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default ParticleBackground;
