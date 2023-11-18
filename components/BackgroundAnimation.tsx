import React, { useEffect, useRef } from 'react';

function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // draw here
            animationFrameId = window.requestAnimationFrame(render);
        };
        const animate = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />;
    // Initialize points here...
  };