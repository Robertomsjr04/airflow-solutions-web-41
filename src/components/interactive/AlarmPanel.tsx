
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
          if (status === 'critical' || status === 'warning') {
            gsap.to(light, {
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
              duration: 0.5,
              repeat: status === 'critical' ? -1 : 3,
              repeatDelay: status === 'critical' ? 0.3 : 0.5,
              yoyo: true,
              delay: index * 0.2,
            });
          } else {
            gsap.to(light, {
              backgroundColor: color,
              boxShadow: `0 0 5px ${color}`,
              duration: 0.5,
              delay: index * 0.2,
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
    <div className="bg-airflow-gray rounded-lg p-6 shadow-md" ref={panelRef}>
      <h3 className="text-xl font-bold mb-4 text-airflow-blue">Sistema de Monitoramento</h3>
      <div className="space-y-3">
        {alarms.map((alarm, index) => (
          <div 
            key={alarm.name}
            className="flex items-center p-3 border border-gray-300 rounded bg-white"
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
    </div>
  );
};

export default AlarmPanel;
