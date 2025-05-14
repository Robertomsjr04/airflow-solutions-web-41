
import { AnimatedShieldIcon } from './shield-icon';
import { AnimatedUsersIcon } from './users-icon';
import { AnimatedBuildingIcon } from './building-icon';
import { AnimatedChartIcon } from './chart-icon';
import { AnimatedAirVentIcon } from './air-vent-icon';
import { AnimatedSettingsIcon } from './settings-icon';
import { AnimatedActivityIcon } from './activity-icon';
import { AnimatedWrenchIcon } from './wrench-icon';
import { AnimatedThermometerIcon } from './thermometer-icon';
import { AnimatedShieldCheckIcon } from './shield-check-icon';
import { useScrollVisibility } from './use-scroll-visibility';
import { type AnimatedIconProps } from './types';

// Export all animated icons as a single object
export const AnimatedIcons = {
  Shield: AnimatedShieldIcon,
  Users: AnimatedUsersIcon,
  Building: AnimatedBuildingIcon,
  Chart: AnimatedChartIcon,
  AirVent: AnimatedAirVentIcon,
  Settings: AnimatedSettingsIcon,
  Activity: AnimatedActivityIcon,
  Wrench: AnimatedWrenchIcon,
  Thermometer: AnimatedThermometerIcon,
  ShieldCheck: AnimatedShieldCheckIcon
};

export {
  AnimatedShieldIcon,
  AnimatedUsersIcon,
  AnimatedBuildingIcon,
  AnimatedChartIcon,
  AnimatedAirVentIcon,
  AnimatedSettingsIcon,
  AnimatedActivityIcon,
  AnimatedWrenchIcon,
  AnimatedThermometerIcon,
  AnimatedShieldCheckIcon,
  useScrollVisibility,
  type AnimatedIconProps
};
