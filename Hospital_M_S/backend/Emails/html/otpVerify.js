const otpHtml = (otp, expiry) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                background: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                max-width: 600px;
                margin: auto;
            }
            h2 {
                color: #333;
            }
            p {
                font-size: 16px;
                color: #555;
            }
            .otp {
                font-size: 24px;
                font-weight: bold;
                color: #4CAF50;
            }
            .expiry {
                font-size: 14px;
                color: #999;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #aaa;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>OTP Verification</h2>
            <p>Your OTP is:</p>
            <div class="otp">${otp}</div>
            <p class="expiry">This OTP is valid for ${expiry} minutes.</p>
            <div class="footer">
                <p>If you did not request this, please ignore this email.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

export default otpHtml;
