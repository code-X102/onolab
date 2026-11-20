import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const { text, image } = await req.json();
    if (!text && !image) return NextResponse.json({ error: 'Add a sentence or a handwriting sample to review.' }, { status: 400 });
    const supabase = await createServerSupabase();
    let user: any = null;
    if (supabase) {
      const { data } = await supabase.auth.getUser();
      user = data.user;
      if (!user) return NextResponse.json({ error: 'Sign in to receive writing feedback.' }, { status: 401 });
    }
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      const feedback = 'Demo feedback: Great effort! Check your spacing (띄어쓰기) and particles (은/는, 이/가). Your teacher can review your practice when the academy account is connected.';
      if (supabase && user && text) await supabase.from('writing_submissions').insert({ student_id: user.id, text_content: text, ai_feedback: feedback });
      return NextResponse.json({ feedback, score: 82, mode: 'demo' });
    }
    const parts: any[] = [{ text: `You are a kind Korean writing tutor for school-age learners whose first language may be Sinhala or English. Review the learner's Korean writing. Explain in simple English. Return: (1) a short warm encouragement, (2) corrected Korean with spacing, (3) up to 3 specific mistakes with simple explanations, (4) one small next practice. Never invent errors. If the writing is too short or illegible, ask for clarification. Keep response under 120 words. ${text ? `Typed writing: ${text}` : 'Review the handwriting in the attached image.'}` }];
    if (image && typeof image === 'string') parts.push({ inline_data: { mime_type: 'image/png', data: image.replace(/^data:image\/png;base64,/, '') } });
    const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts }], generationConfig: { temperature: 0.3, maxOutputTokens: 350 } }) });
    const result = await response.json();
    if (!response.ok) return NextResponse.json({ error: 'The writing coach is temporarily unavailable. Please try again.' }, { status: 502 });
    const feedback = result?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join('\n') || 'Try writing one more time.';
    if (supabase && user) {
      const { error } = await supabase.from('writing_submissions').insert({ student_id: user.id, text_content: text || null, ai_feedback: feedback });
      if (error) return NextResponse.json({ error: 'Feedback was created but could not be saved to your account.' }, { status: 502 });
    }
    return NextResponse.json({ feedback, score: null, mode: 'gemini' });
  } catch { return NextResponse.json({ error: 'Could not review this practice. Please try again.' }, { status: 500 }); }
}
