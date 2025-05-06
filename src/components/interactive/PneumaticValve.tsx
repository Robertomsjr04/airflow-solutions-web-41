
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Howl } from 'howler';

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

interface PneumaticValveProps {
  onValveChange?: (openness: number) => void;
}

const PneumaticValve: React.FC<PneumaticValveProps> = ({ onValveChange }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const handleRef = useRef<SVGCircleElement>(null);
  const airFlowRef = useRef<SVGPathElement>(null);
  const valveSoundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Initialize the valve sound
    valveSoundRef.current = new Howl({
      src: ['/lovable-uploads/valve-hiss.mp3'],
      volume: 0.7,
      preload: true,
      html5: true
    });

    if (!svgRef.current || !handleRef.current || !airFlowRef.current) return;

    const handle = handleRef.current;
    const airFlow = airFlowRef.current;
    
    // Set initial state
    gsap.set(airFlow, {
      opacity: 0,
      strokeDasharray: 1000,
      strokeDashoffset: 1000
    });

    // Create draggable for valve handle
    const draggable = Draggable.create(handle, {
      type: "x",
      bounds: { minX: 80, maxX: 110 },
      onDrag: function() {
        // Calculate valve opening percentage (0 to 1)
        const progress = (this.x - 80) / 30;
        
        // Animate the air flow based on valve position
        gsap.to(airFlow, {
          opacity: progress,
          strokeDashoffset: 1000 * (1 - progress),
          duration: 0.3
        });
        
        // Play valve sound when dragging
        if (valveSoundRef.current && !valveSoundRef.current.playing()) {
          valveSoundRef.current.play();
        }
        
        // Call the callback with the current valve position
        if (onValveChange) {
          onValveChange(progress);
        }
      },
      onDragEnd: function() {
        // Stop sound when done dragging
        if (valveSoundRef.current && valveSoundRef.current.playing()) {
          valveSoundRef.current.fade(0.7, 0, 500);
        }
      }
    })[0];

    return () => {
      // Clean up draggable instance
      draggable.kill();
      if (valveSoundRef.current) {
        valveSoundRef.current.unload();
      }
    };
  }, [onValveChange]);

  return (
    <div className="pneumatic-valve-container bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-airflow-blue">Controle de Válvula</h3>
      <div className="mb-2 text-sm text-gray-600">Arraste para ajustar a vazão</div>
      <div className="relative w-full h-32 bg-gray-100 rounded border border-gray-200">
        <svg 
          ref={svgRef}
          className="w-full h-full" 
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Pipe background */}
          <path d="M20,50 L180,50" stroke="#e0e0e0" strokeWidth="12" strokeLinecap="round" />
          
          {/* Pipe foreground */}
          <path d="M20,50 L180,50" stroke="#c0c0c0" strokeWidth="10" strokeLinecap="round" />
          
          {/* Valve body */}
          <path d="M20,50 L180,50" stroke="#333" strokeWidth="8" />
          
          {/* Valve handle */}
          <circle 
            ref={handleRef} 
            cx="80" 
            cy="50" 
            r="15" 
            fill="#555"
            cursor="pointer"
            className="valve-handle hover:fill-airflow-blue transition-colors duration-300"
          />
          
          {/* Valve handle detail */}
          <line x1="80" y1="40" x2="80" y2="60" stroke="#333" strokeWidth="3" pointerEvents="none" />
          
          {/* Air flow path */}
          <path 
            ref={airFlowRef}
            d="M120,50 C140,35 160,65 180,50" 
            stroke="#00a8ff" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
            opacity="0"
            pointerEvents="none"
          />
          
          {/* Arrow indicators */}
          <path d="M160,40 L170,50 L160,60" stroke="#00a8ff" strokeWidth="2" fill="none" opacity="0.7" />
          
          {/* Labels */}
          <text x="30" y="40" fontSize="10" fill="#555" textAnchor="middle">Entrada</text>
          <text x="170" y="40" fontSize="10" fill="#555" textAnchor="middle">Saída</text>
        </svg>
        
        {/* Pressure display */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          Pressão: <span id="pressure-reading">0.0</span> bar
        </div>
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default PneumaticValve;
