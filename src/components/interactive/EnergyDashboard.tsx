
import React, { useEffect, useRef, useState } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register Chart.js components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface EnergyDashboardProps {
  initialCOP?: number;
  maxCOP?: number;
  energyRate?: number; // R$ per kWh
}

const EnergyDashboard: React.FC<EnergyDashboardProps> = ({ 
  initialCOP = 0, 
  maxCOP = 4.5,
  energyRate = 0.8 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartCanvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  
  const [cop, setCop] = useState(initialCOP);
  const [compressorLoad, setCompressorLoad] = useState(0);
  const [energySavings, setEnergySavings] = useState(0);

  // Create and update chart
  useEffect(() => {
    if (!chartCanvasRef.current) return;

    // Create chart instance if it doesn't exist
    if (!chartInstanceRef.current) {
      const ctx = chartCanvasRef.current.getContext('2d');
      if (!ctx) return;
      
      chartInstanceRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 100],
            backgroundColor: ['#2ecc71', '#ecf0f1'],
            borderWidth: 0,
            circumference: 180,
            rotation: 270
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '85%',
          plugins: {
            tooltip: {
              enabled: false
            },
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Update chart data based on current COP
    const normalizedValue = (cop / maxCOP) * 100;
    chartInstanceRef.current.data.datasets[0].data = [normalizedValue, 100 - normalizedValue];
    chartInstanceRef.current.update();

    return () => {
      // Cleanup chart instance on component unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [cop, maxCOP]);

  // Set up scroll trigger animation
  useEffect(() => {
    if (!containerRef.current) return;
    
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      onEnter: () => {
        // Animate COP from initial value to a high value
        gsap.to({
          value: initialCOP
        }, {
          value: maxCOP * 0.85, // Target 85% of max COP for good but not perfect efficiency
          duration: 2,
          ease: "power2.out",
          onUpdate: function(this: { value: number }) {
            const newCOP = parseFloat(this.value.toFixed(1));
            setCop(newCOP);
            
            // Update related values
            const loadPercentage = Math.floor((newCOP / maxCOP) * 80) + 20; // 20-100% range
            setCompressorLoad(loadPercentage);
            
            // Calculate simulated energy savings (simplified formula)
            // Assuming higher COP means better efficiency and more savings
            const savings = Math.floor((newCOP / maxCOP) * 2500);
            setEnergySavings(savings);
          }
        });
      },
      once: false
    });
    
    return () => {
      // Clean up the trigger
      trigger.kill();
    };
  }, [initialCOP, maxCOP]);

  return (
    <div 
      ref={containerRef}
      className="energy-dashboard bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg text-white"
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
      }}
    >
      <h3 className="text-xl font-bold mb-4">Dashboard de Eficiência</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="gauge-container relative">
          <div style={{ height: '180px' }}>
            <canvas ref={chartCanvasRef}></canvas>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{cop.toFixed(1)}</span>
            <span className="text-sm opacity-80">COP</span>
          </div>
        </div>
        
        <div className="energy-stats space-y-4 flex flex-col justify-center">
          <div className="stat-item">
            <div className="text-sm opacity-70">Carga do Compressor</div>
            <div className="flex items-center">
              <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${compressorLoad}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">{compressorLoad}%</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="text-sm opacity-70">Economia de Energia</div>
            <div className="text-2xl font-bold text-green-400">
              R$ {energySavings.toFixed(2)}
            </div>
            <div className="text-xs opacity-50">Estimativa mensal</div>
          </div>
          
          <div className="stat-item">
            <div className="text-sm opacity-70">Taxa de Energia</div>
            <div className="text-lg">
              R$ {energyRate.toFixed(2)} <span className="text-xs opacity-50">/ kWh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;
