import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function detectBrowserInfo(): { device: string; location: string; time: string } {
  const minutesAgo = Math.floor(Math.random() * 10) + 2; // Between 2-12 minutes ago
  
  let deviceInfo = "Unknown Device";
  const userAgent = navigator.userAgent;
  
  if (/iPhone/.test(userAgent)) {
    deviceInfo = "iPhone 14 – Safari";
  } else if (/Android/.test(userAgent)) {
    deviceInfo = "Android – Chrome";
  } else if (/Windows/.test(userAgent)) {
    deviceInfo = "Windows PC – " + (/Chrome/.test(userAgent) ? "Chrome" : /Firefox/.test(userAgent) ? "Firefox" : "Edge");
  } else if (/Macintosh/.test(userAgent)) {
    deviceInfo = "MacBook – " + (/Chrome/.test(userAgent) ? "Chrome" : "Safari");
  }
  
  // This is just for display, not actually detecting real location
  const locations = [
    "Istanbul, Turkey", 
    "Moscow, Russia", 
    "Lagos, Nigeria",
    "Kiev, Ukraine",
    "Beijing, China",
    "Manila, Philippines"
  ];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  
  return {
    device: deviceInfo,
    location: randomLocation,
    time: `${minutesAgo} minutes ago`
  };
}
