import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY!);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendCatalogueEmail(
  recipientEmail: string,
  recipientName: string,
  brandName: string,
  requestedCatalogues: string[]
): Promise<boolean> {
  const subject = `Your ${brandName} Catalogue Request - CartaRep`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          font-family: 'Inter', Arial, sans-serif; 
          line-height: 1.6; 
          color: #333;
          background-color: #000;
          color: #fff;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 20px;
          background: linear-gradient(135deg, #000 0%, #111 100%);
          border: 1px solid #00ffff30;
        }
        .header { 
          text-align: center; 
          margin-bottom: 30px;
          border-bottom: 2px solid #00ffff;
          padding-bottom: 20px;
        }
        .logo { 
          font-size: 2rem; 
          font-weight: bold; 
          color: #fff;
          margin-bottom: 10px;
        }
        .tagline { 
          color: #00ffff; 
          font-size: 1.1rem;
        }
        .content { 
          margin-bottom: 30px; 
        }
        .catalogue-list {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .catalogue-item {
          margin: 10px 0;
          padding: 10px;
          background: rgba(0, 255, 255, 0.1);
          border-radius: 4px;
          color: #fff;
        }
        .footer { 
          border-top: 1px solid #00ffff30;
          padding-top: 20px;
          text-align: center;
          color: #ccc;
          font-size: 0.9rem;
        }
        .brand-name {
          color: #00ffff;
          font-weight: bold;
        }
        .next-steps {
          background: rgba(0, 255, 255, 0.1);
          border-left: 4px solid #00ffff;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">CartaRep</div>
          <div class="tagline">Design consultancy agency in the heart of London</div>
        </div>
        
        <div class="content">
          <h2>Hello ${recipientName},</h2>
          
          <p>Thank you for your interest in <span class="brand-name">${brandName}</span>! We're delighted to help you with your lighting project needs.</p>
          
          <p>You've requested the following catalogues:</p>
          
          <div class="catalogue-list">
            ${requestedCatalogues.map(catalogue => `
              <div class="catalogue-item">📋 ${catalogue}</div>
            `).join('')}
          </div>
          
          <div class="next-steps">
            <h3>📞 Next Steps</h3>
            <p>Our lighting specialists will personally curate and send you the requested catalogues within 24 hours. We'll also include:</p>
            <ul>
              <li>✨ Latest product specifications and technical details</li>
              <li>🎨 Design inspiration and project case studies</li>
              <li>💡 Professional lighting consultation offer</li>
              <li>🎯 Bespoke project specification guidance</li>
            </ul>
          </div>
          
          <p>As specialists in bespoke project specifications, we provide guidance and tailored solutions to specifiers, contractors and businesses in the design industry.</p>
          
          <p>If you have any immediate questions or would like to discuss your project requirements, please don't hesitate to contact us directly.</p>
        </div>
        
        <div class="footer">
          <p><strong>CartaRep Design Consultancy</strong></p>
          <p>📍 London, United Kingdom</p>
          <p>📧 Email us for immediate assistance</p>
          <p>🌐 Professional lighting consultation services</p>
          <br>
          <p><em>This email was sent because you requested catalogue information through our website. We respect your privacy and will only use your contact details to provide the requested materials and relevant lighting consultation services.</em></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Hello ${recipientName},

Thank you for your interest in ${brandName}! We're delighted to help you with your lighting project needs.

You've requested the following catalogues:
${requestedCatalogues.map(catalogue => `• ${catalogue}`).join('\n')}

Next Steps:
Our lighting specialists will personally curate and send you the requested catalogues within 24 hours. We'll also include:
• Latest product specifications and technical details
• Design inspiration and project case studies  
• Professional lighting consultation offer
• Bespoke project specification guidance

As specialists in bespoke project specifications, we provide guidance and tailored solutions to specifiers, contractors and businesses in the design industry.

If you have any immediate questions or would like to discuss your project requirements, please don't hesitate to contact us directly.

Best regards,
CartaRep Design Consultancy
London, United Kingdom

This email was sent because you requested catalogue information through our website. We respect your privacy and will only use your contact details to provide the requested materials and relevant lighting consultation services.
  `;

  return await sendEmail({
    to: recipientEmail,
    from: 'catalogues@cartarep.com', // You should use a verified sender domain
    subject,
    html,
    text
  });
}