import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users, leads } from '../../../../db/schema'; // পাথ ঠিকমতো চেক করবেন
import { eq } from 'drizzle-orm';

// টেলিগ্রাম মেসেজ পাঠানোর ফাংশন
async function sendTelegramMessage(chatId: string, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: 'HTML' }),
    });
    return res.ok;
  } catch (error) {
    console.error('Telegram Error:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    // ১. এক্সটেনশন থেকে ডাটা রিসিভ করা
    const body = await req.json();
    const { telegramId, keyword, postText, postUrl } = body;

    if (!telegramId || !postUrl) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 });
    }

    // ২. চেক করা এই পোস্টটা অলরেডি পাঠানো হয়েছে কিনা (Duplicate Check)
    // নোট: রিয়েল লাইফে আমরা ইউজার আইডি দিয়েও চেক করব, আপাতত সিম্পল রাখছি
    /* Production Optimization: 
       আমরা এখানে চেক করতে পারি ইউজার 'Active' কিনা বা তার সাবস্ক্রিপশন আছে কিনা।
    */

    // ৩. টেলিগ্রামে মেসেজ পাঠানো
    const message = `
🔥 <b>New Lead Found!</b>
------------------------
<b>Keyword:</b> ${keyword}
<b>Post:</b> ${postText.substring(0, 150)}...

🔗 <a href="${postUrl}">View Post</a>
    `;

    const sent = await sendTelegramMessage(telegramId, message);

    if (sent) {
      // ৪. ডাটাবেসে লগ রাখা (Optional for now)
      // await db.insert(leads).values({ ... });
      
      return NextResponse.json({ success: true, message: 'Notification sent!' });
    } else {
      return NextResponse.json({ error: 'Failed to send Telegram msg' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}