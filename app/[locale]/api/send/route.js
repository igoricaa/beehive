import { rateLimit } from '@/utils/rate-limit';
import { EmailTemplate } from '../../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

const verifyRecaptcha = async (token) => {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
    { method: 'POST' }
  );

  const recaptchaData = await recaptchaResponse.json();

  return recaptchaData.success;
};

export async function POST(req) {
  try {
    limiter.check(req, 3);

    const { name, email, message, recaptcha_token } = await req.json();

    if (!name || !email || !message || !email.includes('@')) {
      return Response.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const recaptchaSuccess = await verifyRecaptcha(recaptcha_token);
    if (!recaptchaSuccess) {
      return Response.json({ error: 'Invalid reCAPTCHA' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: `Kontakt forma <contact@bhive.agency>`,
      to: [
        'igor@bhive.agency',
        'stanisavljevic.igor4@gmail.com',
        'darja@bhive.agency',
      ],
      subject: 'cf bhive.agency',
      react: EmailTemplate({ name, email, message }),
    });

    return Response.json(data);
  } catch (error) {
    if (error.statusCode === 429) {
      return Response.json({ error: 'Too many requests' }, { status: 429 });
    }
    return Response.json({ error });
  }
}
