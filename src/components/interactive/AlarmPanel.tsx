import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type AlarmStatus = 'normal' | 'warning' | 'critical';

interface AlarmIndicator {
  name: string;
  status: AlarmStatus;
  message: string;
}

interface AlarmPanelProps {
  alarms?: AlarmIndicator[];
}

const defaultAlarms: AlarmIndicator[] = [
  { name: 'pressure', status: 'critical', message: 'PRESSÃO EXCESSIVA' },
  { name: 'temperature', status: 'warning', message: 'TEMPERATURA ELEVADA' },
  { name: 'flow', status: 'normal', message: 'FLUXO NORMAL' }
];

const AlarmPanel: React.FC<AlarmPanelProps> = ({ alarms = defaultAlarms }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const alarmsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!panelRef.current) return;

    const alarmElements = alarmsRef.current;
    
    // Create ScrollTrigger for the alarm panel
    const triggerInstance = ScrollTrigger.create({
      trigger: panelRef.current,
      start: "top 70%",
      onEnter: () => {
        // Animate each alarm sequentially
        alarmElements.forEach((element, index) => {
          const light = element.querySelector('.alarm-light');
          if (!light) return;
          
          const status = element.getAttribute('data-status');
          const color = status === 'critical' ? '#ff0000' : 
                       status === 'warning' ? '#ffaa00' : 
                       '#00cc44';
          
          // Create flashing animation for critical and warning alarms
          if (status === 'critical') {
            // Critical alarms flash indefinitely with stronger glow
            gsap.to(light, {
              backgroundColor: color,
              boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`,
              duration: 0.5,
              repeat: -1,
              repeatDelay: 0.3,
              yoyo: true,
              delay: index * 0.2,
              onComplete: function() {
                // Even though this won't execute due to infinite repeat,
                // we'll add it for consistency
                element.classList.add('active');
              }
            });
          } else if (status === 'warning') {
            // Warning alarms flash a few times then stay lit
            gsap.to(light, {
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
              duration: 0.5,
              repeat: 3,
              repeatDelay: 0.5,
              yoyo: true,
              delay: index * 0.2,
              onComplete: function() {
                // Add active class after animation completes
                element.classList.add('active');
                // Keep light on after flashing
                gsap.to(light, {
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}`,
                  duration: 0.3
                });
              }
            });
          } else {
            // Normal alarms just light up without flashing
            gsap.to(light, {
              backgroundColor: color,
              boxShadow: `0 0 5px ${color}`,
              duration: 0.5,
              delay: index * 0.2,
              onComplete: function() {
                element.classList.add('active');
              }
            });
          }
        });
      },
      once: false
    });

    return () => {
      // Clean up ScrollTrigger instance
      triggerInstance.kill();
    };
  }, [alarms]);

  return (
    <div 
      className="bg-airflow-gray rounded-lg p-6 shadow-md alarm-panel" 
      ref={panelRef}
    >
      <h3 className="text-xl font-bold mb-4 text-airflow-blue">Sistema de Monitoramento</h3>
      <div className="space-y-3">
        {alarms.map((alarm, index) => (
          <div 
            key={alarm.name}
            className={`flex items-center p-3 border border-gray-300 rounded bg-white alarm-indicator ${
              alarm.status === 'critical' ? 'alarm-critical' : 
              alarm.status === 'warning' ? 'alarm-warning' : 
              'alarm-normal'
            }`}
            data-status={alarm.status}
            ref={el => {
              if (el) alarmsRef.current[index] = el;
            }}
          >
            <div 
              className="alarm-light w-5 h-5 rounded-full bg-gray-300 mr-3 flex-shrink-0"
              style={{ transition: 'background-color 0.3s' }}
            ></div>
            <span className={`font-medium ${
              alarm.status === 'critical' ? 'text-red-600' : 
              alarm.status === 'warning' ? 'text-amber-600' : 
              'text-green-600'
            }`}>
              {alarm.message}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .alarm-indicator.active {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
        
        .alarm-critical.active {
          border-color: rgba(255, 0, 0, 0.5);
          box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
        }
        
        .alarm-warning.active {
          border-color: rgba(255, 170, 0, 0.5);
          box-shadow: 0 0 5px rgba(255, 170, 0, 0.3);
        }
        
        .alarm-normal.active {
          border-color: rgba(0, 204, 68, 0.5);
          box-shadow: 0 0 5px rgba(0, 204, 68, 0.3);
        }
      `}</style>
    </div>
  );
};

export default AlarmPanel;
