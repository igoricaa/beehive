import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${email}`,
      to: 'stanisavljevic.igor@proton.me',
      subject: 'cf bhive.agency',
      react: EmailTemplate({ name, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

// export async function POST(req) {
//   const { name, email, message } = await req.json();

//   try {
//     const data = await resend.emails.send({
//       from: 'Hello <rayden@sonya.dev>', // your verified domain
//       to: `${email}`, // the email address you want to send a message
//       subject: `${name} has a message!`,
//       react: MessageUsEmail({ name, email, message }),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
