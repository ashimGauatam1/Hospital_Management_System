const appointmentHtml = (doctorName, problem, date,appointid) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                background: #ffffff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                margin: auto;
                border-left: 5px solid #4CAF50;
            }
            h2 {
                color: #4CAF50;
                text-align: center;
                font-size: 24px;
            }
            p {
                font-size: 16px;
                color: #555;
                line-height: 1.6;
            }
            .details {
                font-size: 18px;
                font-weight: bold;
                color: #4CAF50;
                text-align: center;
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #4CAF50;
                border-radius: 5px;
                background-color: #e8f5e9;
            }
            .footer {
                margin-top: 30px;
                font-size: 14px;
                color: #aaa;
                text-align: center;
            }
            .footer p {
                margin: 5px 0;
            }
            @media (max-width: 600px) {
                .container {
                    padding: 20px;
                }
                h2 {
                    font-size: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Appointment Confirmation</h2>
            <p>Dear Valued Patient,</p>
            <p>We are pleased to confirm your appointment with the following details:</p>
            <p class="details">Doctor Name: ${doctorName}</p>
            <p class="details">Appointment ID: ${appointid}</p>
            <p class="details">Problem: ${problem}</p>
            <p class="details">Date: ${date}</p>
            <p>Should you have any questions or require further assistance, please do not hesitate to contact us.</p>
            <div class="footer">
                <p>Best regards,</p>
                <p>City Hospital</p>
                <p>If you did not schedule this appointment, please disregard this message.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

export default appointmentHtml;
