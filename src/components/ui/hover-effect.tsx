
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { AnimatedIconProps } from "@/components/ui/animated-icons";

type IconType = LucideIcon | React.FC<AnimatedIconProps>;

export const HoverEffect = ({
  items,
  className,
  onNavigate,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: IconType;
    color?: string;
    isVisible?: boolean;
  }[];
  className?: string;
  onNavigate: (url: string) => void;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-airflow-blue/10 dark:bg-airflow-blue/30 block rounded-lg z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.icon && (
              <div className={`${item.color || 'text-airflow-blue'} mb-4`}>
                {typeof item.icon === 'function' && 'isVisible' in item ? (
                  <item.icon isVisible={item.isVisible} />
                ) : (
                  <item.icon size={32} />
                )}
              </div>
            )}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="text-airflow-blue hover:bg-airflow-blue hover:text-white border-airflow-blue" 
                onClick={() => onNavigate(item.link)}
              >
                Saiba Mais
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-5 overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h4 className={cn("text-2xl font-semibold leading-none tracking-tight mb-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-base text-gray-700",
        className
      )}
    >
      {children}
    </p>
  );
};
