import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { full_name, email_id, subject, message } = body

        // Validate required fields
        if (!full_name || !email_id || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email_id)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Create transporter with SMTP configuration
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // Email content
        const mailOptions = {
            from: `"${full_name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || 'birukaklilu0110@gmail.com',
            replyTo: email_id,
            subject: `Contact Form: ${subject}`,
            text: `
Name: ${full_name}
Email: ${email_id}
Subject: ${subject}

Message:
${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #d7b64a; border-bottom: 2px solid #d7b64a; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="margin: 20px 0;">
                        <p><strong>Name:</strong> ${full_name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email_id}">${email_id}</a></p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
                        <p style="margin: 0;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
                    </div>
                </div>
            `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error: any) {
        console.error('Email sending error:', error)
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            { status: 500 }
        )
    }
}
