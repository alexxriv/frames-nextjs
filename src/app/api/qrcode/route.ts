// src/app/api/qrcode/route.ts
import QRCode from 'qrcode';

export async function GET(req: Request) {
  // Set the URL you want to encode as a QR code
  const url = 'http://jindo.dev.naver.com/collie';

  // Generate the QR code as a PNG image
  const qrCodeImage = await QRCode.toDataURL(url);

  // Return the image data in response
  return new Response(qrCodeImage, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
}
