import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    phase: number;
}

export const AIProcessingVisual = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let time = 0;

        // Neural Nodes Configuration
        const nodes: Node[] = [];
        const nodeCount = 40;
        const connectionDistance = 150;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                phase: Math.random() * Math.PI * 2
            });
        }

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);

        const drawWaveform = (baseY: number, color: string, speed: number, amplitude: number, frequency: number) => {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;

            for (let x = 0; x < width; x++) {
                // Complex waveform combining multiple sine waves
                const envelope = Math.sin(x / width * Math.PI); // Taper ends
                const y = baseY +
                    Math.sin(x * frequency + time * speed) * amplitude * envelope +
                    Math.sin(x * frequency * 2 + time * speed * 1.5) * (amplitude * 0.5) * envelope;

                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const drawNeuralNetwork = () => {
            nodes.forEach((node, i) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Pulse size
                const pulse = Math.sin(time * 2 + node.phase) * 0.5 + 1;

                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(0, 229, 255, ${0.4 * pulse})`
                    : `rgba(0, 100, 200, ${0.4 * pulse})`;
                ctx.fill();

                // Connect nodes
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(123, 97, 255, ${0.1 * (1 - dist / connectionDistance)})`
                            : `rgba(100, 80, 200, ${0.15 * (1 - dist / connectionDistance)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });
        };

        const animate = () => {
            // Clear with fade for trail effect
            ctx.fillStyle = isDark ? 'rgba(5, 5, 10, 0.2)' : 'rgba(248, 250, 252, 0.2)';
            ctx.fillRect(0, 0, width, height);

            time += 0.02;

            // Draw Neural Network (Background)
            drawNeuralNetwork();

            // Draw Waveforms (Midground)
            // Cyan Wave
            drawWaveform(
                height * 0.5,
                isDark ? 'rgba(0, 229, 255, 0.3)' : 'rgba(0, 150, 200, 0.3)',
                1, 60, 0.005
            );
            // Purple Wave
            drawWaveform(
                height * 0.5,
                isDark ? 'rgba(123, 97, 255, 0.3)' : 'rgba(100, 80, 200, 0.3)',
                0.8, 80, 0.003
            );
            // Green Wave
            drawWaveform(
                height * 0.5,
                isDark ? 'rgba(0, 255, 179, 0.2)' : 'rgba(0, 180, 100, 0.2)',
                1.2, 40, 0.007
            );

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, [isDark]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
        />
    );
};
