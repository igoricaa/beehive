import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    debugger;
    const data = await resend.emails.send({
      from: `Kontakt forma <contact@bhive.agency>`,
      to: ['igor@bhive.agency'],
      subject: 'cf bhive.agency',
      react: EmailTemplate({ name, email, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
